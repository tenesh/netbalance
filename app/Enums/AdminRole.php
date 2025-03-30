<?php

declare(strict_types=1);

namespace App\Enums;

enum AdminRole: string
{
    /** Full access to all system-level features including managing other admins */
    case SUPER_ADMINISTRATOR = 'super_administrator';

    /** Standard administrator with elevated access, but not full system control */
    case ADMINISTRATOR = 'administrator';

    /** Support agent with limited access for customer assistance and issue resolution */
    case SUPPORT = 'support';

    /** Read-only user for audit, monitoring, or compliance purposes */
    case AUDITOR = 'auditor';

    public function label(): string
    {
        return match ($this) {
            self::SUPER_ADMINISTRATOR => 'Super Admin',
            self::ADMINISTRATOR => 'Admin',
            self::SUPPORT => 'Support',
            self::AUDITOR => 'Auditor',
        };
    }
}