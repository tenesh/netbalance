import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { route as ziggyRoute } from 'ziggy-js';
import { PageProps as AppPageProps } from './index';

declare global {
    let route: typeof ziggyRoute;
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
