<?php

namespace App\Http\Middleware;

use App\Enums\UserRole;
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

        $role = $request->user() ? $request->user()->getRoleNames()->first() : null;
        $label = $role ? UserRole::tryFrom($role)?->label() : null;

        return array_merge(parent::share($request), [
            ...parent::share($request),
            'app' => [
                'name' => config('app.name'),
                'url' => config('app.url'),
                'public_url' => config('app.public_url'),
            ],
            'auth' => [
                'user' => fn () => $request->user()
                    ? $request->user()->only(
                        'id',
                        'name',
                        'email',
                        'tenant_id',
                        'avatar',
                        'first_name',
                        'last_name',
                        'middle_name',
                        'is_admin',
                    )
                    : null,
                'role' => [
                    'label' => $label,
                    'value' => $role,
                ],
                'permissions' => fn () => $request->user()
                    ? $request->user()->getAllPermissions()->pluck('name')
                    : null,
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ]);
    }
}
