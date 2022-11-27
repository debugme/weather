export type Nullable<T> = T | null

export type ResponseValue = {
  isLoading: boolean
  failure: Nullable<Error>
}

export type WeatherValue = ResponseValue & {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  weatherList: Weather[]
  setWeatherList: (weatherList: Weather[]) => void
}

export type WeatherInfo = {
  list: [
    {
      main: {
        temp: number
      },
      weather: [{
        description: string,
        icon: string
      }],
      dt_txt: string
    }
  ],
  city: {
    sunrise: number,
    sunset: number
  },
}

export type Weather = {
  date: string
  time: string
  image: string
  temperature: string
  description: String
  sunrise: string
  sunset: string
}

export type LocationInfo = {
  name: string
  lat: number
  lon: number
  country: string
  state: string
}