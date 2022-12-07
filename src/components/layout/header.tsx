import { Fragment, useMemo, useState } from "react"
import { useSettings } from "../../providers"
import { Toggle } from "../toggle"

import { Avatar } from "./avatar"
import { Menu } from "./menu"

export const Settings = () => {
  const { toggleBreakpoints, toggleTheme } = useSettings()

  return (
    <div className="block absolute z-10 bg-secondary-700 top-[72px] bottom-[72px] w-full">
      <h2 className="text-secondary-300 text-2xl px-8 pt-2">Settings</h2>
      <section className="flex flex-col px-8 pt-4">
        <span className="py-3 text-secondary-300 rounded-lg w-fit">Show breakpoints</span>
        <Toggle isOn={false} onClick={toggleBreakpoints} />
      </section>
      <section className="flex flex-col px-8 pt-4">
        <span className="py-3 text-secondary-300 rounded-lg w-fit">Toggle theme</span>
        <Toggle isOn={false} onClick={toggleTheme} />
      </section>
    </div>
  )
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = useMemo(() => () => setIsOpen(isOpen => !isOpen), [])

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
