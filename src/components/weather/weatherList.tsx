import { FC, Fragment, useState } from "react"

import { Weather } from "../../types"
import { ChipList } from "./chipList"
import { WeatherCardList } from "./weatherCardList"

export type WeatherListProps = {
  list: Weather[]
}

export const WeatherList: FC<WeatherListProps> = (props) => {
  const { list } = props
  if (list.length === 0)
    return null

  const dateList = [...new Set(list.map(item => item.date))]
  const dateNormaliser = (text:string) => text.split(" ").slice(0, 2).join(" ")
  const [selectedDate, setSelectedDate] = useState(list[0].date)
  const filteredList = list.filter(weather => weather.date === selectedDate)

  return (
    <Fragment>
      <h2 className="block text-3xl text-secondary-600 mt-10">Calendar</h2>
      <ChipList list={dateList} selected={selectedDate} setSelected={setSelectedDate} normaliser={dateNormaliser} />
      <WeatherCardList list={filteredList} />
    </Fragment>
  )
}