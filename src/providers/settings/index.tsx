import { createContext, FC, PropsWithChildren, useContext, useState } from "react"

import { AvatarsProvider } from "./avatars"
import { BreakpointsProvider } from "./breakpoints"
import { LanguagesProvider } from "./languages"
import { ThemesProvider } from "./themes"

export type SettingsValue = {
  handle: string
  setHandle: (_: string) => void
}

const initialValue: SettingsValue = {
  handle: "Tom Grunge",
  setHandle: (_: string) => { }
}

const SettingsContext = createContext(initialValue)

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const { handle: initialhandle } = initialValue

  const [handle, setHandle] = useState(initialhandle)

  const { children } = props
  const { Provider } = SettingsContext
  const value = { handle, setHandle }

  return (
    <Provider value={value}>
      <AvatarsProvider>
        <BreakpointsProvider>
          <LanguagesProvider>
            <ThemesProvider>
              {children}
            </ThemesProvider>
          </LanguagesProvider>
        </BreakpointsProvider>
      </AvatarsProvider>
    </Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);