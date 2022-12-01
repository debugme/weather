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
      <h2 className="block mt-10 text-3xl text-secondary-600">Forecast</h2>
      <section className="flex flex-wrap p-4 mt-5 mr-auto rounded-lg gap-4 bg-secondary-400">
        {cardList}
      </section>
    </Fragment>
  )
}