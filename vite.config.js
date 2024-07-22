import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/inspire-stone/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
