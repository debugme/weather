import { Search, WeatherList } from "../components"
import { WorldMap } from "../components/weather/worldMap"
import { useWeather } from "../providers"

export const Home = () => {
  const { weatherList, searchTerm, setSearchTerm, isLoading, failure } = useWeather()
  
  return (
    <section className="flex flex-col w-3/4 mx-auto">
      <h2 className="block text-3xl text-secondary-600">Search</h2>
      <WorldMap {...weatherList[0]} />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isLoading={isLoading}
        failure={failure}
        resultCount={weatherList.length}
      />
      <WeatherList list={weatherList} />
    </section>
  )
}