import { Avatar as AvatarIcon } from "../images"

export const Avatar = () => {
  return (
    <span className="flex items-center justify-center gap-2">
      <h3 className="hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-400 to-primary-300">Tom Grunge</h3>
      <AvatarIcon className="w-10 h-10 border rounded-full border-secondary-400 fill-secondary-500 bg-secondary-500" />
    </span>
  )
}