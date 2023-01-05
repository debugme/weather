import { createContext, PropsWithChildren, useContext } from 'react'

import { noop } from '../../types'
import { useAuth } from '../../hooks'
import { useNavigate } from 'react-router-dom'

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
	const navigate = useNavigate()
	const options = { onSignIn: () => navigate('/') }
	const { isSignedIn, signIn, signOut } = useAuth(options)

	const { children } = props
	const { Provider } = SecurityContext
	const value = { isSignedIn, signIn, signOut }

	return <Provider value={value}>{children}</Provider>
}

export const useSecurity = () => useContext(SecurityContext)
