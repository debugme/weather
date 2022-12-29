import { useAvatars, useHandle } from "../../../providers"

export const Badge = () => {
  const { avatar, avatarMap } = useAvatars()
  const { handle } = useHandle()
  const icon = avatarMap[avatar]

  return (
    <span className="flex items-center justify-center gap-2">
      <h3 className="mt-2 text-sm hidden sm:block text-transparent bg-clip-text bg-primary-500">{handle}</h3>
      <div className="rounded-full bg-primary-500 w-10 h-10 relative">
        <div className="absolute left-0 top-[-8px]">{icon}</div>
      </div>
    </span>
  )
}