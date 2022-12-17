import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"

import { SettingsValue } from "../types"

import { avatarInfoList } from "./avatars"

const themeInfoList = [
  { id: "slate", data: <span>slate</span> }, 
  { id: "grey", data: <span>grey</span> }, 
  { id: "zinc", data: <span>zinc</span> }, 
  { id: "plain", data: <span>plain</span> }, 
  { id: "stone", data: <span>stone</span> }
]

import { languageMap } from "./languages"

const initialValue = {
  showBreakpoints: false,
  toggleBreakpoints: () => { },
  themeInfo: themeInfoList[0],
  setThemeInfo: (_: string) => { },
  themeInfoList,
  language: languageMap.english.english,
  setLanguage: (_: string) => { },
  languageList: Object.keys(languageMap.english),
  avatarInfo: avatarInfoList[0],
  setAvatarInfo: (_: string) => { },
  avatarInfoList,
  handle: "Tom Grunge",
  setHandle: (_: string) => { },
  t: (_: string) => ""
}

const SettingsContext = createContext<SettingsValue>(initialValue)

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const {
    showBreakpoints: initialShowBreakpoints,
    themeInfo: initialTheme,
    themeInfoList,
    language: initialLanguage,
    languageList,
    avatarInfo: initialAvatarInfo,
    handle: initialhandle,
  } = initialValue

  const [handle, setHandle] = useState(initialhandle)
  const [avatarInfo, _setAvatarInfo] = useState(initialAvatarInfo)
  const [themeInfo, _setThemeInfo] = useState(initialTheme)

  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)
  const [language, setLanguage] = useState(initialLanguage)

  const setAvatarInfo = (id: string) => {
    const info = avatarInfoList.find(info => info.id === id)!
    _setAvatarInfo(info)
  }

  const setThemeInfo = (id: string) => {
    const info = themeInfoList.find(info => info.id === id)!
    _setThemeInfo(info)
  }

  const t = (key: string) => languageMap[language][key]

  const toggleBreakpoints = useMemo(() => () => setShowBreakpoints(showBreakpoints => !showBreakpoints), [])

  useEffect(() => {
    document.body.classList.remove(...themeInfoList.map(info => info.id))
    document.body.classList.add(themeInfo.id)
  }, [themeInfo])

  const { children } = props
  const { Provider } = SettingsContext

  const value = { showBreakpoints, toggleBreakpoints, themeInfo, setThemeInfo, themeInfoList, language, setLanguage, languageList, t, avatarInfo, setAvatarInfo, avatarInfoList, handle, setHandle }

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);