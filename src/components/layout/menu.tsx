import { FC } from "react"
import { Menu as MenuIcon, Close as CloseIcon } from "../images"

export type MenuProps = {
  isOpen: boolean
  onClick: () => void
}

export const Menu: FC<MenuProps> = (props) => {
  const { isOpen, onClick } = props
  const Icon = isOpen ? CloseIcon : MenuIcon
  return (
    <span onClick={onClick} title="Click to toggle theme">
      <Icon className="h-9 text-secondary-400 cursor-pointer" />
    </span>
  )
}