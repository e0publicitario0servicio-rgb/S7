export interface S7Page {
  nombre: string
  id: string
  tipo: string
  simbolo?: string
  orden?: number
}

export class S7Database {
  private pages = new Map<string, S7Page>()

  add(page: S7Page) {
    this.pages.set(page.nombre, page)
  }

  get(nombre: string) {
    return this.pages.get(nombre)
  }

  has(nombre: string) {
    return this.pages.has(nombre)
  }

  values() {
    return this.pages.values()
  }

  clear() {
    this.pages.clear()
  }
}

export const Database = new S7Database()