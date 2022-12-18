export type LanguageMap = Record<string, Record<string, string>>

export const languageMap: LanguageMap = {
  "english": {
    "english": "english",
    "french": "french",
    "italian": "italian",
    "german": "german",
    "spanish": "spanish"
  },
  "french": {
    "english": "anglaise",
    "french": "française",
    "italian": "italienne",
    "german": "allemande",
    "spanish": "espagnole"
  },
  "italian": {
    "english": "inglese",
    "french": "francese",
    "italian": "italiana",
    "german": "tedesca",
    "spanish": "spagnola"
  },
  "german": {
    "english": "englisch",
    "french": "französisch",
    "italian": "italienisch",
    "german": "deutsch",
    "spanish": "spanisch"
  },
  "spanish": {
    "english": "inglesa",
    "french": "francesa",
    "italian": "italiana",
    "german": "alemana",
    "spanish": "española"
  },
}

import { createContext, FC, PropsWithChildren, useContext, useState } from "react"
import { LanguagesValue, SelectorInfo } from "../../../types"

const languageInfoList = Object.keys(languageMap).sort().map(key => ({
  id: key,
  data: <span>{key}</span>
})) as SelectorInfo[]

const initialValue = {
  languageInfo: languageInfoList[0],
  setLanguageInfo: (_: string) => { },
  languageInfoList,
  t: (_: string) => "",
}

const LanguagesContext = createContext<LanguagesValue>(initialValue)

export const LanguagesProvider: FC<PropsWithChildren> = (props) => {
  const { languageInfo: initialLanguage, languageInfoList } = initialValue

  const [languageInfo, _setLanguageInfo] = useState(initialLanguage)

  const setLanguageInfo = (id: string) => {
    const info = languageInfoList.find(info => info.id === id)!
    _setLanguageInfo(info)
  }

  const t = (key: string) => languageMap[languageInfo.id][key]
  const { children } = props
  const { Provider } = LanguagesContext
  const value = { languageInfo, setLanguageInfo, languageInfoList, t }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useLanguages = () => useContext(LanguagesContext);