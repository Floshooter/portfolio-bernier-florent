import { copyFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const basePath = "/portfolio-bernier-florent/"

function githubPagesFallback(): Plugin {
  let outDir = path.resolve(rootDir, "dist")
  return {
    name: "github-pages-fallback",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      try {
        await copyFile(path.join(outDir, "index.html"), path.join(outDir, "404.html"))
      } catch (error: unknown) {
        throw new Error("Création de 404.html impossible", { cause: error })
      }
    },
  }
}

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), githubPagesFallback()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 700,
  },
})