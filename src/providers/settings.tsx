import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"

import { SettingsValue } from "../types"

import { languageMap } from "./languages"

const themeInfoList = [
  { id: "slate", data: <span>slate</span> },
  { id: "grey", data: <span>grey</span> },
  { id: "zinc", data: <span>zinc</span> },
  { id: "plain", data: <span>plain</span> },
  { id: "stone", data: <span>stone</span> }
]

const languageInfoList = Object.keys(languageMap).sort().map(key => ({
  id: key,
  data: <span>{key}</span>
}))

const initialValue = {
  handle: "Tom Grunge",
  setHandle: (_: string) => { },
  themeInfo: themeInfoList[0],
  setThemeInfo: (_: string) => { },
  themeInfoList,
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
    themeInfo: initialTheme,
    themeInfoList,
    languageInfo: initialLanguage,
    languageInfoList,
    handle: initialhandle,
  } = initialValue

  const [handle, setHandle] = useState(initialhandle)
  const [themeInfo, _setThemeInfo] = useState(initialTheme)
  const [languageInfo, _setLanguageInfo] = useState(initialLanguage)
  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)



  const setThemeInfo = (id: string) => {
    const info = themeInfoList.find(info => info.id === id)!
    _setThemeInfo(info)
  }

  const setLanguageInfo = (id: string) => {
    const info = languageInfoList.find(info => info.id === id)!
    _setLanguageInfo(info)
  }

  const t = (key: string) => languageMap[languageInfo.id][key]

  const toggleBreakpoints = useMemo(() => () => setShowBreakpoints(showBreakpoints => !showBreakpoints), [])

  useEffect(() => {
    document.body.classList.remove(...themeInfoList.map(info => info.id))
    document.body.classList.add(themeInfo.id)
  }, [themeInfo])

  const { children } = props
  const { Provider } = SettingsContext

  const value = {
    handle, setHandle,
    themeInfo, setThemeInfo, themeInfoList,
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