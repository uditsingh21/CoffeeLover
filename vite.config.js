// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'public/pages',
    build: {
        outDir: '../../dist',
    },
    server: {
        open: true,
    },
});
