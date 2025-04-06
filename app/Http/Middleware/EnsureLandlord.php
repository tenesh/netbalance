<?php

namespace App\Http\Middleware;

use App\Enums\UserType;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureLandlord
{
    public function handle(Request $request, Closure $next): Response
    {

        if ($request->user()->type !== UserType::LANDLORD) {
            return redirect()->route('tenant.dashboard');
        }

        return $next($request);
    }
}
