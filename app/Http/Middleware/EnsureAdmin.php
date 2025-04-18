<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdmin
{
    public function handle(Request $request, Closure $next): Response
    {

        if (! $request->user()->is_admin) {
            return redirect()->route('app.tenant_url');
        }

        return $next($request);
    }
}
