<?php

namespace App\Providers;

use App\Services\PaddleService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {

        $this->app->singleton(PaddleService::class, function (Application $app) {

            return new PaddleService(
                config('services.paddle.api.key'),
                config('services.paddle.api.base_url')
            );
        });
    }

    public function boot(): void {}
}
