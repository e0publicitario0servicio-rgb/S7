export interface S7Page {
  /** Slug de Quartz, por ejemplo: Glosario/Atributo/Fuerza */
  slug: string

  /** Título visible de la página */
  nombre: string

  /** Identificador único del reglamento */
  id?: string

  /** Tipo S7 (atributo, defensa, habilidad, etc.) */
  tipo?: string

  /** Símbolo abreviado */
  simbolo?: string

  /** Orden de aparición */
  orden?: number
}

export class S7Database {
  private bySlug = new Map<string, S7Page>()
  private byId = new Map<string, S7Page>()
  private byTitle = new Map<string, S7Page>()

  add(page: S7Page) {
    this.bySlug.set(page.slug, page)

    if (page.id) {
      this.byId.set(page.id, page)
    }

    this.byTitle.set(page.nombre, page)
  }

  getBySlug(slug: string) {
    return this.bySlug.get(slug)
  }

  getById(id: string) {
    return this.byId.get(id)
  }

  getByTitle(title: string) {
    return this.byTitle.get(title)
  }

  hasSlug(slug: string) {
    return this.bySlug.has(slug)
  }

  hasId(id: string) {
    return this.byId.has(id)
  }

  hasTitle(title: string) {
    return this.byTitle.has(title)
  }

  clear() {
    this.bySlug.clear()
    this.byId.clear()
    this.byTitle.clear()
  }

  values() {
    return this.bySlug.values()
  }

  size() {
    return this.bySlug.size
  }
}

export const Database = new S7Database()