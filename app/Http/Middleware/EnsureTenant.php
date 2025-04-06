<?php

namespace App\Http\Middleware;

use App\Enums\UserType;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureTenant
{
    public function handle(Request $request, Closure $next): Response
    {

        if ($request->user()->type === UserType::LANDLORD) {
            return redirect()->route('landlord.dashboard');
        }

        return $next($request);
    }
}
