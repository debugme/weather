import { FC, Fragment, useState } from "react"
import { useLanguages } from "../../providers"

import { Weather } from "../../types"
import { ChipList } from "../chipList"
import { WeatherCardList } from "./weatherCardList"

export type WeatherListProps = {
  list: Weather[]
}

export const WeatherList: FC<WeatherListProps> = (props) => {
  const { list } = props
  const dateList = [...new Set(list.map(item => item.date))]
  const [selectedDate, setSelectedDate] = useState(list[0]?.date || "")
  const dateNormaliser = (text:string) => text.split(" ").slice(0, 2).join(" ")
  const filteredList = list.filter(weather => weather.date === selectedDate)
  const { t } = useLanguages()

  return (
    <Fragment>
      <div className="mt-8"></div>
      <h2 className="text-3xl text-secondary-400 capitalize">{t("date")}</h2>
      <ChipList list={dateList} selected={selectedDate} setSelected={setSelectedDate} normaliser={dateNormaliser} />
      <WeatherCardList list={filteredList} />
    </Fragment>
  )
}