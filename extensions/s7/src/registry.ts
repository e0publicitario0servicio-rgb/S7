export interface S7TypeDefinition {
  color: string
  icon: string
  cssClass: string
}

export const Registry: Record<string, S7TypeDefinition> = {
  atributo: {
    color: "steelblue",
    icon: "dumbbell",
    cssClass: "s7-atributo",
  },
}