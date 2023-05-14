/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import webfontDownload from "vite-plugin-webfont-dl"

export default defineConfig({
  base: "./",
  plugins: [react(), svgr(), webfontDownload()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
})
