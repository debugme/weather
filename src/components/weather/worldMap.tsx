import { FC } from "react"

import { Weather } from "../../types"
import { World } from "../world"

export type WorldMapProps = Partial<Pick<Weather, "city" | "country" | "latitude" | "longitude">>

export const WorldMap: FC<WorldMapProps> = (props) => {
  const { city = "London", country = "UK", latitude = 51.509865, longitude = -0.118092 } = props
  const title = `${city}, ${country}`

  return (
    <span className="h-56 md:h-60 lg:h-72 bg-gradient-to-r from-primary-300 to-primary-400 w-full mt-4 flex justify-center  items-center text-secondary-700 px-8 py-2 rounded-t-lg">
      <World country={country} latitude={latitude} longitude={longitude} />
      <h4 className="text-center block text-sm w-16">{title}</h4>
    </span>
  )
}