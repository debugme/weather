import { createContext, PropsWithChildren, useContext, useState } from "react"

import { AvatarsProvider } from "./avatars"
import { BreakpointsProvider } from "./breakpoints"
import { LocalesProvider } from "./locales"
import { ThemesProvider } from "./themes"

type SettingsValue = {
  handle: string
  setHandle: (_: string) => void
}

const initialValue: SettingsValue = {
  handle: "Tom Grunge",
  setHandle: (_: string) => { }
}

const SettingsContext = createContext(initialValue)

export const SettingsProvider = (props: PropsWithChildren) => {
  const { handle: initialhandle } = initialValue

  const [handle, setHandle] = useState(initialhandle)

  const { children } = props
  const { Provider } = SettingsContext
  const value = { handle, setHandle }

  return (
    <Provider value={value}>
      <AvatarsProvider>
        <BreakpointsProvider>
          <LocalesProvider>
            <ThemesProvider>
              {children}
            </ThemesProvider>
          </LocalesProvider>
        </BreakpointsProvider>
      </AvatarsProvider>
    </Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);