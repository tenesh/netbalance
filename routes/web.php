<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::domain(parse_url(\config('app.public_url'), PHP_URL_HOST))->group(function () {

    Route::get('/', fn() => Inertia::render('public/Home'))->name('public.home');
    Route::get('/about-us', fn() => Inertia::render('public/About'))->name('public.about');
    Route::get('/terms', fn() => Inertia::render('public/Terms'))->name('public.terms');
    Route::get('/policy', fn() => Inertia::render('public/Policy'))->name('public.policy');
});

Route::domain(parse_url(\config('app.url'), PHP_URL_HOST))->group(function () {

    Route::middleware('guest')->group(function () {

        Route::get('/login', fn() => Inertia::render('auth/Login'))->name('login');
        Route::get('/forgot-password', fn() => Inertia::render('auth/ForgotPassword'))->name('password.request');
        Route::get('/reset-password/{token}', fn($token) => Inertia::render('auth/ResetPassword', ['token' => $token])
        )->name('password.reset');
    });

    Route::middleware(['auth', 'ensure_customer'])->group(function () {

        Route::get('/', fn() => Inertia::render('customer/Dashboard'))->name('customer.dashboard');
    });

    Route::middleware(['auth', 'ensure_admin'])->group(function () {

        Route::get('/admin', fn() => Inertia::render('admin/Dashboard'))->name('admin.dashboard');
    });
});
