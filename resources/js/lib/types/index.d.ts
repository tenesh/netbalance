import type { User } from '@/modules/user/types/user';
import { Config } from 'ziggy-js';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    app: {
        name: string;
    };
    auth: {
        user: User;
        role: {
            label: string;
            value: LandlordRole | TenantRole;
        };
        permissions: UserPermissions[];
    };
    ziggy: Config & { location: string };
    flash: {
        message?: string;
    };
};
