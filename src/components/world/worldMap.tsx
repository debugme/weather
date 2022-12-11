import { FC } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

import { Weather } from "../../types"
import geoUrl from "./map.json"

export type WorldMapProps = Pick<Weather, "city" | "country" | "latitude" | "longitude"> & { showMarker: boolean }

export const WorldMap: FC<WorldMapProps> = (props) => {
  const { city, country, latitude, longitude, showMarker } = props

  return (
    <span className="grid grid-cols-map w-full mt-4 rounded-t-lg bg-secondary-600 text-secondary-300">
      <div>
        <ComposableMap 
        projectionConfig={{ scale: 140 }}
        width={800}
        height={500}
        style={{ width: "100%", height: "auto" }}         
        className="fill-secondary-200">
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
            <circle className="fill-accent-500 stroke-secondary-400 stroke-[3px] w-3" r={10} />
          </Marker> : null }
        </ComposableMap>
      </div>
      <span className="flex flex-col justify-center items-start pl-4">
        <h4 className="block text-sm md:text-xl lg:text-3xl ">{city}</h4>
        <p className="block text-xs md:text-sm lg:text-lg ">{country}</p>
      </span>
    </span>
  )
}
