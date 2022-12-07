import { Fragment, useState } from "react"
import { Toggle } from "../toggle"

import { Avatar } from "./avatar"
import { Menu } from "./menu"


export const Settings = () => {
  return (
    <div className="block absolute z-10 bg-secondary-700 top-[72px] bottom-[72px] w-full">
      <h2 className="text-secondary-300 text-2xl px-8 pt-2">Settings</h2>
      <section className="flex flex-col px-8 pt-4">
        <span className="py-3 text-secondary-300 rounded-lg w-fit">Show breakpoints</span>
        <Toggle isOn={false} onClick={() => { }} />
      </section>
      <section className="flex flex-col px-8 pt-4">
        <span className="py-3 text-secondary-300 rounded-lg w-fit">Toggle theme</span>
        <Toggle isOn={false} onClick={() => { }} />
      </section>
    </div>
  )
}





export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showAvatar = true

  const toggleMenu = () => setIsOpen(isOpen => !isOpen)

  const toggleTheme = () => document.body.classList.toggle("tokyo")

  return (
    <Fragment>
      <header className="flex items-center justify-between px-6 bg-secondary-700 font-cursive">
        <Menu isOpen={isOpen} onClick={toggleMenu} />
        {showAvatar && <Avatar onClick={toggleTheme} />}
      </header>
      { isOpen ? <Settings /> : null }
    </Fragment>
  )
}
