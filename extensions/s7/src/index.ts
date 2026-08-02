import { visit } from "unist-util-visit"
import { Registry } from "./registry.ts"

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

    markdownPlugins() {
      console.log("📖 markdownPlugins")

      return [
        () => {
          return (tree: any, file: any) => {
            console.log("📄", file.data.frontmatter?.title)

            let mostrado = false

            visit(tree, "link", (node: any) => {
              if (mostrado) return

              console.log("========== LINK ==========")
              console.dir(node, { depth: null })

              mostrado = true
            })
          }
        },
      ]
    },
  }
}