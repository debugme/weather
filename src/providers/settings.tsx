import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"

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
  showBreakpoints: false,
  toggleBreakpoints: () => { },
}

const SettingsContext = createContext<SettingsValue>(initialValue)

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const {
    showBreakpoints: initialShowBreakpoints,
    languageInfo: initialLanguage,
    languageInfoList,
    handle: initialhandle,
  } = initialValue

  const [handle, setHandle] = useState(initialhandle)
  const [languageInfo, _setLanguageInfo] = useState(initialLanguage)
  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)

  const setLanguageInfo = (id: string) => {
    const info = languageInfoList.find(info => info.id === id)!
    _setLanguageInfo(info)
  }

  const t = (key: string) => languageMap[languageInfo.id][key]

  const toggleBreakpoints = useMemo(() => () => setShowBreakpoints(showBreakpoints => !showBreakpoints), [])

  const { children } = props
  const { Provider } = SettingsContext

  const value = {
    handle, setHandle,
    languageInfo, setLanguageInfo, languageInfoList, t,
    showBreakpoints, toggleBreakpoints,
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);