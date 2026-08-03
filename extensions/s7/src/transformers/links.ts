import { visit } from "unist-util-visit"

import { Database } from "../database.ts"

export function linksTransformer() {
  return (tree: any, file: any) => {
    const fm = file.data.frontmatter

    if (!fm?.tipo) return

    visit(tree, "link", (node: any) => {
      const page = Database.getByTitle(node.url)

      if (!page) return

      console.log("🔗", node.url)
      console.log(page)
    })
  }
}