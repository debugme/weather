import { FC } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

import geoUrl from "./map.json"

export type WorldProps = {
  latitude: number
  longitude: number
}

export const World: FC<WorldProps> = (props) => {
  const { latitude, longitude } = props

  return (
    <ComposableMap className="w-full">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography key={geo.rsmKey} geography={geo} fill="#e2e8f0" />
            )
          })
        }
      </Geographies>
      <Marker coordinates={[longitude, latitude]}>
        <circle r={12} fill="red" stroke="white" strokeWidth={3} />
      </Marker>
    </ComposableMap>
  )
}