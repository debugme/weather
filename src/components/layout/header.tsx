import { Avatar, Menu } from "../images"

const onClick = () => document.body.classList.toggle("tokyo")

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 bg-secondary-700 font-cursive">
      <Menu className="h-9 text-secondary-400" />
      <span className="flex items-center justify-center cursor-pointer gap-2" onClick={onClick} title="Click to toggle theme">
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-400 to-primary-300">Tom Grunge</h3>
        <Avatar className="w-10 h-10 border rounded-full bg-secondary-700 border-primary-600" />
      </span>
    </header>
  )
}
