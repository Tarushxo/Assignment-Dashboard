import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwind from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
