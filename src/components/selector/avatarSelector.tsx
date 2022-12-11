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
    const colors = `${isActive ? "text-secondary-800 bg-primary-600" : " text-primary-600"}`
    return (
      <li key={id} data-avatarid={id} onClick={onClick} className={`w-full py-2 px-3 rounded-2xl cursor-pointer flex flex-col items-center border border-primary-600 ${colors}`}>
        {avatar}
      </li>
    )
  })

  return (
    <ul className="flex py-2 pr-2 rounded-2xl gap-3">
      {itemList}
    </ul>
  )
}