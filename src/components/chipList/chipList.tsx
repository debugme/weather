import { FC, Fragment } from "react"

export type ChipListProps = {
  title: string
  list: string[]
  selected: string
  setSelected: (_: string) => void
  normaliser?: (_: string) => string
}

export const ChipList: FC<ChipListProps> = (props) => {
  const { title, list, selected, setSelected, normaliser = v => v } = props

  const chipList = list.map(text => {
    const label = normaliser(text)
    const className = `py-2 rounded-lg ${selected === text ? "bg-primary-300" : "bg-secondary-300"}`
    const onClick: React.MouseEventHandler = (event) => {
      setSelected(event.currentTarget.getAttribute("data-id")!)
    }

    return <button key={text} data-id={text} className={className} onClick={onClick}>{label}</button>
  })

  return (
    <Fragment>
      <h2 className="text-3xl text-secondary-600 w-20 mt-8">{title}</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 place-items-stretch gap-4 p-4 bg-secondary-400 justify-items-around rounded-lg mt-4">
        {chipList}
      </div>
    </Fragment>
  )
}