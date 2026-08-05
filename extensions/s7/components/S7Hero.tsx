import {
  QuartzComponent,
  QuartzComponentConstructor,
} from "../../quartz/components/types"

const S7Hero: QuartzComponent = () => {
  return (
    <div class="s7-hero">
      🚀 S7Hero funcionando
    </div>
  )
}

export default (() => S7Hero) satisfies QuartzComponentConstructor