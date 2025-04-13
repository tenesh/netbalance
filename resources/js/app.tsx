import '../css/app.css';

import { HeroUIProvider } from '@heroui/react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./modules/${name}.tsx`, import.meta.glob('./modules/**/pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <HeroUIProvider className="h-full w-full">
                <App {...props} />
            </HeroUIProvider>,
        );
    },
});
