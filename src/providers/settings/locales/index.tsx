import { createContext, PropsWithChildren, useContext } from 'react'
import { useSettings } from '../../../hooks'

import locales from './locales.json'

const buildLocaleMap = (locale: Record<string, string>, keys: string[]) => {
	const reducer = (accumulator: Record<string, JSX.Element>, key: string) => {
		accumulator[key] = <span className="text-3xl py-0 my-1">{locale[key]}</span>
		return accumulator
	}
	const localeMap = keys.reduce(reducer, {})
	return localeMap
}

type LocaleSettingsValue = {
	t: (_: string) => string
	locale: string
	setLocale: (_: string) => void
	localeList: string[]
	localeMap: Record<string, JSX.Element>
}

const getLocaleInfo = () => {
	const localeList = ['english', 'french', 'german', 'italian', 'spanish']
	const localeMap = buildLocaleMap(locales.english, localeList)
	return { localeMap, localeList }
}

const initialValue: LocaleSettingsValue = {
	locale: '',
	setLocale: (_: string) => {},
	localeList: [],
	localeMap: {},
	t: (_: string) => '',
}

type LocaleData = Record<string, Record<string, string>>

const LocalesContext = createContext(initialValue)

export const LocalesProvider = (props: PropsWithChildren) => {
	const {
		settings: { locale },
		setLocale,
	} = useSettings()

	const { localeList, localeMap } = getLocaleInfo()

	const t = (key: string) => (locales as LocaleData)[locale][key] || key
	const value = { locale, setLocale, localeList, localeMap, t }

	const { children } = props
	const { Provider } = LocalesContext

	return <Provider value={value}>{children}</Provider>
}

export const useLocales = () => useContext(LocalesContext)
