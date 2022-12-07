import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react"

import { SettingsValue } from "../types"

const initialValue = {
  showBreakpoints: false,
  toggleBreakpoints: () => {},
  toggleTheme: () => {}
}

const SettingsContext = createContext<SettingsValue>(initialValue)

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const [showBreakpoints, setShowBreakpoints] = useState(false)
  const toggleBreakpoints = useMemo(() => () => setShowBreakpoints(showBreakpoints => !showBreakpoints), [])
  const toggleTheme = useMemo(() => () => document.body.classList.toggle("tokyo"), [])  

  const { children } = props
  const { Provider } = SettingsContext

  const value = { showBreakpoints, toggleBreakpoints, toggleTheme }

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);