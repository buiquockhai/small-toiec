import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    port: 8000,
  },

  plugins: [react()],
  resolve: {
    alias: {
      "@layout": path.resolve(__dirname, "./src/layouts"),
      "@page": path.resolve(__dirname, "./src/pages"),
      "@component": path.resolve(__dirname, "./src/components"),
      "@icon": path.resolve(__dirname, "./src/icons"),
      "@util": path.resolve(__dirname, "./src/utils"),
      "@context": path.resolve(__dirname, "./src/contexts"),
      "@service": path.resolve(__dirname, "./src/services"),
    },
  },
});
