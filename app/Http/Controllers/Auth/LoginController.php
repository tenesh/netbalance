<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function create(): Response
    {

        return Inertia::render('auth/Login');
    }

    public function store(Request $request)
    {

        $request->validate([
            'email' => ['required', 'email'],
            'password' => [
                'required',
                'string',
                'min:8',              // minimum 8 characters
                'regex:/[a-z]/',      // at least one lowercase letter
                'regex:/[A-Z]/',      // at least one uppercase letter
                'regex:/[0-9]/',      // at least one digit
                'regex:/[@$!%*#?&]/', // at least one special character
            ],
            'remember' => ['boolean'],
        ]);

        if (Auth::attempt(
            $request->only('email', 'password'),
            $request->boolean('remember')
        )) {
            $request->session()->regenerate();
            $user = $request->user();

            return redirect()->intended(
                $user->isAdmin()
                    ? route('admin.dashboard')
                    : route('customer.dashboard')
            );
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }
}

