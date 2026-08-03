import { linksTransformer } from "./transformers/links.ts"
import { buildDatabase } from "./builder.ts"

let databaseBuilt = false
export const manifest = {
  name: "s7",
  displayName: "Sistema S7",
  description: "Plugin de integración para el sistema S7.",
  version: "0.1.0",
  category: "transformer",
}

export default function () {
  console.log("🔥 S7 cargado")

  return {
    name: "S7",

    markdownPlugins(ctx) {
      console.log("Archivos:", ctx.allFiles.length)

      if (!databaseBuilt) {
        databaseBuilt = true
        buildDatabase(ctx.allFiles)
      }

      return [
        () => linksTransformer(),
      ]
    },
  }
}