import { useEffect, useState } from "react";

import { LocationInfo, Nullable, Weather, WeatherInfo } from "../types";
import { getDateFormatter, getTimeFormatter, getCountryName } from "../utilities";

const buildWeatherList = (weatherInfo: Nullable<WeatherInfo>, locationInfo: LocationInfo) => {
  if (!weatherInfo)
    return []

  const { list, city } = weatherInfo
  const { country, name } = locationInfo
  const countryName = getCountryName(country)
  const dateFormatter = getDateFormatter()
  const timeFormatter = getTimeFormatter(country)
  const sunrise = timeFormatter.format(new Date(city.sunrise * 1000))
  const sunset = timeFormatter.format(new Date(city.sunset * 1000))

  const weatherList: Weather[] = list.map(item => {
    const { dt_txt, main: { temp }, weather: [first], wind: { speed } } = item
    const { description, icon } = first
    const temperature = `${temp}℃`
    const timestamp = new Date(dt_txt)
    const date = dateFormatter.format(timestamp)
    const time = timeFormatter.format(timestamp)
    const image = `https://openweathermap.org/img/wn/${icon}@2x.png`
    const wind = `${speed} mph`
    const weather = { date, time, image, temperature, description, sunrise, sunset, wind, city: name, country: countryName }
    return weather
  })
  
  return weatherList
}

const getLocationInfo = async (searchTerm: string, appId: string) => {
  const directEndpoint = "http://api.openweathermap.org/geo/1.0/direct"
  const directQuery = `q=${encodeURIComponent(searchTerm)}`
  const directUrl = `${directEndpoint}?${directQuery}&${appId}`
  const directResponse = await fetch(directUrl)
  const list: LocationInfo[] = await directResponse.json()
  console.log(list);
  
  return list[0]
}

const getWeatherInfo = async (locationInfo: LocationInfo, signal: AbortSignal, appId: string) => {
  const { lat, lon } = locationInfo
  const forecastEndpoint = "https://api.openweathermap.org/data/2.5/forecast"
  const latitude = `lat=${lat}`
  const longitude = `lon=${lon}`
  const exclude = "current, minutely,hourly,alerts"
  const units = "units=metric"
  const forecastUrl = `${forecastEndpoint}?${latitude}&${longitude}&${exclude}&${units}&${appId}`
  const forecastResponse = await fetch(forecastUrl, { signal })
  const info: WeatherInfo = await forecastResponse.json()
  return info
}

export const useWeatherAPI = (searchTerm: string) => {
  const appId = `appid=${import.meta.env.VITE_APP_ID}`
  const [data, setData] = useState<Nullable<Weather[]>>([])
  const [error, setError] = useState<Nullable<Error>>()
  const [loading, setLoading] = useState<boolean>(false)

  const controller = new AbortController()
  const cleanUp = () => controller.abort()
  const { signal } = controller

  const fetcher = async () => {
    try {
      setData([])
      setError(null)
      setLoading(true)
      const locationInfo = await getLocationInfo(searchTerm, appId)
      const weatherInfo = await getWeatherInfo(locationInfo, signal, appId)
      const data = buildWeatherList(weatherInfo, locationInfo)
      setData(data)
    } catch (error) {
      setError(Error(String(error)))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (searchTerm) {
      fetcher()
      return cleanUp
    } else {
      setData([])
      setError(null)
    }
  }, [searchTerm])

  const response = { data, error, loading }
  return response
}