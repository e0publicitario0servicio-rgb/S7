import type { QuartzComponent, QuartzComponentConstructor } from "../../../quartz/components/types"
import { pathToRoot, slugifyFilePath, type FilePath } from "@quartz-community/utils"

const S7Hero: QuartzComponent = ({ fileData }) => {
  const image = fileData.frontmatter?.image
  const description = fileData.frontmatter?.heroDescription ?? fileData.frontmatter?.summary

  if (!image && !description) return null

  // Frontmatter asset paths are relative to the vault root. Match Quartz's output names.
  const imageSrc =
    image && !/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(image)
      ? pathToRoot(fileData.slug!) + "/" + slugifyFilePath(image.replace(/^\/+/, "") as FilePath)
      : image

  return (
    <div class="s7-hero">
      {imageSrc && <img src={imageSrc} alt={description ?? ""} />}
      {description && <div class="s7-hero-description">{description}</div>}
    </div>
  )
}

export default (() => S7Hero) satisfies QuartzComponentConstructor
