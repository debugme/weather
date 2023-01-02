import {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
} from "react";

import { Nullable, Weather } from "../../types";
import { useWeatherAPI, useDebounce } from "../../hooks";

type WeatherValue = {
  searchTerm: string
  setSearchTerm: (_: string) => void
  weatherList: Weather[]
  setWeatherList: (_: Weather[]) => void
  isLoading: boolean
  failure: Nullable<Error>
  selectedDate: string
  setSelectedDate: (_: string) => void
}

const initialValue: WeatherValue = {
  searchTerm: "london",
  setSearchTerm: (_: string) => { },
  weatherList: [],
  setWeatherList: (_: Weather[]) => { },
  isLoading: false,
  failure: null,
  selectedDate: "",
  setSelectedDate: (_: string) => { }
}

const WeatherContext = createContext(initialValue)

export const WeatherProvider = (props: PropsWithChildren) => {
  const {
    searchTerm: initialSearchTerm,
    selectedDate: initialSelectedDate,
    weatherList: initialShowList,
    isLoading: initialIsLoading,
    failure: initialFailure
  } = initialValue

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [weatherList, setWeatherList] = useState<Weather[]>(initialShowList)
  const [isLoading, setIsLoading] = useState(initialIsLoading)
  const [failure, setFailure] = useState<Nullable<Error>>(initialFailure)
  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 300)
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate)

  const updateSearchTerm = (searchTerm: string) => {
    setWeatherList([])
    setIsLoading(true)
    setSearchTerm(searchTerm)
  }

  const { data, error, loading } = useWeatherAPI(debouncedSearchTerm)

  useLayoutEffect(() => {
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
    failure,
    selectedDate,
    setSelectedDate
  }

  const { children } = props
  const { Provider } = WeatherContext

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useWeather = () => useContext(WeatherContext);