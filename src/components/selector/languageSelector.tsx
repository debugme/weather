import { FC, MouseEventHandler, useMemo } from "react"

export type LanguageSelectorProps = {
  selectedOption: string
  setSelectedOption: (_: string) => void
  options: string[]
}

export const LanguageSelector: FC<LanguageSelectorProps> = (props) => {
  const { selectedOption, options, setSelectedOption } = props

  const handler: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    const selectedOption = event.currentTarget.innerText
    setSelectedOption(selectedOption)
  }

  const onClick = useMemo(() => handler, [])

  const itemList = options.map(text => {
    const isActive = (text === selectedOption)
    const className = `${isActive ? "text-primary-500 border-primary-600" : "text-secondary-400 border-secondary-500"}`
    return (
      <li key={text} onClick={onClick} className="w-1/6">
        <button className={`text-center text-sm py-1 rounded-lg cursor-pointer border-2 w-full ${className}`}>{text}</button>
      </li>
    )
  })

  return (
    <ul className="flex flex-wrap justify-between py-2 rounded-2xl gap-3">
      {itemList}
    </ul>
  )
}