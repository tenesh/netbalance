<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')
    ->group(function () {

        Route::get('/login', fn() => Inertia::render('auth/Login'))->name('login');
        Route::get('/forgot-password', fn() => Inertia::render('auth/ForgotPassword'))->name('password.request');
        Route::get('/reset-password/{token}', fn($token) => Inertia::render('auth/ResetPassword', ['token' => $token])
        )->name('password.reset');
    });

Route::middleware(['auth', 'ensure_customer'])
    ->group(function () {

        Route::get('/', fn() => Inertia::render('customer/Dashboard'))->name('customer.dashboard');
    });

Route::middleware(['auth', 'ensure_admin'])
    ->group(function () {

        Route::get('/admin', fn() => Inertia::render('admin/Dashboard'))->name('admin.dashboard');
    });
