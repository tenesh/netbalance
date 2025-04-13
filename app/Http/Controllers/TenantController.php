<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTenantRequest;
use App\Http\Requests\UpdateTenantRequest;
use App\Models\Tenant;
use App\Services\PaddleService;
use Inertia\Inertia;
use Inertia\Response;

class TenantController extends Controller
{
    public function __construct(
        protected PaddleService $paddleService,
    ) {}

    public function index(): Response
    {

        return Inertia::render('tenant/pages/ViewTenants', [
        ]);
    }

    public function create(): Response
    {

        $plans = $this->paddleService->getProducts();

        return Inertia::render('tenant/pages/AddTenant', [
            'plans' => $plans,
        ]);
    }

    public function store(StoreTenantRequest $request)
    {
        //
    }

    public function show(Tenant $tenant): Response
    {

        return Inertia::render('tenant/pages/ViewTenant');
    }

    public function update(UpdateTenantRequest $request, Tenant $tenant)
    {
        //
    }

    public function destroy(Tenant $tenant)
    {
        //
    }
}
