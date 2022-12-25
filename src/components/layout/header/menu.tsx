import { CloseIcon } from "./closeIcon"

import { MenuIcon } from "./menuIcon"

export type MenuProps = {
  isOpen: boolean
  onClick: () => void
}

export const Menu = (props: MenuProps) => {
  const { isOpen, onClick } = props
  const Icon = isOpen ? CloseIcon : MenuIcon
  return (
    <button className="focus:outline-white" onClick={onClick} tabIndex={0} role="menu">
      <Icon className="h-9 text-secondary-400 cursor-pointer" />
    </button>
  )
}