import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"

import translations from "./translations.json"

import { useStorage } from "../../storage"

const buildLanguageMap = (language: Record<string, string>, keys: string[]) => {
  const reducer = (accumulator: Record<string, JSX.Element>, key: string) => {
    accumulator[key] = <span className="text-3xl py-0 my-1">{language[key]}</span>
    return accumulator
  }
  const languageMap = keys.reduce(reducer, {})
  return languageMap
}

type LanguageSettingsValue = {
  t: (_: string) => string
  language: string
  setLanguage: (_: string) => void
  languageList: string[]
  languageMap: Record<string, JSX.Element>
}

const languageList = ["english", "french", "german", "italian", "spanish"]

const initialValue: LanguageSettingsValue = {
  language: languageList[0],
  setLanguage: (_: string) => { },
  languageList,
  languageMap: buildLanguageMap(translations.english, languageList),
  t: (_: string) => ""
}

type Translations = Record<string, Record<string, string>>

const LanguagesContext = createContext(initialValue)

export const LanguagesProvider: FC<PropsWithChildren> = (props) => {
  const { getItem, setItem } = useStorage()
  const savedLanguage = getItem("language") as string
  const { language: _language, languageList, languageMap } = initialValue
  const initialLanguage = savedLanguage || _language
  const [language, setLanguage] = useState(initialLanguage)
  const t = (key: string) => (translations as Translations)[language][key]
  const value = { language, setLanguage, languageList, languageMap, t }

  useEffect(() => setItem("language", language), [language])

  const { children } = props
  const { Provider } = LanguagesContext

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useLanguages = () => useContext(LanguagesContext);