import { createContext, FC, PropsWithChildren, useContext, useState } from "react"

import { SettingsValue } from "../../types"

import { AvatarsProvider } from "./avatars"
import { BreakpointsProvider } from "./breakpoints"
import { LanguagesProvider } from "./languages"
import { ThemesProvider } from "./themes"

const initialValue = {
  handle: "Tom Grunge",
  setHandle: (_: string) => { }
}

const SettingsContext = createContext<SettingsValue>(initialValue)

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