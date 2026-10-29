import { Database, type S7Page } from "./database.ts"

function normalize(value: string): string {
  return value.trim()
}

export function resolveLink(name: string): S7Page | undefined {
  return Database.getByTitle(normalize(name))
}