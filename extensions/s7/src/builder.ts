import fs from "node:fs"
import path from "node:path"
import YAML from "yaml"

import { Database } from "./database.ts"

export function buildDatabase(files: string[]) {
  Database.clear()

  console.log("📚 Construyendo S7Database")

  for (const relativePath of files) {
    const absolutePath = path.join(process.cwd(), "content", relativePath)

    const text = fs.readFileSync(absolutePath, "utf8")

    const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)

    if (!match) {
      continue
    }

    const frontmatter = YAML.parse(match[1])

    const slug = relativePath
      .replace(/\\/g, "/")
      .replace(/\.md$/, "")

    Database.add({
      slug,
      nombre: frontmatter.title ?? slug,
      id: frontmatter.id,
      tipo: frontmatter.tipo,
      simbolo: frontmatter.simbolo,
      orden: frontmatter.orden,
    })
  }

  console.log(`📚 S7Database: ${Database.size()} páginas indexadas`)
}