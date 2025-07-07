import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/client/')
    },
  },
  cacheDir: './node_modules/.cache/vite_client',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5175',
      }
    },
    // 避免watch到wrangler和sqlite文件自动刷新页面
    watch: {
      ignored: ['**/.wrangler/**', '**/*.sqlite*']
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html'
    }
  },
});
