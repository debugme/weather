import {
	createContext,
	PropsWithChildren,
	useContext,
	useLayoutEffect,
} from 'react'
import { useSettings } from '../../../hooks'

import themes from './themes.json'

type ThemeInfoList = Record<string, Record<string, string>>

const themeInfoList: ThemeInfoList = themes.packs.dark
const documentStyle = document.documentElement.style

const themeList = Object.keys(themeInfoList)

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
		const list = Object.entries(themeInfoList[theme])
		list.forEach(([name, data]) => documentStyle.setProperty(name, data))
	}, [theme])
	const { children } = props
	const { Provider } = ThemesContext

	const value = { theme, setTheme, themeList, themeMap }

	return <Provider value={value}>{children}</Provider>
}

export const useThemes = () => useContext(ThemesContext)
