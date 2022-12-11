import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"

import { AvatarInfo, SettingsValue } from "../types"

import { Avatar1Icon } from "./avatar1Icon"
import { Avatar2Icon } from "./avatar2Icon"
import { Avatar3Icon } from "./avatar3Icon"

const themeList = ["slate", "grey", "zinc", "stone"]

const avatarInfoList: AvatarInfo[] = [
  { id: "avatar1", avatar: <Avatar1Icon /> },
  { id: "avatar2", avatar: <Avatar2Icon /> },
  { id: "avatar3", avatar: <Avatar3Icon /> },
]

const initialValue = {
  showBreakpoints: false,
  toggleBreakpoints: () => {},

  theme: themeList[0],
  setTheme: (_: string) => {},
  themeList,

  avatarInfo: avatarInfoList[0],
  setAvatarInfo: (_: string) => {},
  avatarInfoList
}

const SettingsContext = createContext<SettingsValue>(initialValue)

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const {
    showBreakpoints: initialShowBreakpoints,
    theme: initialTheme,
    avatarInfo: initialAvatarInfo,
    themeList
  } = initialValue

  const [showBreakpoints, setShowBreakpoints] = useState(initialShowBreakpoints)
  const [theme, setTheme] = useState(initialTheme)
  const [avatarInfo, _setAvatarInfo] = useState(initialAvatarInfo)

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

  const value = { showBreakpoints, toggleBreakpoints, theme, setTheme, themeList, avatarInfo, setAvatarInfo, avatarInfoList }

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);