import { useSettings } from "../../../providers"
import { Breakpoints } from "./breakpoints"
import { Devices } from "./devices"

export const Footer = () => {
  const { showBreakpoints } = useSettings()
  return (
    <footer className="flex items-center justify-end px-6 cursor-pointer text-secondary-700 bg-secondary-700 ">
      {showBreakpoints ? <Devices /> : null}
      {showBreakpoints ? <Breakpoints /> : null}
    </footer>
  )
}
