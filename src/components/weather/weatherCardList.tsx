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
      <h2 className="block mt-10 text-3xl text-secondary-400">Weather</h2>
      <section className="grid w-full gap-4 p-4 mt-5 mr-auto rounded-lg grid-cols-home bg-secondary-600">
        {cardList}
      </section>
    </Fragment>
  )
}