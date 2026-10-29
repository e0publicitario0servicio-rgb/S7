import { visit } from "unist-util-visit"

import { Database } from "../database.ts"
import { getTheme } from "../theme.ts"

export function htmlLinksTransformer() {
  return (tree: any) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName !== "a") return

      if (!node.properties) return

      const slug = node.properties["data-slug"]

      if (typeof slug !== "string") return

      const page = Database.getBySlug(slug)

      if (!page) return

      const theme = getTheme(page)

      const classes = Array.isArray(node.properties.className)
        ? node.properties.className
        : []

      classes.push("s7-link")
      classes.push(theme.className)

      node.properties.className = classes
    })
  }
}