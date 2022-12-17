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
    const selectedOption = event.currentTarget.dataset.id!
    setSelectedOption(selectedOption)
  }

  const onClick = useMemo(() => handler, [])

  const itemList = options.map(item => {
    const { id, data } = item
    const isActive = (item === selectedOption)
    const colors = `${isActive ? "border-primary-600" : "border-secondary-500"}`
    return (
      <li key={id} data-id={id} onClick={onClick} className="w-1/6">
        <button className={`w-full py-2 px-3 rounded-2xl cursor-pointer flex flex-col items-center border-2 focus:outline-white ${colors}`} tabIndex={0}>{data}</button>
      </li>
    )
  })

  return (
    <ul className="flex flex-wrap justify-between py-2 rounded-2xl gap-3">
      {itemList}
    </ul>
  )
}