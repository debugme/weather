import { FC, Fragment, useEffect, useRef, useState } from "react"

import { Weather } from "../../types"
import { getTimeFormatter } from "../../utilities"
import { WeatherCard } from "./weatherCard"

export type WeatherCardListProps = {
  list: Weather[]
}

const buildCard = (weather: Weather, index: number) => <WeatherCard key={`card-${index}`} {...weather} />

export const WeatherCardList: FC<WeatherCardListProps> = (props) => {
  const { list } = props

  if (list.length === 0)
    return null

  const { city, country, countryCode } = list[0]
  const timeFormatter = getTimeFormatter(countryCode)
  const intervalId = useRef<NodeJS.Timer>()
  const [localTime, setLocalTime] = useState<string>(timeFormatter.format(new Date()))

  useEffect(() => {
    intervalId.current = setInterval(() => { setLocalTime(timeFormatter.format(new Date())) }, 1000)
    return () => clearInterval(intervalId.current)
  }, [])

  const title = `${city}, ${country}`
  const cardList = list.map(buildCard)

  return (
    <Fragment>
      <h4 className="block text-xl mt-10 text-secondary-600">Your results</h4>
      <span className="bg-gradient-to-r from-primary-300 to-primary-400 w-[320px] mt-4 flex justify-between items-center gap-4 text-secondary-700 px-4 py-2 rounded-lg">
        <h4 className="block text-xl ">{title}</h4>
        <p>{localTime}</p>
      </span>
      <section className="mt-5 flex flex-wrap gap-14">
        {cardList}
      </section>
    </Fragment>
  )
}