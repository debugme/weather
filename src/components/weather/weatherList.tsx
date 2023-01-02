import { Fragment, useLayoutEffect } from "react"

import { useLocales } from "../../providers"
import { Weather } from "../../types"
import { ChipList } from "../chipList"

import { WeatherCardList } from "./weatherCardList"

export type WeatherListProps = {
  list: Weather[]
  selectedDate: string
  setSelectedDate: (_: string) => void
}

export const WeatherList = (props: WeatherListProps) => {
  const { list, selectedDate, setSelectedDate } = props
  const { t } = useLocales()

  const dateList = [...new Set(list.map(item => item.date))]
  const dateNormaliser = (text: string) => text.split(" ").slice(0, 2).join(" ")
  const filteredList = list.filter(weather => weather.date === selectedDate)

  useLayoutEffect(() => {
    if (selectedDate)
      return
    if (!dateList.length)
      return
    setSelectedDate(dateList[0])
  }, [dateList]
  )

  if(!dateList.length)
    return null

  return (
    <Fragment>
      <div className="mt-8"></div>
      <h2 className="text-3xl text-secondary-400 capitalize">{t("date")}</h2>
      <ChipList list={dateList} selected={selectedDate} setSelected={setSelectedDate} normaliser={dateNormaliser} />
      <WeatherCardList list={filteredList} />
    </Fragment>
  )
}