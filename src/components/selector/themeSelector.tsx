import { FC, MouseEventHandler, useMemo } from "react"

export type ThemeSelectorProps = {
  selectedOption: string
  setSelectedOption: (_: string) => void
  options: string[]
}

export const ThemeSelector: FC<ThemeSelectorProps> = (props) => {
  const { selectedOption, options, setSelectedOption } = props

  const handler: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    const selectedOption = event.currentTarget.innerText
    setSelectedOption(selectedOption)
  }

  const onClick = useMemo(() => handler, [])

  const itemList = options.map(text => {
    const isActive = (text === selectedOption)
    const className = `${isActive ? "text-secondary-800 bg-primary-600" : "border border-primary-600 text-primary-600"}`
    return (
      <li key={text} onClick={onClick} className={`py-1 px-3 rounded-2xl cursor-pointer ${className}`}>
        <h4 className="text-sm">{text}</h4>
      </li>
    )
  })

  return (
    <ul className="flex max-w-fit py-2 pr-2 rounded-2xl gap-3">
      {itemList}
    </ul>
  )
}