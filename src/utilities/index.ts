import countries from './data.json'

type Countries = Record<string, { countryName: string; timeZone: string }>

export const getDateFormatter = (countryCode?: string) => {
	const { timeZone } = (countries as Countries)[countryCode || 'GB']
	const dateOptions: Intl.DateTimeFormatOptions = {
		dateStyle: 'medium',
		timeZone,
	}
	const locale = 'en-UK'
	const dateFormatter = new Intl.DateTimeFormat(locale, dateOptions)
	return dateFormatter
}

export const getTimeFormatter = (
	countryCode: string,
	timeStyle?: 'full' | 'long' | 'medium' | 'short',
) => {
	const { timeZone } = (countries as Countries)[countryCode]
	const timeOptions: Intl.DateTimeFormatOptions = {
		timeStyle: timeStyle || 'short',
		timeZone,
	}
	const locale = 'en-UK'
	const timeFormatter = new Intl.DateTimeFormat(locale, timeOptions)
	return timeFormatter
}

export const getCountryName = (countryCode: string) => {
	const { countryName } = (countries as Countries)[countryCode]
	return countryName
}

export const titlecase = (text: string) => {
	const [firstletter, ...remainder] = text
	const titleCased = firstletter.toLocaleUpperCase() + remainder.join('')
	return titleCased
}

export const isValidEmail = (email: string) => {
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return emailRegex.test(email)
}
