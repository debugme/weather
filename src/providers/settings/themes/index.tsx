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
	colorSwapper: (original: string) => string
}

const getThemeInfo = (themes: ThemeData, theme: string) => {
	const themeMap: ThemeMap = {}
	const themeList: string[] = []
	const themeInfoList: ThemeInfo[] = []
	let colorSwapper = (original: string) => original

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
		colorSwapper = (original: string) => {
			let updated = original
			const byName = (info: ThemeInfo) => info.name === theme
			const themeInfo = themes.packs.dark.find(byName)!
			Object.entries(themeInfo.data).forEach(([key, value]) => {
				const hexColor = value.replace('#', '%23')
				updated = updated.replaceAll(key, hexColor)
			})
			return updated
		}
	}

	return { themeMap, themeList, themeInfoList, colorSwapper }
}

const initialValue: ThemesValue = {
	theme: '',
	setTheme: (_: string) => {},
	themeList: [],
	themeMap: {},
	colorSwapper: (original: string) => original,
}

const ThemesContext = createContext(initialValue)

export const ThemesProvider = (props: PropsWithChildren) => {
	const {
		settings: { theme },
		setTheme,
	} = useSettings()

	const themes = useStorage<ThemeData>('themes')!
	const { themeList, themeMap, themeInfoList, colorSwapper } = getThemeInfo(
		themes,
		theme,
	)

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

	const value = { theme, setTheme, themeList, themeMap, colorSwapper }

	return <Provider value={value}>{children}</Provider>
}

export const useThemes = () => useContext(ThemesContext)
