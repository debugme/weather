import { useState } from "react"
import { Avatar, Menu } from "../images"

const onClick = () => document.body.classList.toggle("tokyo")

export const Header = () => {
  const [showAvatar, setShowAvatar] = useState(false)


  return (
    <header className="flex items-center justify-between px-6 bg-secondary-700 font-cursive">
      <span onClick={onClick} title="Click to toggle theme"><Menu className="h-9 text-secondary-400 cursor-pointer" /></span>
      {showAvatar ? <span className="flex items-center justify-center cursor-pointer gap-2" >
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-400 to-primary-300">Tom Grunge</h3>
        <Avatar className="w-10 h-10 border rounded-full border-secondary-400 fill-secondary-500 bg-secondary-500" />
      </span> : null}

    </header>
  )
}
