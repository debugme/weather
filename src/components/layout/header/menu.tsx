import { useLayoutEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CloseIcon, MenuIcon } from '../../../icons'

type MenuProps = {
	settings: string
	shortcut: string
}

export const Menu = (props: MenuProps) => {
	const { settings, shortcut } = props

	const location = useLocation()
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(location.pathname === settings)

	useLayoutEffect(() => setIsOpen(location.pathname === settings), [location])

	const toggleSettings = () => {
		if (isOpen) navigate(-1)
		else navigate(settings)
	}

	useLayoutEffect(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key === shortcut) toggleSettings()
		}
		document.addEventListener('keydown', handler)
		const cleaner = () => document.removeEventListener('keydown', handler)
		return cleaner
	}, [isOpen])

	return (
		<button
			className="focus:outline-white"
			onClick={toggleSettings}
			tabIndex={0}
			role="menu"
		>
			{isOpen ? <CloseIcon /> : <MenuIcon />}
		</button>
	)
}
