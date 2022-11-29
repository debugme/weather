import countries from "./countries.json"

const locale = "en-UK"
const dateOptions: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }
const dateFormatter = new Intl.DateTimeFormat(locale, dateOptions)

export const getDateFormatter = () => {
  return dateFormatter
}

export const getTimeFormatter = (country: string) => {
  const timeZone = (countries as Record<string, string>)[country]
  const timeOptions: Intl.DateTimeFormatOptions = { timeStyle: 'short', timeZone }
  const timeFormatter = new Intl.DateTimeFormat(locale, timeOptions)  
  return timeFormatter
}