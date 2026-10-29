import type { Element, Root, RootContent } from "hast"
import type { PageFrame, PageFrameProps } from "../../../quartz/components/frames/types"
import type { QuartzComponentProps } from "../../../quartz/components/types"
import { htmlToJsx } from "../../../quartz/util/jsx"
import { pathToRoot, type FilePath } from "../../../quartz/util/path"

function chapterSections(tree: Root): Root {
  const children: RootContent[] = []
  let section: Element | undefined
  for (const node of tree.children) {
    if (node.type === "element" && node.tagName === "hr") continue
    if (node.type === "element" && node.tagName === "h2") {
      section = {
        type: "element",
        tagName: "section",
        properties: { className: ["s7-chapter"] },
        children: [],
      }
      children.push(section)
    }
    if (section) section.children.push(node as Element["children"][number])
    else children.push(node)
  }
  return { ...tree, children }
}

function EditorialIndex(props: QuartzComponentProps) {
  return (
    <article class="s7-chapters popover-hint">
      {htmlToJsx(props.fileData.filePath as FilePath, chapterSections(props.tree as Root))}
    </article>
  )
}

export const EditorialFrame: PageFrame = {
  name: "s7-editorial",
  render({
    componentData: props,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer,
  }: PageFrameProps) {
    const { fileData } = props
    const frontmatter = fileData.frontmatter
    const home = fileData.slug === "index"
    const index = home || frontmatter?.editorial === "indice"
    const base = pathToRoot(fileData.slug!)
    const root = `${base}/`
    const homeTitle = String(frontmatter?.heroTitle ?? "Un sistema para tu mundo")
    const homeDescription = String(
      frontmatter?.heroDescription ??
        "Aprende el sistema, crea tu personaje y encuentra las reglas de tu próxima partida.",
    )

    return (
      <div
        class="s7-editorial"
        data-editorial-kind={home ? "portada" : index ? "indice" : "articulo"}
        data-has-context={!home && right.length > 0 ? "true" : "false"}
      >
        <a class="s7-skip" href="#s7-main">
          Saltar al contenido
        </a>
        <header class="s7-masthead">
          <a class="s7-brand" href={root} aria-label="S7 RPG · Inicio">
            <img
              src={`${root}assets/brand/s7-horizontal.png`}
              width="212"
              height="50"
              alt="S7 RPG"
            />
          </a>
          <nav aria-label="Navegación principal">
            <a href={root} aria-current={home ? "page" : undefined}>
              Reglamento
            </a>
            <a
              href={`${root}módulos/`}
              aria-current={fileData.slug?.startsWith("módulos/") ? "location" : undefined}
            >
              Módulos
            </a>
            <a
              href={`${root}glosario/`}
              aria-current={fileData.slug?.startsWith("glosario/") ? "location" : undefined}
            >
              Glosario
            </a>
          </nav>
          <span class="s7-edition">Edición digital</span>
        </header>
        <div class="s7-page-grid">
          <aside class="s7-navigation" aria-label="Navegación del reglamento">
            <div class="s7-eyebrow">Contenido</div>
            <details class="s7-mobile-navigation">
              <summary>Contenido</summary>
              <nav aria-label="Secciones del reglamento">
                <a href={`${root}capitulo-1/`}>Fundamentos</a>
                <a href={`${root}capitulo-2/`}>Creación de personaje</a>
                <a href={`${root}capitulo-3/`}>Reglas de juego</a>
                <a href={`${root}glosario/`}>Glosario</a>
                <a href={`${root}módulos/`}>Módulos</a>
                <a href={`${root}reglas/`}>Reglas</a>
              </nav>
            </details>
            {left.map((Component) => (
              <Component {...props} />
            ))}
          </aside>
          <main class="s7-reading" id="s7-main">
            {home ? (
              <div class="s7-cover">
                <div>
                  <div class="s7-eyebrow">El reglamento de S7</div>
                  <h1>{homeTitle}</h1>
                  <p class="s7-introduction">{homeDescription}</p>
                  <div class="s7-start-links">
                    <a class="s7-start-primary" href={`${root}capitulo-1/1.2-primeros-pasos`}>
                      Primeros pasos <span aria-hidden="true">↗</span>
                    </a>
                    <a href={`${root}capitulo-2/2.1-la-hoja-de-personaje`}>Crear personaje</a>
                  </div>
                </div>
                <div
                  class="s7-cover-mark"
                  style={`--s7-mark-url: url('${root}assets/brand/s7-symbol.png')`}
                  aria-hidden="true"
                />
              </div>
            ) : (
              <div class="s7-article-head popover-hint">
                {beforeBody.map((Component) => (
                  <Component {...props} />
                ))}
              </div>
            )}
            {index ? <EditorialIndex {...props} /> : <Content {...props} />}
            <div class="s7-after-body">
              {afterBody.map((Component) => (
                <Component {...props} />
              ))}
            </div>
            <footer class="s7-colophon">
              <span>S7 · Sistema de rol</span>
              <a href={`${root}glosario/`}>
                Consultar el glosario <span aria-hidden="true">↗</span>
              </a>
            </footer>
          </main>
          {!home && (
            <aside class="s7-context" aria-label="En esta página">
              {right.map((Component) => (
                <Component {...props} />
              ))}
            </aside>
          )}
        </div>
        {footer.map((Component) => (
          <Component {...props} />
        ))}
      </div>
    )
  },
}
