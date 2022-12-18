import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import { SelectorInfo, ThemesValue } from "../../../types"

const themeInfoList: SelectorInfo[] = [
  { id: "slate", data: <span>slate</span> },
  { id: "grey", data: <span>grey</span> },
  { id: "zinc", data: <span>zinc</span> },
  { id: "plain", data: <span>plain</span> },
  { id: "stone", data: <span>stone</span> }
]

const initialValue = {
  themeInfo: themeInfoList[0],
  setThemeInfo: (_: string) => { },
  themeInfoList,
}

const ThemesContext = createContext<ThemesValue>(initialValue)

export const ThemesProvider: FC<PropsWithChildren> = (props) => {
  const { themeInfo: initialTheme, themeInfoList } = initialValue

  const [themeInfo, _setThemeInfo] = useState(initialTheme)

  const setThemeInfo = (id: string) => {
    const info = themeInfoList.find(info => info.id === id)!
    _setThemeInfo(info)
  }

  useEffect(() => {
    document.body.classList.remove(...themeInfoList.map(info => info.id))
    document.body.classList.add(themeInfo.id)
  }, [themeInfo])

  const { children } = props
  const { Provider } = ThemesContext

  const value = { themeInfo, setThemeInfo, themeInfoList }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useThemes = () => useContext(ThemesContext);