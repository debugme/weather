import { Fragment, useEffect, useMemo, useState } from "react"
import { useSettings } from "../../../providers"

import { Menu } from "./menu"
import { Settings } from "./settings"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { avatarInfo: { avatar }, handle } = useSettings()

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
          <h3 className="mt-2 text-sm hidden sm:block text-transparent bg-clip-text bg-primary-500">{handle}</h3>
          <span className="rounded-full bg-primary-500">{avatar}</span>
        </span>
      </header>
      {isOpen ? <Settings /> : null}
    </Fragment>
  )
}
