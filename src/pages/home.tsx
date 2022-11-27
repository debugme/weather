import { Search, WeatherList } from "../components"
import { useWeather } from "../providers"

export const Home = () => {
  const { weatherList, searchTerm, setSearchTerm, isLoading, failure } = useWeather()
  
  return (
    <section className="flex flex-col w-3/4 mx-auto">
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