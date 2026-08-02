import { visit } from "unist-util-visit"

export function linksTransformer() {
  return (tree: any, file: any) => {
    const fm = file.data.frontmatter

    if (!fm?.tipo) return

    visit(tree, "link", (node: any) => {
      // Aquí decoraremos los enlaces usando Database.
      // De momento no hacemos nada.
    })
  }
}