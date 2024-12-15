import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/scss.scss";`
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "MorizoVue",
            fileName: "morizo-vue"
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        }
    }
});
