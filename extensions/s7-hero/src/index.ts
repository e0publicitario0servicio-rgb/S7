export const manifest = {
  name: "s7-hero",
  displayName: "S7 Hero",
  version: "0.1.0",
  category: "component",

  components: {
    S7Hero: {
      displayName: "S7 Hero",
      defaultPosition: "right",
      defaultPriority: 10,
    },
  },
}

export default function () {
  return {
    name: "S7Hero",
  }
}