import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { stowlinkBlog } from "./vite.blog";
import { stowlinkSeo } from "./vite.seo";

export default defineConfig({
  plugins: [react(), tailwindcss(), stowlinkBlog(), stowlinkSeo()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
