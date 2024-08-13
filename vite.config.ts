/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.ts",
  },
  server: {
    proxy: {
      // Using the proxy instance
      // string shorthand: http://localhost:5173/api/* -> http://localhost:3001/api/*
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
        },
      },
    },
  },
});
