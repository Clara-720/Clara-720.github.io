import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mingjing-hou-portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "next/image": path.resolve(process.cwd(), "src/next-image-shim.tsx"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
