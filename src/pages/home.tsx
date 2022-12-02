import { Search, WeatherList, WorldMap } from "../components"
import { useWeather } from "../providers"
import { Weather } from "../types"

export const Home = () => {
  const { weatherList, searchTerm, setSearchTerm, isLoading } = useWeather()
  
  const worldMapProps = getWorldMapProps(searchTerm, isLoading, weatherList)

  return (
    <section className="flex flex-col w-3/4 mx-auto">
      <h2 className="block text-3xl text-secondary-600">Search</h2>
      <WorldMap {...worldMapProps} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} isLoading={isLoading} />
      <WeatherList list={weatherList} />
    </section>
  )
}

const getWorldMapProps = (searchTerm: string, isLoading: boolean, weatherList: Weather[]) => {
  const uk = {
    city: "London",
    country: "Great Britain",
    latitude: 51.509865,
    longitude: -0.118092,
    showMarker: true
  }

  const worldMapProps = searchTerm.length === 0
    ? uk
    : isLoading
    ? { ...uk, city: "", country: "", showMarker: false }
    : weatherList.length === 0
    ? { ...uk, city: "No results", country: "Try again" }
    : { ...uk, ...weatherList[0] }

  return worldMapProps
}