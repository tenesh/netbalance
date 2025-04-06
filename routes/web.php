<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Landlord;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::domain(parse_url(config('app.url'), PHP_URL_HOST))->group(function () {

    Route::get('/', fn() => Inertia::render('public/Home'))->name('home');
    Route::get('/about-us', fn() => Inertia::render('public/About'))->name('about');
    Route::get('/terms', fn() => Inertia::render('public/Terms'))->name('terms');
    Route::get('/policy', fn() => Inertia::render('public/Policy'))->name('policy');
});

Route::domain(parse_url(config('app.frontend_url'), PHP_URL_HOST))->group(function () {

    Route::middleware(['guest'])->group(function () {

        Route::get('/login', [LoginController::class, 'create'])->name('login');
        Route::post('/login', [LoginController::class, 'store']);

        Route::get('/forgot-password', fn() => Inertia::render('auth/ForgotPassword'))->name('password.request');

        Route::get('/reset-password/{token}', fn($token) => Inertia::render('auth/ResetPassword', ['token' => $token]))
            ->name('password.reset');
    });

    Route::middleware(['auth', 'ensure_tenant'])->group(function () {

        Route::get('/', fn() => Inertia::render('tenant/Dashboard'))->name('tenant.dashboard');
    });

    Route::prefix('admin')->middleware(['auth', 'ensure_landlord'])->group(function () {

        Route::get('/', fn() => Inertia::render('landlord/Dashboard'))->name('landlord.dashboard');

        Route::prefix('/tenants')->name('landlord.tenants.')->group(function () {
            Route::get('/', [Landlord\TenantController::class, 'index'])->name('index');
            Route::get('/create', [Landlord\TenantController::class, 'create'])->name('create');
            Route::post('/create', [Landlord\TenantController::class, 'store'])->name('store');
            Route::get('/{id}', [Landlord\TenantController::class, 'show'])->name('show');
            Route::put('/{id}', [Landlord\TenantController::class, 'update'])->name('update');
            Route::delete('/{id}', [Landlord\TenantController::class, 'destroy'])->name('destroy');
        });

        Route::get('/users', fn() => Inertia::render('landlord/Dashboard'))->name('landlord.users');
        Route::get('/billing', fn() => Inertia::render('landlord/Dashboard'))->name('landlord.billing');
        Route::get('/import-export', fn() => Inertia::render('landlord/Dashboard'))->name('landlord.import-export');
        Route::get('/logs', fn() => Inertia::render('landlord/Dashboard'))->name('landlord.logs');
        Route::get('/settings', fn() => Inertia::render('landlord/Dashboard'))->name('landlord.settings');
        Route::get('/logout', fn() => Inertia::render('landlord/Dashboard'))->name('landlord.logout');
    });
});
