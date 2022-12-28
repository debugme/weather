import { Fragment, useEffect, useMemo, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";



import { useAvatars, useSettings } from "../../../providers"

import { Menu } from "./menu"

export const Header = () => {
  const location = useLocation()
  const [pathname, setPathname] = useState(location.pathname)
  const { avatar, avatarMap } = useAvatars()
  const { handle } = useSettings()
  const navigate = useNavigate()




  const onEscape = () => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("ESC detected ", location.pathname);
        event.preventDefault()
        navigate(location.pathname === "/settings" ? "/" : "/settings")
      }
    }
    document.addEventListener("keydown", handler)
    const cleaner = () => document.removeEventListener("keydown", handler)
    return cleaner
  }  

  
  useEffect(() => setPathname(location.pathname.toLocaleLowerCase()), [location])
  useEffect(onEscape, [location])
  const toggleSettings = useMemo(() => () => navigate(pathname === "/settings" ? "/" : "/settings"), [pathname])

  const icon = avatarMap[avatar]

  return (
    <Fragment>
      <header className="flex items-center justify-between px-6 bg-secondary-700">
        <Menu isOpen={pathname === "/settings"} onClick={toggleSettings} />
        <span className="flex items-center justify-center gap-2">
          <h3 className="mt-2 text-sm hidden sm:block text-transparent bg-clip-text bg-primary-500">{handle}</h3>
          <div className="rounded-full bg-primary-500 w-10 h-10 relative">
            <div className="absolute left-0 top-[-8px]">{icon}</div>
          </div>
        </span>
      </header>
    </Fragment>
  )
}

