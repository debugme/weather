import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"

import { SettingsValue } from "../types"

const themeList = ["slate", "grey", "zinc", "stone"]

const initialValue = {
  showBreakpoints: false,
  toggleBreakpoints: () => {},
  theme: themeList[0],
  setTheme: (_: string) => {},
  themeList
}

const SettingsContext = createContext<SettingsValue>(initialValue)

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const {
    showBreakpoints: initialShowBreakpoints,
    theme: initialTheme,
    themeList
  } = initialValue

  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)
  const [theme, setTheme] = useState(initialTheme)

  const toggleBreakpoints = useMemo(() => () => setShowBreakpoints(showBreakpoints => !showBreakpoints), [])
 
  useEffect(() => {
    document.body.classList.remove(...themeList)
    document.body.classList.add(theme)
  }, [theme])

  const { children } = props
  const { Provider } = SettingsContext

  const value = { showBreakpoints, toggleBreakpoints, theme, setTheme, themeList }

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);