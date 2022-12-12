import { FC, useEffect, useRef, useState } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

import { Weather } from "../../types"
import { getTimeFormatter } from "../../utilities"
import geoUrl from "./map.json"

export type WorldMapProps = Pick<Weather, "city" | "country" | "countryCode" | "latitude" | "longitude"> & { showMarker: boolean }

export const WorldMap: FC<WorldMapProps> = (props) => {
  const { city, country, countryCode, latitude, longitude, showMarker } = props

  const intervalId = useRef<NodeJS.Timeout>()
  const [localTime, setLocalTime] = useState(getTimeFormatter("GB", "medium").format(Date.now()))
  const oneSecond = 1000

  useEffect(() => {
    const callback = () => setLocalTime(getTimeFormatter(countryCode || "GB", "medium").format(new Date()))
    const cleanUp = () => clearInterval(intervalId.current)
    intervalId.current = setInterval(callback, oneSecond)
    return cleanUp
  }, [countryCode])

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
          </Marker> : null}
        </ComposableMap>
      </div>
      <span className="flex flex-col justify-center items-start pl-4">
        <h4 className="text-sm md:text-xl lg:text-3xl">{city}</h4>
        <p className="text-xs md:text-sm lg:text-md">{country}</p>
        <p className="text-md tracking-widest pt-3">{localTime}</p>
      </span>
    </span>
  )
}
