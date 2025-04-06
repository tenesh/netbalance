<?php

namespace Database\Seeders;

use App\Enums\LandlordRole;
use App\Enums\UserPermission;
use App\Enums\TenantRole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Permission;
use App\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionRoleSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {

        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        foreach (UserPermission::cases() as $permission) {
            Permission::firstOrCreate(['name' => $permission->value], ['id' => (string) Str::uuid(),]);
        }

        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        foreach (TenantRole::cases() as $roleEnum) {
            $role = Role::firstOrCreate(['name' => $roleEnum->value], ['id' => (string) Str::uuid()]);
            $role->syncPermissions($this->getPermissionsForTenantRole($roleEnum));
        }

        foreach (LandlordRole::cases() as $roleEnum) {
            $role = Role::firstOrCreate(['name' => $roleEnum->value], ['id' => (string) Str::uuid()]);
            $role->syncPermissions($this->getPermissionsForLandlordRole($roleEnum));
        }
    }

    private function getPermissionsForTenantRole(TenantRole $roleEnum): array
    {

        return match ($roleEnum) {
            TenantRole::OWNER => [
                UserPermission::LIST_TENANT_USERS,
                UserPermission::CREATE_TENANT_USER,
                UserPermission::READ_TENANT_USER,
                UserPermission::UPDATE_TENANT_USER,
                UserPermission::DELETE_TENANT_USER,
                UserPermission::READ_TENANT,
                UserPermission::UPDATE_TENANT,
                UserPermission::DELETE_TENANT,
            ],
            TenantRole::ADMIN => [
                UserPermission::LIST_TENANT_USERS,
                UserPermission::CREATE_TENANT_USER,
                UserPermission::READ_TENANT_USER,
                UserPermission::UPDATE_TENANT_USER,
                UserPermission::DELETE_TENANT_USER,
                UserPermission::READ_TENANT,
                UserPermission::UPDATE_TENANT,
            ],
            TenantRole::MANAGER => [
                UserPermission::LIST_TENANT_USERS,
                UserPermission::READ_TENANT_USER,
                UserPermission::READ_TENANT,
            ],
            TenantRole::STAFF => [
                UserPermission::LIST_TENANT_USERS,
                UserPermission::READ_TENANT_USER,
                UserPermission::READ_TENANT,
            ],
            TenantRole::VIEWER => [
                UserPermission::LIST_TENANT_USERS,
                UserPermission::READ_TENANT_USER,
                UserPermission::READ_TENANT,
            ],
        };
    }

    private function getPermissionsForLandlordRole(LandlordRole $roleEnum): array
    {

        return match ($roleEnum) {
            LandlordRole::SUPER_ADMIN => [
                UserPermission::LIST_LANDLORD_USERS,
                UserPermission::CREATE_LANDLORD_USER,
                UserPermission::READ_LANDLORD_USER,
                UserPermission::UPDATE_LANDLORD_USER,
                UserPermission::DELETE_LANDLORD_USER,
                UserPermission::LIST_ALL_TENANT_USERS,
                UserPermission::LIST_TENANT_USERS,
                UserPermission::CREATE_TENANT_USER,
                UserPermission::READ_TENANT_USER,
                UserPermission::UPDATE_TENANT_USER,
                UserPermission::DELETE_TENANT_USER,
                UserPermission::LIST_TENANTS,
                UserPermission::CREATE_TENANT,
                UserPermission::READ_TENANT,
                UserPermission::UPDATE_TENANT,
                UserPermission::DELETE_TENANT,
            ],
            LandlordRole::ADMIN => [
                UserPermission::LIST_LANDLORD_USERS,
                UserPermission::READ_LANDLORD_USER,
                UserPermission::LIST_ALL_TENANT_USERS,
                UserPermission::LIST_TENANT_USERS,
                UserPermission::CREATE_TENANT_USER,
                UserPermission::READ_TENANT_USER,
                UserPermission::UPDATE_TENANT_USER,
                UserPermission::DELETE_TENANT_USER,
                UserPermission::LIST_TENANTS,
                UserPermission::CREATE_TENANT,
                UserPermission::READ_TENANT,
                UserPermission::UPDATE_TENANT,
                UserPermission::DELETE_TENANT,
            ],
            LandlordRole::SUPPORT => [
                UserPermission::LIST_ALL_TENANT_USERS,
                UserPermission::LIST_TENANT_USERS,
                UserPermission::CREATE_TENANT_USER,
                UserPermission::READ_TENANT_USER,
                UserPermission::UPDATE_TENANT_USER,
                UserPermission::LIST_TENANTS,
                UserPermission::CREATE_TENANT,
                UserPermission::READ_TENANT,
                UserPermission::UPDATE_TENANT,
            ],
            LandlordRole::VIEWER => [
                UserPermission::LIST_ALL_TENANT_USERS,
                UserPermission::LIST_TENANT_USERS,
                UserPermission::READ_TENANT_USER,
                UserPermission::LIST_TENANTS,
                UserPermission::READ_TENANT,
            ],
        };
    }
}
