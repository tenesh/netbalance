import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import * as path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.ts'
            ],
            refresh: true,
        }),
        tailwindcss(),
        svelte(),
    ],
    resolve: {
        alias: {
            $lib: '/resources/js/lib',
            'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
        },
    },
});
