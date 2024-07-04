import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@crema",
        replacement: fileURLToPath(new URL("./src/@crema", import.meta.url)),
      },
    ],
  },
});
