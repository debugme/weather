import { createContext, FC, PropsWithChildren, useContext, useState } from "react"

import { SettingsValue } from "../types"

import { languageMap } from "./languages"

const languageInfoList = Object.keys(languageMap).sort().map(key => ({
  id: key,
  data: <span>{key}</span>
}))

const initialValue = {
  handle: "Tom Grunge",
  setHandle: (_: string) => { },
  languageInfo: languageInfoList[0],
  setLanguageInfo: (_: string) => { },
  languageInfoList,
  t: (_: string) => "",
}

const SettingsContext = createContext<SettingsValue>(initialValue)

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const {
    languageInfo: initialLanguage,
    languageInfoList,
    handle: initialhandle,
  } = initialValue

  const [handle, setHandle] = useState(initialhandle)
  const [languageInfo, _setLanguageInfo] = useState(initialLanguage)

  const setLanguageInfo = (id: string) => {
    const info = languageInfoList.find(info => info.id === id)!
    _setLanguageInfo(info)
  }

  const t = (key: string) => languageMap[languageInfo.id][key]

  const { children } = props
  const { Provider } = SettingsContext

  const value = {
    handle, setHandle,
    languageInfo, setLanguageInfo, languageInfoList, t
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);