import { Avatar, Menu } from "../images"

const onClick = () => document.body.classList.toggle("tokyo")

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 bg-secondary-700 font-cursive">
      <Menu className="h-9 text-secondary-400" />
      <span className="flex gap-2 justify-center items-center cursor-pointer" onClick={onClick} title="Click to toggle theme">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-400 to-primary-300">Tom Grunge</h3>
        <Avatar className="h-10 w-10 bg-secondary-700 rounded-full border border-primary-600" />
      </span>
    </header>
  )
}
