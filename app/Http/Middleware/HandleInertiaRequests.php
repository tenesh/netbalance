<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {

        return parent::version($request);
    }

    public function share(Request $request): array
    {

        return array_merge(parent::share($request), [
            ...parent::share($request),
            'app' => [
                'name' => config('app.name'),
            ],
            'user' => fn() => $request->user()
                ? $request->user()->only(
                    'id',
                    'name',
                    'email',
                    'tenant_id',
                    'role',
                    'avatar',
                    'first_name',
                    'last_name',
                    'middle_name'
                )
                : null,
            'flash' => [
                'message' => fn() => $request->session()->get('message'),
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ]);
    }
}
