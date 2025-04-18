<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureTenant
{
    public function handle(Request $request, Closure $next): Response
    {

        if ($request->user()->is_admin) {
            return redirect()->route('app.admin_url');
        }

        return $next($request);
    }
}
