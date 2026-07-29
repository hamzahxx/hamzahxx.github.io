import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// hamzahxx.github.io is a user site -> served from root, so base "/" is correct.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
