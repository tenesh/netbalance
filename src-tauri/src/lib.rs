mod commands;
mod database;
mod event;
mod global;
mod setup;
mod state;

use anyhow::{anyhow, Result};
use std::env;
use std::sync::Mutex;
use tauri::async_runtime::spawn;
use tauri::{AppHandle, Emitter, Manager};
use tracing::{debug, error, info, warn};

use crate::database::get_connection_pool;
use crate::event::{SetupFailed, EVENT_SETUP_FAILED};
use crate::setup::{setup_app, setup_logger};
use crate::state::{DbState, SetupState};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    setup_logger().expect("Logger setup failed");

    tauri::Builder::default()
        .manage(Mutex::new(SetupState::new(true)))
        .setup(|app| {
            spawn(init(app.handle().clone()));
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("Error while running application");
}

async fn init(app: AppHandle) -> Result<()> {
    info!("Start application setup");

    if let Err(e) = setup_app() {
        error!("Application setup failed: {:?}", e);
        app.emit_to(
            "splashscreen",
            EVENT_SETUP_FAILED,
            SetupFailed::new(String::from("Application setup failed")),
        )?;
        return Err(e);
    }

    let pool = match get_connection_pool() {
        Ok(pool) => pool,
        Err(e) => {
            error!("Failed to create database connection pool: {:?}", e);
            app.emit_to(
                "splashscreen",
                EVENT_SETUP_FAILED,
                SetupFailed::new(String::from("Failed to create database connection pool")),
            )?;
            return Err(e);
        }
    };

    app.manage(Mutex::new(DbState::new(pool)));

    let state_mutex = app.state::<Mutex<SetupState>>();

    let mut state_lock = state_mutex
        .lock()
        .map_err(|e| anyhow!("Failed to lock setup state: {:?}", e))?;

    state_lock.backend_done = true;

    if state_lock.backend_done {
        let splash_window = app.get_webview_window("splashscreen").unwrap();
        let main_window = app.get_webview_window("main").unwrap();
        splash_window.close()?;
        main_window.show()?;
    }

    info!("Finished application setup");

    Ok(())
}
