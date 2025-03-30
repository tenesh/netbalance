<?php

use App\Http\Controllers\Auth\LoginController;
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

    Route::middleware(['auth', 'ensure_customer'])->group(function () {

        Route::get('/', fn() => Inertia::render('customer/Dashboard'))->name('customer.dashboard');
    });

    Route::prefix('admin')->middleware(['auth', 'ensure_admin'])->group(function () {

        Route::get('/', fn() => Inertia::render('admin/Dashboard'))->name('admin.dashboard');
        Route::get('/tenants', fn() => Inertia::render('admin/Dashboard'))->name('admin.tenants');
        Route::get('/users', fn() => Inertia::render('admin/Dashboard'))->name('admin.users');
        Route::get('/billing', fn() => Inertia::render('admin/Dashboard'))->name('admin.billing');
        Route::get('/import-export', fn() => Inertia::render('admin/Dashboard'))->name('admin.import-export');
        Route::get('/logs', fn() => Inertia::render('admin/Dashboard'))->name('admin.logs');
        Route::get('/settings', fn() => Inertia::render('admin/Dashboard'))->name('admin.settings');
        Route::get('/logout', fn() => Inertia::render('admin/Dashboard'))->name('admin.logout');
    });
});
