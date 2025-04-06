<?php

declare(strict_types=1);

namespace App\Enums;

enum UserType: string
{
    case LANDLORD = 'landlord';
    case TENANT = 'tenant';

    public function label(): string
    {

        return match ($this) {
            self::LANDLORD => 'Landlord',
            self::TENANT => 'Tenant',
        };
    }
}