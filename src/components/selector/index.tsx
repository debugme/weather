import { MouseEventHandler, useMemo } from "react"

export type SelectorProps = {
  selected: string
  setSelected: (_: string) => void
  selectionList: string[]
  selectionMap: Record<string, JSX.Element>
}

export const Selector = (props: SelectorProps) => {
  const { selected, setSelected, selectionList, selectionMap } = props

  const handler: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    setSelected(event.currentTarget.dataset.id!)
  }

  const onClick = useMemo(() => handler, [])

  const itemList = selectionList.map(selection => {
    const isActive = (selection === selected)
    const colors = `${isActive ? "text-primary-500 border-primary-600" : "text-secondary-400 border-secondary-500"}`
    const className = `items-center text-sm w-full rounded-2xl cursor-pointer flex flex-col border-2 focus:outline-white ${colors}`
    const jsxElement = selectionMap[selection]
    
    return (
      <li key={selection} data-id={selection} onClick={onClick} className="w-1/6">
        <button className={className} tabIndex={0}>{jsxElement}</button>
      </li>
    )
  })

  return (
    <ul className="flex flex-wrap justify-between py-2 rounded-2xl gap-3">
      {itemList}
    </ul>
  )
}