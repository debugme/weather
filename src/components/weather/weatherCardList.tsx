import { FC, Fragment } from "react"

import { Weather } from "../../types"
import { WeatherCard } from "./weatherCard"

export type WeatherCardListProps = {
  list: Weather[]
}

const buildCard = (weather: Weather, index: number) => <WeatherCard key={`card-${index}`} {...weather} />

export const WeatherCardList: FC<WeatherCardListProps> = (props) => {
  const { list } = props

  if (list.length === 0)
    return null

  const cardList = list.map(buildCard)

  return (
    <Fragment>
      <h2 className="block text-3xl text-secondary-600 mt-10">Forecast</h2>
      <section className="mt-5 flex flex-wrap gap-4 bg-secondary-400 rounded-lg p-4 mr-auto">
        {cardList}
      </section>
    </Fragment>
  )
}