import { Fragment, useEffect, useMemo, useState } from "react"
import { useSettings } from "../../../providers"

import { Menu } from "./menu"
import { Settings } from "./settings"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { avatarInfo: { label, avatar } } = useSettings()


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
      <header className="flex items-center justify-between px-6 bg-secondary-700">
        <Menu isOpen={isOpen} onClick={onClick} />
        <span className="flex items-center justify-center gap-2">
          <h3 className="text-sm hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-400 to-primary-300">{label}</h3>
          {avatar}
        </span>
      </header>
      {isOpen ? <Settings /> : null}
    </Fragment>
  )
}
