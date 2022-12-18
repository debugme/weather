import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react"
import { BreakpointsValue } from "../../../types"


const initialValue = {
  showBreakpoints: false,
  toggleBreakpoints: () => { },
}

const BreakpointsContext = createContext<BreakpointsValue>(initialValue)

export const BreakpointsProvider: FC<PropsWithChildren> = (props) => {
  const { showBreakpoints: initialShowBreakpoints } = initialValue

  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)

  const toggleBreakpoints = useMemo(() => () => setShowBreakpoints(showBreakpoints => !showBreakpoints), [])

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