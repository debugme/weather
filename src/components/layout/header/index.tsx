import { Fragment, useEffect, useMemo, useState } from "react"
import { useSettings } from "../../../providers"

import { Avatar1Icon } from "./avatar1Icon"
import { Avatar2Icon } from "./avatar2Icon"
import { Avatar3Icon } from "./avatar3Icon"
import { Menu } from "./menu"
import { Settings } from "./settings"

const getAvatarIcon = (avatar: string) => {
  switch(avatar) {
    case "avatar1":
      return Avatar1Icon
    case "avatar2":
      return Avatar2Icon
    case "avatar3":
      return Avatar3Icon
    default:
      return Avatar1Icon
  }
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { avatar } = useSettings()

  const AvatarIcon = getAvatarIcon(avatar)

  const onClick = useMemo(() => () => setIsOpen(isOpen => !isOpen), [])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setIsOpen(isOpen => !isOpen)
      }
    }
    document.addEventListener("keydown", handler)
    
    const cleaner = () => document.removeEventListener("keydown", handler)
    return cleaner
  }, [])  

  return (
    <Fragment>
      <header className="flex items-center justify-between px-6 bg-secondary-700 font-cursive">
        <Menu isOpen={isOpen} onClick={onClick} />
        <AvatarIcon />
      </header>
      {isOpen ? <Settings /> : null}
    </Fragment>
  )
}
