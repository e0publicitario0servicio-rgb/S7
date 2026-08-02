// quartz/plugins/s7 

import { S7Types } from "./mapper"
import type { S7Metadata } from "./types"

export interface S7Frontmatter {
  tipo?: keyof typeof S7Types
}

export function getTypeConfig(frontmatter: S7Frontmatter): S7Metadata | undefined {
  if (!frontmatter.tipo) {
    return undefined
  }

  return S7Types[frontmatter.tipo]
}