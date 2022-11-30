import { FC } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

import geoUrl from "./map.json"

export type WorldProps = {
  country: string
  latitude: number
  longitude: number
}

export const World: FC<WorldProps> = (props) => {
  const { country, latitude, longitude } = props

  return (
    <ComposableMap className="w-full">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography key={geo.rsmKey} geography={geo} fill="#ca8a04" />
            )
          })
        }
      </Geographies>
      <Marker coordinates={[longitude, latitude]}>
        <circle r={16} fill="red" stroke="white" strokeWidth={4} />
      </Marker>
    </ComposableMap>
  )
}