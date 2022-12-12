import { FC } from "react"
import { CloseIcon } from "./closeIcon"

import { MenuIcon } from "./menuIcon"

export type MenuProps = {
  isOpen: boolean
  onClick: () => void
}

export const Menu: FC<MenuProps> = (props) => {
  const { isOpen, onClick } = props
  const Icon = isOpen ? CloseIcon : MenuIcon
  return (
    <span onClick={onClick}>
      <Icon className="h-9 text-secondary-400 cursor-pointer" />
    </span>
  )
}