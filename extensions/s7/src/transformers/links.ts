import { visit } from "unist-util-visit"

import { resolveLink } from "../resolver.ts"
import { getTheme } from "../theme.ts"

export function linksTransformer() {
  return (tree: any, file: any) => {
    const fm = file.data.frontmatter

    if (!fm?.tipo) return

    visit(tree, "link", (node: any) => {
      const page = resolveLink(node.url)

      if (!page) return

      const theme = getTheme(page)

      node.data ??= {}
      node.data.hProperties ??= {}

      const classes = Array.isArray(node.data.hProperties.className)
        ? [...node.data.hProperties.className]
        : []

      classes.push("s7-link")
      classes.push(theme.className)

      node.data.hProperties.className = classes
    })
  }
}