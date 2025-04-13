<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class LogoutController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('auth/login/index');

    }
}
