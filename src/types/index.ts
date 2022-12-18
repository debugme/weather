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
      wind: {
        speed: number
      }
      dt_txt: string
    }
  ],
  city: {
    sunrise: number,
    sunset: number
  }
}

export type Weather = {
  date: string
  time: string
  image: string
  temperature: string
  description: string
  sunrise: string
  sunset: string
  wind: string
  city: string
  country: string
  countryCode: string
  latitude: number
  longitude: number
}

export type LocationInfo = {
  name: string
  lat: number
  lon: number
  country: string
  state: string
}

export type SelectorInfo = {
  id: string
  data: JSX.Element
}

export type SettingsValue = {
  handle: string
  setHandle: (_: string) => void
  languageInfo: SelectorInfo
  setLanguageInfo: (_: string) => void
  languageInfoList: SelectorInfo[]
  t: (_: string) => string
  showBreakpoints: boolean
  toggleBreakpoints: () => void
}

export type AvatarSettingsValue = {
  avatarInfo: SelectorInfo
  setAvatarInfo: (_: string) => void
  avatarInfoList: SelectorInfo[]
}

export type ThemesValue = {
  themeInfo: SelectorInfo
  setThemeInfo: (_: string) => void
  themeInfoList: SelectorInfo[]
}