<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTenantRequest;
use App\Http\Requests\UpdateTenantRequest;
use App\Models\Tenant;
use App\Services\PaddleService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class TenantController extends Controller
{
    public function __construct(
        protected PaddleService $paddleService,
    ) {}

    public function index(): Response
    {

        Gate::authorize('viewAny', Tenant::class);

        return Inertia::render('tenant/pages/ViewTenants', []);
    }

    public function create(): Response
    {

        Gate::authorize('create', Tenant::class);

        return Inertia::render('tenant/pages/AddTenant', [
            'plans' => $this->paddleService->getProducts(),
        ]);
    }

    public function store(StoreTenantRequest $request): RedirectResponse
    {

        Gate::authorize('create', Tenant::class);

        $validated = $request->validated();

        $tenant = Tenant::create([
            'name' => $validated['name'],
            'slug' => $validated['slug'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'timezone' => $validated['timezone'],
            'street_name_one' => $validated['street_name_one'],
            'street_name_two' => $validated['street_name_two'],
            'state' => $validated['state'],
            'city' => $validated['city'],
            'country' => $validated['country'],
            'postal_code' => $validated['postal_code'],
        ]);

        $tenant->save();

        return redirect()->back()
            ->with('success', 'Tenant created successfully.');
    }

    public function show(Tenant $tenant): Response
    {

        Gate::authorize('view', $tenant);

        return Inertia::render('tenant/pages/ViewTenant');
    }

    public function update(UpdateTenantRequest $request, Tenant $tenant)
    {

        Gate::authorize('update', $tenant);
    }

    public function destroy(Tenant $tenant)
    {

        Gate::authorize('delete', $tenant);
    }
}
