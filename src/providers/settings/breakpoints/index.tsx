import { createContext, PropsWithChildren, useContext } from 'react'
import { useSettings } from '../../../hooks'

import { noop } from '../../../types'

type BreakpointsValue = {
	breakpoints: boolean
	toggleBreakpoints: () => void
}

const initialValue: BreakpointsValue = {
	breakpoints: false,
	toggleBreakpoints: noop,
}

const BreakpointsContext = createContext(initialValue)

export const BreakpointsProvider = (props: PropsWithChildren) => {
	const {
		settings: { breakpoints },
		setBreakpoints,
	} = useSettings()

	const toggleBreakpoints = () => setBreakpoints(!breakpoints)

	const { children } = props
	const { Provider } = BreakpointsContext

	const value = { breakpoints, toggleBreakpoints }

	return <Provider value={value}>{children}</Provider>
}

export const useBreakpoints = () => useContext(BreakpointsContext)
