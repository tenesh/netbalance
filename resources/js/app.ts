import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte';
import { mount } from 'svelte';
import '../css/app.css';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<ResolvedComponent>('./pages/**/*.svelte', { eager: true });
        return pages[`./pages/${name}.svelte`];
    },
    setup({ el, App, props }) {
        // @ts-ignore
        mount(App, { target: el, props });
    },
}).then(() => {});
