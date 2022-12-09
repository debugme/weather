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
    const className = `${isActive ? "text-secondary-800 bg-primary-400" : "text-primary-400"}`
    return (
      <li key={text} className={`py-1 px-3 rounded-xl cursor-pointer ${className}`}>
        <h4 onClick={onClick}>{text}</h4>
      </li>
    )
  })

  return (
    <ul className="flex max-w-fit py-2 px-2 rounded-2xl gap-2">
      {itemList}
    </ul>
  )
}