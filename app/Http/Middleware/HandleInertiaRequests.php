<?php

namespace App\Http\Middleware;

use App\Enums\LandlordRole;
use App\Enums\TenantRole;
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

        $role = $request->user()
            ? $request->user()->getRoleNames()->first()
            : [];
        $roleLabel = null;

        if ($role) {
            $roleLabel = $request->user()->isLandlord()
                ? LandlordRole::tryFrom($role)?->label()
                : TenantRole::tryFrom($role)?->label();
        }

        return array_merge(parent::share($request), [
            ...parent::share($request),
            'app' => [
                'name' => config('app.name'),
            ],
            'auth' => [
                'user' => fn() => $request->user()
                    ? $request->user()->only(
                        'id',
                        'name',
                        'email',
                        'tenant_id',
                        'avatar',
                        'first_name',
                        'last_name',
                        'middle_name',
                        'type',
                    )
                    : null,
                'role' => [
                    'label' => $roleLabel,
                    'value' => $role,
                ],
                'permissions' => fn() => $request->user()
                    ? $request->user()->getAllPermissions()->pluck('name')
                    : null,
            ],
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
