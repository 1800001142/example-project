import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/orderDetail.scss',
                'resources/css/register.scss',
                'resources/js/register.js',
            ],
            refresh: true,
        }),
    ],
});
