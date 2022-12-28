import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-9 text-secondary-400 cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-9 text-secondary-400 cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

type MenuProps = {
  settings: string
  shortcut: string
}

export const Menu = (props: MenuProps) => {
  const { settings, shortcut } = props

  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(location.pathname === settings)

  useEffect(() => setIsOpen(location.pathname === settings), [location])

  const toggleSettings = () => {
    if (isOpen)
      navigate(-1)
    else
      navigate(settings)
  }

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === shortcut)
        toggleSettings()

    }
    document.addEventListener("keydown", handler)
    const cleaner = () => document.removeEventListener("keydown", handler)
    return cleaner
  }, [isOpen])

  return (
    <button className="focus:outline-white" onClick={toggleSettings} tabIndex={0} role="menu">
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  )
}