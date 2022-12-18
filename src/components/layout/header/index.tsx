import { Fragment, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";

import { useAvatars, useSettings } from "../../../providers"

import { Menu } from "./menu"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { avatarInfo: { data } } = useAvatars()
  const { handle } = useSettings()
  const navigate = useNavigate()

  const onClick = useMemo(() => () => setIsOpen(isOpen => !isOpen), [])

  const onEscape = () => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setIsOpen(isOpen => !isOpen)
      }
    }
    document.addEventListener("keydown", handler)
    const cleaner = () => document.removeEventListener("keydown", handler)
    return cleaner
  }

  const onMenuToggle = () => navigate(isOpen ? "/settings" : "/")

  useEffect(onEscape, [])
  useEffect(onMenuToggle, [isOpen])

  return (
    <Fragment>
      <header className="flex items-center justify-between px-6 bg-secondary-700">
        <Menu isOpen={isOpen} onClick={onClick} />
        <span className="flex items-center justify-center gap-2">
          <h3 className="mt-2 text-sm hidden sm:block text-transparent bg-clip-text bg-primary-500">{handle}</h3>
          <span className="rounded-full bg-primary-500">{data}</span>
        </span>
      </header>
    </Fragment>
  )
}
