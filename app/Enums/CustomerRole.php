<?php

declare(strict_types=1);

namespace App\Enums;

enum CustomerRole: string
{
    /** Primary account holder. Has full control including billing, settings, and user management */
    case OWNER = 'owner';

    /** Trusted user with full access to modules, but cannot delete the tenant or override owner */
    case ADMIN = 'admin';

    /** General user with restricted permissions, typically task-focused (e.g. sales, stock updates) */
    case STAFF = 'staff';

    /** Read-only access — typically for auditors, observers, or external viewers */
    case VIEWER = 'viewer';

    public function label(): string
    {
        return match ($this) {
            self::OWNER => 'Owner',
            self::ADMIN => 'Administrator',
            self::STAFF => 'Staff',
            self::VIEWER => 'Viewer',
        };
    }
}
