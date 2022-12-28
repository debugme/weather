import { Badge } from "./badge";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 bg-secondary-700">
      <Menu settings="/settings" shortcut="Escape" />
      <Badge />
    </header>

  )
}