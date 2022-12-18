import {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";

import { Nullable, Weather, WeatherValue } from "../../types";
import { useWeatherAPI, useDebounce } from "../../hooks";

const initialValue = {
  searchTerm: "",
  setSearchTerm: (_: string) => { },
  weatherList: [],
  setWeatherList: (_: Weather[]) => { },
  isLoading: false,
  setIsLoading: (_: boolean) => { },
  failure: null
}

const WeatherContext = createContext<WeatherValue>(initialValue)

export const WeatherProvider: FC<PropsWithChildren> = (props) => {
  const {
    searchTerm: initialSearchTerm,
    weatherList: initialShowList,
    isLoading: initialIsLoading,
    failure: initialFailure
  } = initialValue

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [weatherList, setWeatherList] = useState<Weather[]>(initialShowList)
  const [isLoading, setIsLoading] = useState(initialIsLoading)
  const [failure, setFailure] = useState<Nullable<Error>>(initialFailure)
  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 300) 

  const updateSearchTerm = (searchTerm: string) => {
    setWeatherList([])
    setIsLoading(true)
    setSearchTerm(searchTerm)
  }

  const { data, error, loading } = useWeatherAPI(debouncedSearchTerm)

  useEffect(() => {
    setWeatherList(data || [])
    setFailure(error || null)
    setIsLoading(loading)
  }, [data, error, loading])

  const value = {
    searchTerm,
    setSearchTerm: updateSearchTerm,
    weatherList,
    setWeatherList,
    isLoading,
    failure
  }

  const { children } = props
  const { Provider } = WeatherContext

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useWeather = () => useContext(WeatherContext);