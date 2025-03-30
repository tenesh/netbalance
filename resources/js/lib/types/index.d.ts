import type { User } from '@/modules/shared/types/user';
import { Config } from 'ziggy-js';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    app: {
        name: string;
    };
    user: User;
    ziggy: Config & { location: string };
    flash: {
        message?: string;
    };
};
