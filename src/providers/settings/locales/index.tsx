import { createContext, PropsWithChildren, useContext } from 'react'
import { useSettings, useStorage } from '../../../hooks'

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

const getLocaleInfo = (locales: LocaleData) => {
	const buildLocaleMap = (locale: Record<string, string>, keys: string[]) => {
		const localeMap: LocaleMap = {}
		const reducer = (accumulator: Record<string, JSX.Element>, key: string) => {
			accumulator[key] = (
				<span className="text-3xl py-0 my-1">{locale[key]}</span>
			)
			return accumulator
		}
		keys.reduce(reducer, localeMap)
		return localeMap
	}
	const locale: Record<string, string> = locales.english
	const localeList = Object.keys(locales)
	const localeMap = buildLocaleMap(locale, localeList)
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

	const _locales = useStorage<LocaleData>('locales')!
	const { localeList, localeMap } = getLocaleInfo(locales)

	const t = (key: string) => (locales as LocaleData)[locale][key] || key
	const value = { locale, setLocale, localeList, localeMap, t }

	const { children } = props
	const { Provider } = LocalesContext

	return <Provider value={value}>{children}</Provider>
}

export const useLocales = () => useContext(LocalesContext)
