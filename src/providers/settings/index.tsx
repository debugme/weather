import { PropsWithChildren } from "react"

import { AvatarsProvider } from "./avatars"
import { BreakpointsProvider } from "./breakpoints"
import { HandleProvider } from "./handle"
import { LocalesProvider } from "./locales"
import { ThemesProvider } from "./themes"

export const SettingsProvider = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <AvatarsProvider>
      <BreakpointsProvider>
        <LocalesProvider>
          <ThemesProvider>
            <HandleProvider>
              {children}
            </HandleProvider>
          </ThemesProvider>
        </LocalesProvider>
      </BreakpointsProvider>
    </AvatarsProvider>
  )
}