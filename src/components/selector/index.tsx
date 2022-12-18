import { FC, MouseEventHandler, useMemo } from "react"
import { SelectorInfo } from "../../types"

export type SelectorProps = {
  selectedOption: SelectorInfo
  setSelectedOption: (_: string) => void
  options: SelectorInfo[]
}

export const Selector: FC<SelectorProps> = (props) => {
  const { selectedOption, options, setSelectedOption } = props

  const handler: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    const selectedOption = event.currentTarget.dataset.id!
    setSelectedOption(selectedOption)
  }

  const onClick = useMemo(() => handler, [])

  const itemList = options.map(item => {
    const { id, data } = item
    const isActive = (item.id === selectedOption.id)
    const colors = `${isActive ? "text-primary-500 border-primary-600" : "text-secondary-400 border-secondary-500"}`
    return (
      <li key={id} data-id={id} onClick={onClick} className="w-1/6">
        <button className={`items-center text-sm w-full rounded-2xl cursor-pointer flex flex-col border-2 focus:outline-white ${colors}`} tabIndex={0}>{data}</button>
      </li>
    )
  })

  return (
    <ul className="flex flex-wrap justify-between py-2 rounded-2xl gap-3">
      {itemList}
    </ul>
  )
}