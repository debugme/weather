import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import { Nullable, SelectorInfo } from "../../../types"
import { useStorage } from "../../storage"

const themeInfoList: SelectorInfo[] = [
  { id: "slate", data: <span className="my-2">slate</span> },
  { id: "grey", data: <span className="my-2">grey</span> },
  { id: "zinc", data: <span className="my-2">zinc</span> },
  { id: "plain", data: <span className="my-2">plain</span> },
  { id: "stone", data: <span className="my-2">stone</span> }
]

export type ThemesValue = {
  themeInfo: SelectorInfo
  setThemeInfo: (_: string) => void
  themeInfoList: SelectorInfo[]
}

const initialValue: ThemesValue = {
  themeInfo: themeInfoList[0],
  setThemeInfo: (_: string) => { },
  themeInfoList,
}

const ThemesContext = createContext(initialValue)

export const ThemesProvider: FC<PropsWithChildren> = (props) => {

  const { setItem, getItem } = useStorage()

  const savedThemeInfo = getItem("theme") as Nullable<SelectorInfo>

  const { themeInfo: initialTheme, themeInfoList } = initialValue

  const [themeInfo, _setThemeInfo] = useState(savedThemeInfo || initialTheme)

  const setThemeInfo = (id: string) => {
    const info = themeInfoList.find(info => info.id === id)!
    _setThemeInfo(info)
    setItem("theme", info)
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