<?php

declare(strict_types=1);

namespace App\Enums;

enum TenantRole: string
{
    case OWNER = 'owner';
    case ADMIN = 'admin';
    case MANAGER = 'manager';
    case STAFF = 'staff';
    case VIEWER = 'viewer';

    public function label(): string
    {

        return match ($this) {
            self::OWNER => 'Owner',
            self::ADMIN => 'Admin',
            self::MANAGER => 'Support',
            self::STAFF => 'Staff',
            self::VIEWER => 'Viewer',
        };
    }
}