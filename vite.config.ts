import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/afterlive/", // GitHub Pages URL'si ile aynı olacak şekilde alt dizin ayarı yapıyoruz.
});
