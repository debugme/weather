import { createContext, PropsWithChildren, useContext } from 'react'

import { useStorage } from '../../hooks'
import { useThemes } from '../settings/themes'

type IconsData = Record<string, string>

type IconsDataValue = {
	icons: IconsData
}

const initialValue: IconsDataValue = {
	icons: {},
}

const IconContext = createContext(initialValue)

export const IconsProvider = (props: PropsWithChildren) => {
	const { children } = props

	const { colorSwapper } = useThemes()
	const iconMap = useStorage<IconsData>('icons') || {}

	const icons: IconsData = {}
	Object.entries(iconMap).reduce((icons, [name, data]) => {
		icons[name] = colorSwapper(data)
		return icons
	}, icons)

	const { Provider } = IconContext

	const value = { icons }
	return <Provider value={value}>{children}</Provider>
}

export const useIcons = () => useContext(IconContext)
