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
    <span className="h-56 md:h-60 lg:h-72 bg-secondary-400 w-full mt-4 flex justify-center items-center text-secondary-700 px-8 py-2 rounded-t-lg">
      <span><World latitude={latitude} longitude={longitude} /></span>
      <h4 className="text-center block text-sm w-16">{title}</h4>
    </span>
  )
}