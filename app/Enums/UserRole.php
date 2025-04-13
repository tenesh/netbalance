<?php

declare(strict_types=1);

namespace App\Enums;

enum UserRole: string
{
    // Roles for admin
    case ADMIN = 'admin';
    case SUPER_ADMIN = 'super_admin';

    // Roles for tenant
    case TENANT_OWNER = 'tenant_owner';
    case TENANT_MANAGER = 'tenant_manager';
    case TENANT_STAFF = 'tenant_staff';
    case TENANT_SUPPORT = 'tenant_support';

    public function label(): string
    {

        return match ($this) {
            self::SUPER_ADMIN => 'Super Admin',
            self::ADMIN => 'Admin',
            self::TENANT_OWNER => 'Owner',
            self::TENANT_MANAGER => 'Manager',
            self::TENANT_STAFF => 'Staff',
            self::TENANT_SUPPORT => 'Support',
        };
    }
}
