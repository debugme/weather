import {
	createContext,
	PropsWithChildren,
	useContext,
	useLayoutEffect,
} from 'react'
import { useSettings } from '../../../hooks'

import themes from './themes.json'

type ThemeInfo = {
	name: string
	data: Record<string, string>
}

const themeInfoList: ThemeInfo[] = themes.packs.dark

const updateProperty = ([name, data]: [string, string]) =>
	document.documentElement.style.setProperty(name, data)

const themeList = themeInfoList.map((info) => info.name)

const themeMap: Record<string, JSX.Element> = {}
themeList.reduce((map, theme) => {
	map[theme] = <span className="my-2 capitalize">{theme}</span>
	return map
}, themeMap)

type ThemesValue = {
	theme: string
	setTheme: (_: string) => void
	themeList: string[]
	themeMap: Record<string, JSX.Element>
}

const initialValue: ThemesValue = {
	theme: themeList[0],
	setTheme: (_: string) => {},
	themeList,
	themeMap,
}

const ThemesContext = createContext(initialValue)

export const ThemesProvider = (props: PropsWithChildren) => {
	const {
		settings: { theme },
		setTheme,
	} = useSettings()

	useLayoutEffect(() => {
		const byName = (info: ThemeInfo) => info.name === theme
		const themeInfo = themeInfoList.find(byName)!
		const pairsList = Object.entries(themeInfo.data)
		pairsList.forEach(updateProperty)
	}, [theme])
	const { children } = props
	const { Provider } = ThemesContext

	const value = { theme, setTheme, themeList, themeMap }

	return <Provider value={value}>{children}</Provider>
}

export const useThemes = () => useContext(ThemesContext)
