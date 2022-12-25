import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

import { Weather } from "../../types"
import { CityInfo } from "./cityInfo"
import geoUrl from "./map.json"

export type WorldMapProps = Pick<Weather, "city" | "country" | "countryCode" | "latitude" | "longitude"> & { showMarker: boolean }

const geographyStyle = {
  default: { outline: "none" },
  hover: { outline: "none" },
  pressed: { outline: "none" },
}

export const WorldMap = (props: WorldMapProps) => {
  const { city, country, countryCode, latitude, longitude, showMarker } = props

  return (
    <span className="grid grid-cols-map w-full mt-4 rounded-t-lg bg-secondary-600 text-secondary-300">
      <div>
        <ComposableMap
          projectionConfig={{ scale: 190 }}
          width={800}
          height={600}
          style={{ width: "100%", height: "360" }}
          className="fill-secondary-300 pt-8">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} tabIndex={-1} style={geographyStyle} />)
            }
          </Geographies>
          {showMarker ? <Marker coordinates={[longitude, latitude]}>
            <circle className="fill-accent-500 stroke-secondary-400 stroke-[3px] w-3" r={10} />
          </Marker> : null}
        </ComposableMap>
      </div>
      <span className="flex flex-col justify-center items-start">
        <span className="flex flex-col justify-end min-w-[120px] min-h-[120px] px-3 py-2 rounded-lg bg-gradient-to-r from-secondary-700 to-secondary-600" >
          <h4 className="text-sm md:text-xl lg:text-3xl capitalize text-secondary-300">{city}</h4>
          <p className="text-xs md:text-sm lg:text-md capitalize text-secondary-400">{country}</p>
          <CityInfo countryCode={countryCode} />
        </span>
      </span>
    </span>
  )
}
