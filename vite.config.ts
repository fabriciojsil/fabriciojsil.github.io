import path from "path";
import react from "@vitejs/plugin-react";
import { robots } from "vite-plugin-robots";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    robots({
      outputRobotsFileName: "robots.txt",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
