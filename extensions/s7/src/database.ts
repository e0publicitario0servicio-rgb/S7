export interface S7Page {
  slug: string
  nombre: string
  id?: string
  tipo?: string
  simbolo?: string
  orden?: number
}

function normalizeSlug(slug: string): string {
  return slug
    .replace(/\\/g, "/")
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase()
}

class S7Database {
  private pages = new Map<string, S7Page>()

  clear() {
    this.pages.clear()
  }

  add(page: S7Page) {
    page.slug = normalizeSlug(page.slug)
    this.pages.set(page.slug, page)
  }

  getBySlug(slug: string): S7Page | undefined {
    return this.pages.get(normalizeSlug(slug))
  }

  getByTitle(title: string): S7Page | undefined {
    for (const page of this.pages.values()) {
      if (page.nombre === title) return page
    }

    return undefined
  }

  size() {
    return this.pages.size
  }
}

export const Database = new S7Database()