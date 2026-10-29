import type { S7Page } from "./database.ts"

export interface S7Theme {
  className: string
  color?: string
  icon?: string
}

const themes: Record<string, S7Theme> = {
  atributo: {
    className: "s7-atributo",
    color: "steelblue",
    icon: "dumbbell",
  },
}

export function getTheme(page: S7Page): S7Theme {
  if (page.tipo && themes[page.tipo]) {
    return themes[page.tipo]
  }

  return {
    className: "s7-page",
  }
}