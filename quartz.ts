import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { frameRegistry } from "./quartz/components/frames/registry"
import { EditorialFrame } from "./extensions/s7/editorial/Frame"

frameRegistry.register(EditorialFrame.name, EditorialFrame, "s7")

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
