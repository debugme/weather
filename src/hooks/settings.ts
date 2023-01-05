import {
	collection,
	doc,
	DocumentData,
	DocumentSnapshot,
	getDoc,
	onSnapshot,
	setDoc,
	updateDoc,
} from 'firebase/firestore'
import { useLayoutEffect, useState } from 'react'
import { firestore, useAuth } from './firebase'

type DatabaseOptions<T> = {
	values: T
	name: string
}

export const useDatabase = <T>(options: DatabaseOptions<T>) => {
	const { values: initialValues, name } = options
	const [values, setValues] = useState<T>(initialValues)
	const { user } = useAuth()

	useLayoutEffect(() => {
		if (!user) return

		const documentId = user.email!
		const documentReference = doc(firestore, name, documentId)

		const updateSettings = (documentSnapshot: DocumentSnapshot) => {
			const settings = documentSnapshot.data() as T
			setValues(settings)
		}

		onSnapshot(documentReference, updateSettings)

		const getSettings = async () => {
			let documentSnapshot = await getDoc(documentReference)
			if (!documentSnapshot.exists()) {
				const collectionsReference = collection(firestore, name)
				const documentReference = doc(collectionsReference, documentId)
				await setDoc(documentReference, initialValues as DocumentData)
			}
			documentSnapshot = await getDoc(documentReference)
			updateSettings(documentSnapshot)
		}

		getSettings()
	}, [user])

	useLayoutEffect(() => {
		const updateSettingsForUser = async () => {
			if (!user) return
			const documentId = user.email!
			const documentReference = doc(firestore, 'settings', documentId)
			await updateDoc(documentReference, values as DocumentData)
		}

		updateSettingsForUser()
	}, [values])

	return { values, setValues }
}

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
