<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function create(): Response
    {

        return Inertia::render('auth/pages/Login');
    }

    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'email' => ['required', 'email'],
            // TODO Move this to user creation controller as login step do not need to verify password strengths
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

            return redirect()->intended(route('dashboard'));
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }
}
