import { FC, MouseEventHandler, useMemo } from "react"
import { SelectorInfo } from "../../types"

export type ThemeSelectorProps = {
  selectedOption: SelectorInfo
  setSelectedOption: (_: string) => void
  options: SelectorInfo[]
}

export const ThemeSelector: FC<ThemeSelectorProps> = (props) => {
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
    const className = `${isActive ? "text-primary-500 border-primary-600" : "text-secondary-400 border-secondary-500"}`
    return (
      <li key={id} data-id={id} onClick={onClick} className="w-1/6">
        <button className={`text-center text-sm w-full py-1 rounded-lg cursor-pointer border-2 focus:outline-white ${className}`}>{data}</button>
      </li>
    )
  })

  return (
    <ul className="flex flex-wrap justify-between py-2 rounded-2xl gap-3">
      {itemList}
    </ul>
  )
}