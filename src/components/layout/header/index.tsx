import { useSecurity } from "../../../providers";
import { Badge } from "./badge";
import { Menu } from "./menu";

export const Header = () => {
  const { userProfile } = useSecurity()
  const isSignedIn = !!userProfile

  return (
    <header className="flex items-center justify-between px-6 bg-secondary-700">
      {isSignedIn ? <Menu settings="/settings" shortcut="Escape" /> : null}
      {isSignedIn ? <Badge /> : null}
    </header>

  )
}