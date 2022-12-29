import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react"

import { noop, Nullable } from "../../../types"
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
  const savedBreakpointsEnabled = getItem("breakpoints") as Nullable<boolean>
  const initialShowBreakpoints = savedBreakpointsEnabled || initialValue.showBreakpoints
  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)

  const toggleBreakpoints = useMemo(() => () => {
    setShowBreakpoints(showBreakpoints => !showBreakpoints)
    setItem("breakpoints", !showBreakpoints)
  }, [])

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