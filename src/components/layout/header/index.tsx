import { Fragment, useEffect, useMemo, useState } from "react"

import { Avatar } from "./avatar"
import { Menu } from "./menu"
import { Settings } from "./settings"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = useMemo(() => () => setIsOpen(isOpen => !isOpen), [])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setIsOpen(isOpen => !isOpen)
      }
    }
    const cleaner = () => document.removeEventListener("keydown", handler)
    document.addEventListener("keydown", handler)
    return cleaner
  }, [])  

  return (
    <Fragment>
      <header className="flex items-center justify-between px-6 bg-secondary-700 font-cursive">
        <Menu isOpen={isOpen} onClick={onClick} />
        <Avatar />
      </header>
      {isOpen ? <Settings /> : null}
    </Fragment>
  )
}
