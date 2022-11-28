import { FC, Fragment, useState } from "react"

import { Weather } from "../../types"
import { DateSelector } from "./dateSelector"
import { WeatherCardList } from "./weatherCardList"

export type WeatherListProps = {
  list: Weather[]
}

export const WeatherList: FC<WeatherListProps> = (props) => {
  const { list } = props
  const dateList = [...new Set(list.map(item => item.date))]
  const [selectedDate, setSelectedDate] = useState(String(dateList[0]))
  const filteredList = list.filter(weather => weather.date === selectedDate)

  if (list.length === 0)
    return null

  return (
    <Fragment>
      <h2 className="block text-3xl text-secondary-600 mt-10">Weather</h2>
      <DateSelector list={dateList} selected={selectedDate} setSelected={setSelectedDate} />
      <WeatherCardList list={filteredList} />
    </Fragment>
  )
}