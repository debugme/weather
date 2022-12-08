import { FC, MouseEventHandler, useMemo, useState } from "react"

export type SelectorProps = {
  selectedOption: string
  setSelectedOption: (_: string) => void
  options: string[]
}

export const Selector: FC<SelectorProps> = (props) => {
  const { selectedOption, options, setSelectedOption } = props

  const handler: MouseEventHandler<HTMLHeadingElement> = (event) => {
    event.preventDefault()
    const selectedOption = event.currentTarget.innerText
    setSelectedOption(selectedOption)
  }

  const onClick = useMemo(() => handler, [])

  const itemList = options.map(text => {
    const isActive = (text === selectedOption)
    const className = `${isActive ? "text-secondary-700 bg-primary-400" : "text-secondary-400 bg-secondary-600"}`
    return (
      <li key={text} className={`py-2 px-3 rounded-xl cursor-pointer ${className}`}>
        <h4 onClick={onClick}>{text}</h4>
      </li>
    )
  })

  return (
    <ul className="bg-secondary-600 flex max-w-fit py-3 px-3 rounded-2xl gap-4">
      {itemList}
    </ul>
  )
}