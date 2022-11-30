import { FC, Fragment } from "react"

export type DateSelectorProps = {
  list: string[]
  selected: string
  setSelected: (_: string) => void
}

export const DateSelector: FC<DateSelectorProps> = (props) => {
  const { list, selected, setSelected } = props

  const chipList = list.map(text => {
    const label = text.split(" ").slice(0, 2).join(" ")
    const className = `py-2 rounded-lg ${selected === text ? "bg-primary-300" : "bg-secondary-300"}`
    const onClick: React.MouseEventHandler = (event) => {
      setSelected(event.currentTarget.getAttribute("data-id")!)
    }

    return <button key={text} data-id={text} className={className} onClick={onClick}>{label}</button>
  })

  return (
    <Fragment>
      <div className="grid grid-cols-3 md:grid-cols-6 place-items-stretch gap-4 p-4 bg-secondary-400 justify-items-around rounded-lg mt-4">
        {chipList}
      </div>
    </Fragment>
  )
}