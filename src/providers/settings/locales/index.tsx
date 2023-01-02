import { createContext, PropsWithChildren, useContext } from "react"
import { useSettings } from "../../../hooks"

import translations from "./translations.json"

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

const localeList = ["english", "french", "german", "italian", "spanish"]

const initialValue: LocaleSettingsValue = {
  locale: localeList[0],
  setLocale: (_: string) => { },
  localeList: localeList,
  localeMap: buildLocaleMap(translations.english, localeList),
  t: (_: string) => ""
}

type Translations = Record<string, Record<string, string>>

const LocalesContext = createContext(initialValue)

export const LocalesProvider = (props: PropsWithChildren) => {
  const { settings: { locale }, setLocale } = useSettings()
  const { localeList, localeMap } = initialValue
  const t = (key: string) => (translations as Translations)[locale][key]
  const value = { locale, setLocale, localeList, localeMap, t }

  const { children } = props
  const { Provider } = LocalesContext

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useLocales = () => useContext(LocalesContext);