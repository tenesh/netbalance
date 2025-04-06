<?php

declare(strict_types=1);

namespace App\Enums;

enum LandlordRole: string
{
    case SUPER_ADMIN = 'super_admin';
    case ADMIN = 'admin';
    case SUPPORT = 'support';
    case VIEWER = 'viewer';

    public function label(): string
    {

        return match ($this) {
            self::SUPER_ADMIN => 'Super Admin',
            self::ADMIN => 'Admin',
            self::SUPPORT => 'Support',
            self::VIEWER => 'Viewer',
        };
    }
}