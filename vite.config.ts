import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true
        }),
        react()
    ],
    esbuild: {
        jsx: 'automatic'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            'ziggy-js': path.resolve('vendor/tightenco/ziggy')
        }
    },
    server: {
        cors: {
            origin: ['http://netbalance.local', 'http://app.netbalance.local'],
            credentials: true
        },
        hmr: {
            host: 'localhost'
        }
    }
});
