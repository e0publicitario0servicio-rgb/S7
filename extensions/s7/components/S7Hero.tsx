import {
  QuartzComponent,
  QuartzComponentConstructor,
} from "../../quartz/components/types"

const S7Hero: QuartzComponent = ({ fileData }) => {
  const image = fileData.frontmatter?.image
  const description = fileData.frontmatter?.heroDescription

  if (!image) {
    return null
  }

  return (
    <div class="s7-hero">
      <img src={image} alt={description ?? ""} />

      {description && (
        <div class="s7-hero-description">
          {description}
        </div>
      )}
    </div>
  )
}

export default (() => S7Hero) satisfies QuartzComponentConstructor
