import { useDatabase } from './services'

type Settings = {
	handle: string
	avatar: string
	theme: string
	locale: string
	breakpoints: boolean
}

const defaultSettings: Settings = {
	handle: '',
	avatar: '',
	theme: 'slate',
	locale: 'english',
	breakpoints: false,
}

export const useSettings = () => {
	const options = { values: defaultSettings, name: 'settings' }
	const { values, setValues } = useDatabase<Settings>(options)

	const setHandle = (handle: string) => setValues({ ...values, handle })
	const setAvatar = (avatar: string) => setValues({ ...values, avatar })
	const setTheme = (theme: string) => setValues({ ...values, theme })
	const setLocale = (locale: string) => setValues({ ...values, locale })
	const setBreakpoints = (breakpoints: boolean) =>
		setValues({ ...values, breakpoints })

	return {
		settings: values,
		setHandle,
		setAvatar,
		setTheme,
		setLocale,
		setBreakpoints,
	}
}
