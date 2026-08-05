import { buildDatabase } from "./builder.ts"
import { htmlLinksTransformer } from "./transformers/htmlLinks.ts"

let databaseBuilt = false

export const manifest = {
  name: "s7",
  displayName: "Sistema S7",
  description: "Plugin de integración para el sistema S7.",
  version: "0.1.0",
  category: "transformer",

  components: {
    S7Hero: {
      name: "S7Hero",
      displayName: "S7 Hero",
      description: "Cabecera de las páginas S7",
      version: "0.1.0",
    },
  },
}

export default function () {
  return {
    name: "S7",

    markdownPlugins(ctx) {
      if (!databaseBuilt) {
        databaseBuilt = true
        buildDatabase(ctx.allFiles)
      }

      return []
    },

    htmlPlugins() {
      return [() => htmlLinksTransformer()]
    },

    externalResources() {
      return {
        css: [
          {
            inline: true,
            content: `
              /* Elimina el recuadro de Quartz solo en enlaces decorados por S7 */
              a.internal {
                background-color: transparent !important;
                border-radius: 0;
                padding: 0;
                line-height: inherit;
              }

              /* Atributos */
              a.internal.s7-atributo {
                color: #4682B4;
                font-weight: 600;
              }

              a.internal.s7-atributo:hover {
                color: #5C9BCB;
              }
            `,
          },
        ],
      }
    },
  }
}