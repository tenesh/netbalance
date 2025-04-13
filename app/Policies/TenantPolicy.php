<?php

namespace App\Policies;

use App\Enums\UserPermission;
use App\Models\Tenant;
use App\Models\User;

class TenantPolicy
{
    public function viewAny(User $user): bool
    {

        return $user->is_admin && $user->can(UserPermission::LIST_TENANTS->value);
    }

    public function view(User $user, Tenant $tenant): bool
    {

        return ($user->is_admin && $user->can(UserPermission::READ_TENANT->value))
            || ($user->tenant_id === $tenant->id && $user->can(UserPermission::READ_TENANT->value));
    }

    public function create(User $user): bool
    {

        return $user->is_admin
            && $user->can(UserPermission::CREATE_TENANT->value);
    }

    public function update(User $user, Tenant $tenant): bool
    {

        return ($user->is_admin && $user->can(UserPermission::UPDATE_TENANT->value))
            || ($user->tenant_id === $tenant->id && $user->can(UserPermission::UPDATE_TENANT->value));
    }

    public function delete(User $user, Tenant $tenant): bool
    {

        return ($user->is_admin && $user->can(UserPermission::DELETE_TENANT->value))
            || ($user->tenant_id === $tenant->id && $user->can(UserPermission::REQUEST_TENANT_DELETION->value));
    }

    public function restore(User $user, Tenant $tenant): bool
    {

        return $user->is_admin
            && $user->can(UserPermission::UPDATE_TENANT->value);
    }

    public function forceDelete(User $user, Tenant $tenant): bool
    {

        return false;
    }
}
