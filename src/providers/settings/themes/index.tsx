import {
	createContext,
	PropsWithChildren,
	useContext,
	useLayoutEffect,
} from 'react'
import { useSettings, useStorage } from '../../../hooks'

type ThemeMap = Record<string, JSX.Element>

type ThemeInfo = { name: string; data: string }

type ThemeData = {
	packs: {
		[name: string]: ThemeInfo[]
	}
}

type ThemesValue = {
	theme: string
	setTheme: (_: string) => void
	themeList: string[]
	themeMap: Record<string, JSX.Element>
}

const getThemeInfo = (themes: ThemeData) => {
	const themeMap: ThemeMap = {}
	const themeList: string[] = []
	const themeInfoList: ThemeInfo[] = []

	if (themes) {
		const reducer = (map: ThemeMap, themeInfo: ThemeInfo) => {
			const { name } = themeInfo
			const className = 'my-2 capitalize'
			map[name] = <span className={className}>{name}</span>
			return map
		}
		themeInfoList.push(...themes.packs.dark)
		themeInfoList.reduce(reducer, themeMap)
		themeList.push(...Object.keys(themeMap))
	}

	return { themeMap, themeList, themeInfoList }
}

const initialValue: ThemesValue = {
	theme: '',
	setTheme: (_: string) => {},
	themeList: [],
	themeMap: {},
}

const ThemesContext = createContext(initialValue)

export const ThemesProvider = (props: PropsWithChildren) => {
	const {
		settings: { theme },
		setTheme,
	} = useSettings()

	const themes = useStorage<ThemeData>('themes')!
	const { themeList, themeMap, themeInfoList } = getThemeInfo(themes)

	const byName = (info: ThemeInfo) => info.name === theme

	useLayoutEffect(() => {
		const themeInfo = themeInfoList.find(byName) || { data: [] }
		const pairsList = Object.entries(themeInfo.data)
		const updateProperty = ([name, data]: [string, string]) => {
			const style = document.documentElement.style
			style.setProperty(name, data)
		}
		pairsList.forEach(updateProperty)
	}, [theme])

	const { children } = props
	const { Provider } = ThemesContext

	const value = { theme, setTheme, themeList, themeMap }

	return <Provider value={value}>{children}</Provider>
}

export const useThemes = () => useContext(ThemesContext)
