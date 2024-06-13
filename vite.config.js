import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/slider.scss',
                'resources/css/button-stories.scss',
                'resources/js/slider.js',
                'resources/js/slider-slick.js',
                'resources/js/button-stories.js',
                'resources/css/slider-slick.scss',
                'resources/js/crocus-origin/script.js',
                'resources/js/crocus-origin/gsap.js',
                'resources/js/crocus-origin/validate.js',
                'resources/js/crocus-origin/option.js',
                'resources/js/common.js',
                'resources/css/product-card.scss',
                'resources/js/navigation-bar.js',
                'resources/css/navigation-bar.scss',
            ],
            refresh: true,
        }),
    ],
});
