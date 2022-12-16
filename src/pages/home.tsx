import { Search, WeatherList, WorldMap } from "../components"
import { useSettings, useWeather } from "../providers"
import { Weather } from "../types"

export const Home = () => {
  const { t } = useSettings()
  const { weatherList, searchTerm, setSearchTerm, isLoading } = useWeather()
  const worldMapProps = getWorldMapProps(searchTerm, isLoading, weatherList)

  return (
    <section className="flex flex-col w-3/4 mx-auto">
      <h2 className="block text-3xl text-secondary-400">{t("search")}</h2>
      <span className="hidden lg:block"><WorldMap {...worldMapProps} /></span>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} isLoading={isLoading} />
      <WeatherList list={weatherList} />
    </section>
  )
}

const getWorldMapProps = (searchTerm: string, isLoading: boolean, weatherList: Weather[]) => {
  const gb = {
    city: "London",
    country: "Great Britain",
    countryCode: "GB",
    latitude: 51.509865,
    longitude: -0.118092,
    showMarker: true
  }

  const worldMapProps = searchTerm.length === 0
    ? gb
    : isLoading
    ? { ...gb, city: "", country: "", showMarker: false }
    : weatherList.length === 0
    ? { ...gb, city: "No results", country: "Try again" }
    : { ...gb, ...weatherList[0] }

  return worldMapProps
}