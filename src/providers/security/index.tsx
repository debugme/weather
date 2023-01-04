import { createContext, PropsWithChildren, useContext } from 'react'

import { noop } from '../../types'
import { useAuth } from '../../hooks'

type SecurityValue = {
	isSignedIn: boolean
	signIn: () => void
	signOut: () => void
}

const initialValue: SecurityValue = {
	isSignedIn: false,
	signIn: noop,
	signOut: noop,
}

const SecurityContext = createContext(initialValue)

export const SecurityProvider = (props: PropsWithChildren) => {
	const { isSignedIn, signIn, signOut } = useAuth()

	const { children } = props
	const { Provider } = SecurityContext
	const value = { isSignedIn, signIn, signOut }

	return <Provider value={value}>{children}</Provider>
}

export const useSecurity = () => useContext(SecurityContext)
