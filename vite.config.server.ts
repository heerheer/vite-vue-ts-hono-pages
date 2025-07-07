import { defineConfig } from "vite";
import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import devServer from "@hono/vite-dev-server";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    build(
      {
       entry: "./src/index.ts",
       outputDir: "dist", 
      }
    ),
    devServer({
      entry: "./src/index.ts",
      adapter,
    })
  ],
  server:{
    port:5175,
    watch: {
      ignored: ['**/.wrangler/**', '**/*.sqlite*']
    },
  },
  cacheDir: './node_modules/.cache/vite_server',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/server"),
    },
  },
});
