import { useLayoutEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useIcons } from '../../../providers'

export const MenuIcon = () => {
	const { icons } = useIcons()
	const className = 'h-9 cursor-pointer'
	return <img className={className} src={icons.menu} alt="" />
}

export const CloseIcon = () => {
	const { icons } = useIcons()
	const className = 'h-9 cursor-pointer'
	return <img className={className} src={icons.close} alt="" />
}

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
