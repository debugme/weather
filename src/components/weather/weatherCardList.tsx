import { FC, Fragment } from "react"

import { Weather } from "../../types"
import { WeatherCard } from "./weatherCard"
import { WorldMap, WorldMapProps } from "./worldMap"

export type WeatherCardListProps = {
  list: Weather[]
}

const buildCard = (weather: Weather, index: number) => <WeatherCard key={`card-${index}`} {...weather} />

export const WeatherCardList: FC<WeatherCardListProps> = (props) => {
  const { list } = props

  if (list.length === 0)
    return null

  const cardList = list.map(buildCard)

  const worldMapProps: WorldMapProps = list[0]

  return (
    <Fragment>
      <h4 className="block text-xl mt-10 text-secondary-600">Your results</h4>
      <WorldMap {...worldMapProps} />
      <section className="mt-5 flex flex-wrap gap-14">
        {cardList}
      </section>
    </Fragment>
  )
}