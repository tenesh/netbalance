<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TenantController;
use Illuminate\Support\Facades\Route;

Route::middleware(['guest'])->group(function () {

    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store']);
    Route::get('/forgot-password', [ForgotPasswordController::class, 'create'])->name('password.request');
    Route::post('/forgot-password', [ForgotPasswordController::class, 'store'])->name('password.email');
    Route::get('/reset-password/{token}', [ResetPasswordController::class, 'store'])->name('password.reset');
    Route::post('/reset-password', [ResetPasswordController::class, 'store'])->name('password.update');
});

Route::middleware(['auth'])->group(
    function () {

        Route::get('/', DashboardController::class)->name('dashboard');
        Route::post('/logout', LogoutController::class)->name('logout');
        Route::post('/settings', fn () => dd('Settings'))->name('settings.index');
        Route::get('/imports', fn () => dd('Imports'))->name('imports.index');
        Route::get('/exports', fn () => dd('Exports'))->name('exports.index');
    }
);

Route::middleware(['auth', 'ensure_tenant'])->group(
    function () {

        Route::get('/billing', fn () => dd('Billing'))->name('tenant.billing.index');
    }
);

Route::middleware(['auth', 'ensure_admin'])->group(
    function () {

        Route::get('/tenants', [TenantController::class, 'index'])->name('admin.tenants.index');
        Route::get('/tenants/create', [TenantController::class, 'create'])->name('admin.tenants.create');
        Route::post('/tenants/create', [TenantController::class, 'store'])->name('admin.tenants.store');
        Route::get('/tenants/{id}', [TenantController::class, 'show'])->name('admin.tenants.show');
        Route::put('/tenants/{id}', [TenantController::class, 'update'])->name('admin.tenants.update');
        Route::delete('/tenants/{id}', [TenantController::class, 'destroy'])->name('admin.tenants.destroy');

        Route::get('/users', fn () => dd('Users'))->name('admin.users.index');

        Route::get('/logs', fn () => dd('Logs'))->name('admin.logs.index');
    }
);
