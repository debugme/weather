import {
	collection,
	doc,
	DocumentSnapshot,
	getDoc,
	onSnapshot,
	setDoc,
	updateDoc,
} from 'firebase/firestore'
import { useLayoutEffect, useState } from 'react'
import { useAuth } from './auth'
import { firestore } from './firebase'

type Settings = {
	handle: string
	avatar: string
	theme: string
	locale: string
	breakpoints: boolean
}

const defaultSettings = {
	handle: '',
	avatar: '',
	theme: 'slate',
	locale: 'english',
	breakpoints: false,
}

export const useSettings = () => {
	const [settings, setSettings] = useState<Settings>(defaultSettings)
	const { user } = useAuth()

	useLayoutEffect(() => {
		if (!user) return

		const documentId = user.email!
		const documentReference = doc(firestore, 'settings', documentId)

		const updateSettings = (documentSnapshot: DocumentSnapshot) => {
			const settings = documentSnapshot.data() as Settings
			setSettings(settings)
		}

		onSnapshot(documentReference, updateSettings)

		const getSettings = async () => {
			let documentSnapshot = await getDoc(documentReference)
			if (!documentSnapshot.exists()) {
				const collectionsReference = collection(firestore, 'settings')
				const documentReference = doc(collectionsReference, documentId)
				await setDoc(documentReference, defaultSettings)
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
			await updateDoc(documentReference, settings)
		}

		updateSettingsForUser()
	}, [settings])

	const setHandle = (handle: string) => setSettings({ ...settings, handle })
	const setAvatar = (avatar: string) => setSettings({ ...settings, avatar })
	const setTheme = (theme: string) => setSettings({ ...settings, theme })
	const setLocale = (locale: string) => setSettings({ ...settings, locale })
	const setBreakpoints = (breakpoints: boolean) =>
		setSettings({ ...settings, breakpoints })

	return {
		settings,
		setHandle,
		setAvatar,
		setTheme,
		setLocale,
		setBreakpoints,
	}
}
