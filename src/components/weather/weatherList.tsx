import { FC, Fragment } from "react"

import { Weather } from "../../types"
import { WeatherCard } from "./weatherCard"

export type WeatherListProps = {
  list: Weather[]
}

export const WeatherList: FC<WeatherListProps> = (props) => {
  const { list } = props

  const cardList = list.map((weather, index) => <WeatherCard key={`card-${index}`} {...weather} />)

  if (cardList.length === 0)
    return null

  return (
    <Fragment>
      <h2 className="block text-3xl text-secondary-600 mt-10">Weather</h2>
      <section className="mt-8 grid gap-14 justify-around grid-cols-home">
        {cardList}
      </section>
    </Fragment>
  )
}