import { FC } from "react"

import { Weather } from "../../types"
import { World } from "../world"

export type WorldMapProps = Partial<Pick<Weather, "city" | "country" | "latitude" | "longitude">>

const uk = {
  latitude: 51.509865,
  longitude: -0.118092
}

export const WorldMap: FC<WorldMapProps> = (props) => {
  const { city = "", country = "", latitude = uk.latitude, longitude = uk.longitude } = props
  const title = city && country ? `${city}, ${country}` : ""

  return (
    <span className="flex items-center justify-center w-full h-56 px-8 py-2 mt-4 rounded-t-lg md:h-60 lg:h-72 bg-secondary-400 text-secondary-700">
      <span><World latitude={latitude} longitude={longitude} /></span>
      <h4 className="block w-16 text-sm text-center">{title}</h4>
    </span>
  )
}