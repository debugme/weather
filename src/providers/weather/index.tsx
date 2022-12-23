import {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";

import { Nullable, Weather } from "../../types";
import { useWeatherAPI, useDebounce } from "../../hooks";
import { useStorage } from "../storage";

export type WeatherValue = {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  weatherList: Weather[]
  setWeatherList: (weatherList: Weather[]) => void
  isLoading: boolean
  failure: Nullable<Error>
}

const initialValue: WeatherValue = {
  searchTerm: "london",
  setSearchTerm: (_: string) => { },
  weatherList: [],
  setWeatherList: (_: Weather[]) => { },
  isLoading: false,
  failure: null
}

const WeatherContext = createContext(initialValue)

export const WeatherProvider: FC<PropsWithChildren> = (props) => {
  const { getItem, setItem } = useStorage()

  const savedSearchTerm = getItem("searchTerm") as string
  const { searchTerm: _searchTerm } = initialValue
  const initialSearchTerm = savedSearchTerm || _searchTerm

  const {
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

  useEffect(() => setItem("searchTerm", searchTerm), [searchTerm])

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