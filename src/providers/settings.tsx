import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"

import { SettingsValue } from "../types"

import { avatarInfoList } from "./avatars"

const themeList = ["slate", "grey", "zinc", "plain", "stone"]

const initialValue = {
  showBreakpoints: false,
  toggleBreakpoints: () => {},
  theme: themeList[0],
  setTheme: (_: string) => {},
  themeList,
  avatarInfo: avatarInfoList[0],
  setAvatarInfo: (_: string) => {},
  avatarInfoList,
  handle: "Tom Grunge",
  setHandle: (_: string) => {} 
}

const SettingsContext = createContext<SettingsValue>(initialValue)

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const {
    showBreakpoints: initialShowBreakpoints,
    theme: initialTheme,
    avatarInfo: initialAvatarInfo,
    themeList,
    handle: initialhandle,
  } = initialValue

  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)
  const [theme, setTheme] = useState(initialTheme)
  const [avatarInfo, _setAvatarInfo] = useState(initialAvatarInfo)
  const [handle, setHandle] = useState(initialhandle)

  const setAvatarInfo = (id: string) => {
    const avatar = avatarInfoList.find(avatarInfo => avatarInfo.id === id)!
    _setAvatarInfo(avatar)
  }

  const toggleBreakpoints = useMemo(() => () => setShowBreakpoints(showBreakpoints => !showBreakpoints), [])
 
  useEffect(() => {
    document.body.classList.remove(...themeList)
    document.body.classList.add(theme)
  }, [theme])

  const { children } = props
  const { Provider } = SettingsContext

  const value = { showBreakpoints, toggleBreakpoints, theme, setTheme, themeList, avatarInfo, setAvatarInfo, avatarInfoList, handle, setHandle }

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);