import { FC } from "react"

import { Weather } from "../../types"
import { World } from "../world"

export type WorldMapProps = Pick<Weather, "city" | "country" | "latitude" | "longitude">

export const WorldMap: FC<WorldMapProps> = (props) => {
  const { city, country, latitude, longitude } = props
  const title = `${city}, ${country}`

  return (
    <span className="bg-gradient-to-r from-primary-300 to-primary-400 w-full mt-4 flex justify-start items-center gap-4 text-secondary-700 px-4 py-2 rounded-lg">
      <span>
        <World country={country} latitude={latitude} longitude={longitude} />
      </span>
      <span>
        <h4 className="text-center block text-xl ">{title}</h4>
      </span>
    </span>
  )
}