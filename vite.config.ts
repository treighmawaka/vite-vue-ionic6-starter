import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vueI18n } from '@intlify/vite-plugin-vue-i18n';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/intlify/vite-plugin-vue-i18n
    vueI18n({
      include: [path.resolve(__dirname, './i18n/locales/**')],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
