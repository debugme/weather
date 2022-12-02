import { FC } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

import { Weather } from "../../types"
import geoUrl from "./map.json"

export type WorldMapProps = Pick<Weather, "city" | "country" | "latitude" | "longitude"> & { showMarker: boolean }

export const WorldMap: FC<WorldMapProps> = (props) => {
  const { city, country, latitude, longitude, showMarker } = props

  return (
    <span className="grid grid-cols-map w-full mt-4 rounded-t-lg bg-secondary-400 text-secondary-700">
      <span>
        <ComposableMap className="w-full fill-secondary-200">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography key={geo.rsmKey} geography={geo} />
                )
              })
            }
          </Geographies>
          {showMarker ? <Marker coordinates={[longitude, latitude]}>
            <circle className="fill-accent-500 stroke-white stroke-2 w-3" r={12} />
          </Marker> : null }
        </ComposableMap>
      </span>
      <span className="flex flex-col justify-center items-start pl-4">
        <h4 className="block text-sm md:text-xl lg:text-3xl ">{city}</h4>
        <p className="block text-xs md:text-sm lg:text-lg ">{country}</p>
      </span>
    </span>
  )
}
