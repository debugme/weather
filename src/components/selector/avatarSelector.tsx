import { FC, MouseEventHandler, useMemo } from "react"
import { AvatarInfo } from "../../types"

export type AvatarSelectorProps = {
  selectedOption: AvatarInfo
  setSelectedOption: (_: string) => void
  options: AvatarInfo[]
}

export const AvatarSelector: FC<AvatarSelectorProps> = (props) => {
  const { selectedOption, options, setSelectedOption } = props

  const handler: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    const selectedOption = event.currentTarget.dataset.avatarid!
    setSelectedOption(selectedOption)
  }

  const onClick = useMemo(() => handler, [])

  const itemList = options.map(avatarInfo => {
    const { id, avatar } = avatarInfo
    const isActive = (avatarInfo === selectedOption)
    const colors = `${isActive ? "border-primary-600" : "border-secondary-500"}`
    return (
      <li key={id} data-avatarid={id} onClick={onClick} className={`w-full py-2 px-3 rounded-2xl cursor-pointer flex flex-col items-center border-2 ${colors}`}>
        {avatar}
      </li>
    )
  })

  return (
    <ul className="flex justify-between py-2 rounded-2xl gap-3">
      {itemList}
    </ul>
  )
}