import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useStorage } from "../../storage"

const themeMap = {
  "slate": <span className="my-2">slate</span>,
  "grey": <span className="my-2">grey</span>,
  "zinc": <span className="my-2">zinc</span>,
  "plain": <span className="my-2">plain</span>,
  "stone": <span className="my-2">stone</span>,
}

export type ThemesValue = {
  theme: string
  setTheme: (_: string) => void
  themeList: string[]
  themeMap: Record<string, JSX.Element>
}

const initialValue: ThemesValue = {
  theme: "slate",
  setTheme: (_: string) => { },
  themeList: ["slate", "grey", "zinc", "plain", "stone"],
  themeMap
}

const ThemesContext = createContext(initialValue)

export const ThemesProvider: FC<PropsWithChildren> = (props) => {
  const { setItem, getItem } = useStorage()
  const savedTheme = getItem("theme") as string
  const { theme: _theme, themeList, themeMap } = initialValue
  const initialTheme = savedTheme || _theme
  const [theme, setTheme] = useState(initialTheme)
  
  useEffect(() => {
    document.body.classList.remove(...themeList)
    document.body.classList.add(theme)
    setItem("theme", theme)
  }, [theme])

  const { children } = props
  const { Provider } = ThemesContext

  const value = { theme, setTheme, themeList, themeMap }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useThemes = () => useContext(ThemesContext);