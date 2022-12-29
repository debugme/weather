import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"

import { noop } from "../../../types"
import { useStorage } from "../../storage"

type BreakpointsValue = {
  showBreakpoints: boolean
  toggleBreakpoints: () => void
}

const initialValue: BreakpointsValue = {
  showBreakpoints: false,
  toggleBreakpoints: noop,
}

const BreakpointsContext = createContext(initialValue)

export const BreakpointsProvider = (props: PropsWithChildren) => {
  const { getItem, setItem } = useStorage()
  const savedBreakpointsEnabled = getItem("breakpoints") 
  const initialShowBreakpoints = savedBreakpointsEnabled === "true"
  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)

  const toggleBreakpoints = useMemo(() => () => {
    setShowBreakpoints(showBreakpoints => !showBreakpoints)
  }, [showBreakpoints])

  useEffect(() => setItem("breakpoints", String(showBreakpoints)), [showBreakpoints])

  const { children } = props
  const { Provider } = BreakpointsContext

  const value = { showBreakpoints, toggleBreakpoints }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useBreakpoints = () => useContext(BreakpointsContext);