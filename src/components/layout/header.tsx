import { useState } from "react"

import { Avatar } from "./avatar"
import { Menu } from "./menu"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showAvatar = true

  const toggleMenu = () => setIsOpen(isOpen => !isOpen)

  const toggleTheme = () => document.body.classList.toggle("tokyo")

  return (
    <header className="flex items-center justify-between px-6 bg-secondary-700 font-cursive">
      <Menu isOpen={isOpen} onClick={toggleMenu} />
      {showAvatar && <Avatar onClick={toggleTheme} />}
    </header>
  )
}
