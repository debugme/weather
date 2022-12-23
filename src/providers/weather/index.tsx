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

export const WeatherProvider: FC<PropsWithChildren> = (props) => {
  const { getItem, setItem } = useStorage()

  const savedSearchTerm = getItem("searchTerm") as string
  const { searchTerm: _searchTerm } = initialValue
  const initialSearchTerm = savedSearchTerm || _searchTerm


  const savedSelectedDate = getItem("selectedDate") as string
  const { selectedDate: _selectedDate } = initialValue
  const initialSelectedDate = savedSelectedDate || _selectedDate

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
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate)

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
  useEffect(() => setItem("selectedDate", selectedDate), [selectedDate])

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