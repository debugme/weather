import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react"
import { Nullable } from "../../../types"
import { useStorage } from "../../storage"

export type BreakpointsValue = {
  showBreakpoints: boolean
  toggleBreakpoints: () => void
}

const initialValue: BreakpointsValue = {
  showBreakpoints: false,
  toggleBreakpoints: () => { },
}

const BreakpointsContext = createContext(initialValue)

export const BreakpointsProvider: FC<PropsWithChildren> = (props) => {
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