export type LanguageMap = Record<string, Record<string, string>>

import translations from "./translations.json"

export const languageMap: LanguageMap = translations

import { createContext, FC, PropsWithChildren, useContext, useState } from "react"
import { LanguagesValue, SelectorInfo } from "../../../types"

const buildLanguageInfoList = (languageId: string) => (
  Object.keys(languageMap).sort().map(locale => {
    return {
      id: locale,
      data: <span className="text-3xl py-0 my-1">{languageMap[languageId][locale]}</span>
    }
  }) as SelectorInfo[]
)

const initialLanguageInfoList = buildLanguageInfoList("english")

const initialValue: LanguagesValue = {
  languageInfo: initialLanguageInfoList[0],
  setLanguageInfo: (_: string) => { },
  languageInfoList: initialLanguageInfoList,
  t: (_: string) => "",
}

const LanguagesContext = createContext(initialValue)

export const LanguagesProvider: FC<PropsWithChildren> = (props) => {
  const { languageInfo: initialLanguageInfo, languageInfoList: initialLanguageInfoList } = initialValue

  const [languageInfo, _setLanguageInfo] = useState(initialLanguageInfo)
  const [languageInfoList, setLanguageInfoList] = useState(initialLanguageInfoList)

  const setLanguageInfo = (id: string) => {
    const info = languageInfoList.find(info => info.id === id)!
    const list = buildLanguageInfoList(info.id)
    _setLanguageInfo(info)
    setLanguageInfoList(list)
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