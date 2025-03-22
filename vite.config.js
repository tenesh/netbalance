import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.ts'
            ],
            refresh: true,
        }),
        svelte(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            $lib: '/resources/js/lib',
        },
    },
    server: {
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true
        }
    },
});
