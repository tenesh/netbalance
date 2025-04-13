import type { Types } from '@/modules/user/types';
import type { Config } from 'ziggy-js';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    app: {
        name: string;
        url: string;
        public_url: string;
    };
    auth: {
        user: Types;
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
