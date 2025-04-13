<?php

namespace Database\Seeders;

use App\Enums\UserPermission;
use App\Enums\UserRole;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Spatie\Permission\PermissionRegistrar;

class PermissionRoleSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {

        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        foreach (UserPermission::cases() as $permission) {
            Permission::firstOrCreate(['name' => $permission->value], ['id' => (string) Str::uuid()]);
        }

        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        foreach (UserRole::cases() as $roleEnum) {
            $role = Role::firstOrCreate(['name' => $roleEnum->value], ['id' => (string) Str::uuid()]);
            $role->syncPermissions($this->getPermissions($roleEnum));
        }
    }

    private function getPermissions(UserRole $roleEnum): array
    {

        return match ($roleEnum) {
            UserRole::SUPER_ADMIN => [
                // Global user management
                UserPermission::GLOBAL_LIST_USERS,
                UserPermission::GLOBAL_CREATE_USER,
                UserPermission::GLOBAL_READ_USER,
                UserPermission::GLOBAL_UPDATE_USER,
                UserPermission::GLOBAL_DELETE_USER,

                // Global tenant management
                UserPermission::LIST_TENANTS,
                UserPermission::CREATE_TENANT,
                UserPermission::READ_TENANT,
                UserPermission::UPDATE_TENANT,
                UserPermission::DELETE_TENANT,

                // Tenant user management (can manage users within any tenant)
                UserPermission::TENANT_LIST_USERS,
                UserPermission::TENANT_READ_USER,
                UserPermission::TENANT_UPDATE_USER,
                UserPermission::TENANT_INVITE_USER,
            ],

            UserRole::ADMIN => [
                // Global user management
                UserPermission::GLOBAL_LIST_USERS,
                UserPermission::GLOBAL_CREATE_USER,
                UserPermission::GLOBAL_READ_USER,
                UserPermission::GLOBAL_UPDATE_USER,
                UserPermission::GLOBAL_DELETE_USER,

                // Global tenant management (except deletion)
                UserPermission::LIST_TENANTS,
                UserPermission::CREATE_TENANT,
                UserPermission::READ_TENANT,
                UserPermission::UPDATE_TENANT,

                // Tenant user management (can manage users within any tenant)
                UserPermission::TENANT_LIST_USERS,
                UserPermission::TENANT_READ_USER,
                UserPermission::TENANT_UPDATE_USER,
                UserPermission::TENANT_INVITE_USER,
            ],

            UserRole::TENANT_OWNER => [
                // Tenant user management (only within their own tenant)
                UserPermission::TENANT_LIST_USERS,
                UserPermission::TENANT_READ_USER,
                UserPermission::TENANT_UPDATE_USER,
                UserPermission::TENANT_INVITE_USER,

                // Owner-specific tenant management
                UserPermission::READ_TENANT,
                UserPermission::UPDATE_TENANT,
                UserPermission::REQUEST_TENANT_DELETION,
            ],

            UserRole::TENANT_MANAGER => [
                // Tenant user management (only within their own tenant)
                UserPermission::TENANT_LIST_USERS,
                UserPermission::TENANT_READ_USER,
                UserPermission::TENANT_UPDATE_USER,
                UserPermission::TENANT_INVITE_USER,

                // Basic tenant access
                UserPermission::READ_TENANT,
            ],

            UserRole::TENANT_STAFF, UserRole::TENANT_SUPPORT => [
                // Limited tenant user access
                UserPermission::TENANT_LIST_USERS,
                UserPermission::TENANT_READ_USER,

                // Basic tenant access
                UserPermission::READ_TENANT,
            ],
        };
    }
}
