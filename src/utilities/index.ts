import countries from "./data.json"

const locale = "en-UK"
const dateOptions: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }
const dateFormatter = new Intl.DateTimeFormat(locale, dateOptions)

type Countries = Record<string, { countryName: string, timeZone: string }>

export const getDateFormatter = () => {
  return dateFormatter
}

export const getTimeFormatter = (countryCode: string) => {
  const { timeZone } = (countries as Countries)[countryCode]
  const timeOptions: Intl.DateTimeFormatOptions = { timeStyle: 'short', timeZone }
  const timeFormatter = new Intl.DateTimeFormat(locale, timeOptions)  
  return timeFormatter
}

export const getCountryName = (countryCode: string) => {
  const { countryName } = (countries as Countries)[countryCode]
  return countryName
}
