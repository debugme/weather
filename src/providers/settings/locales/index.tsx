import { createContext, PropsWithChildren, useContext } from 'react'
import { useSettings } from '../../../hooks'

import locales from './locales.json'

type LocaleMap = Record<string, JSX.Element>

type LocaleInfo = Record<string, string>

type LocaleData = { [name: string]: LocaleInfo }

type LocaleSettingsValue = {
	t: (_: string) => string
	locale: string
	setLocale: (_: string) => void
	localeList: string[]
	localeMap: Record<string, JSX.Element>
}

const getLocaleInfo = (locales: LocaleData, locale: Record<string, string>) => {
	const localeMap: LocaleMap = {}
	const localeList = []

	if (locales) {
		const reducer = (map: Record<string, JSX.Element>, key: string) => {
			const value = locale[key]
			const className = 'text-3xl py-0 my-1'
			map[key] = <span className={className}>{value}</span>
			return map
		}
		Object.keys(locales).reduce(reducer, localeMap)
		localeList.push(...Object.keys(localeMap))
	}

	return { localeMap, localeList }
}

const initialValue: LocaleSettingsValue = {
	locale: '',
	setLocale: (_: string) => {},
	localeList: [],
	localeMap: {},
	t: (_: string) => '',
}

const LocalesContext = createContext(initialValue)

export const LocalesProvider = (props: PropsWithChildren) => {
	const {
		settings: { locale },
		setLocale,
	} = useSettings()

	const { localeList, localeMap } = getLocaleInfo(locales, locales.english)

	const t = (key: string) => (locales as LocaleData)[locale][key] || key
	const value = { locale, setLocale, localeList, localeMap, t }

	const { children } = props
	const { Provider } = LocalesContext

	return <Provider value={value}>{children}</Provider>
}

export const useLocales = () => useContext(LocalesContext)
