import { initializeApp } from 'firebase/app'
import {
	getAuth,
	GithubAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut as _signOut,
	User,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getBlob, getStorage, ref } from 'firebase/storage'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Nullable } from '../types'

const firebaseConfig = {
	apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
	authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
	projectId: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
	storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
	messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
	appId: `${import.meta.env.VITE_FIREBASE_APP_ID}`,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GithubAuthProvider()
const firestore = getFirestore(app)
const storage = getStorage(app)

export { auth, provider, firestore, storage }

export const useStorage = <T>(path: string) => {
	const [data, setData] = useState<T>()

	useEffect(() => {
		const downloadData = async () => {
			const pathReference = ref(storage, `${path}.json`)
			const blob = await getBlob(pathReference)
			const text = await blob.text()
			const data = JSON.parse(text) as T
			setData(data)
		}

		downloadData()
	}, [path])

	return data
}

type AuthOptions = {
	onSignIn?: () => void
}

export const useAuth = (options?: AuthOptions) => {
	const [user, setUser] = useState<Nullable<User>>(null)
	const [error, setError] = useState<Nullable<unknown>>(null)

	useLayoutEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) return
			setUser(user)
			options?.onSignIn?.()
		})
		return unsubscribe
	}, [])

	const signIn = async () => {
		try {
			const userCredential = await signInWithPopup(auth, provider)
			setUser(userCredential.user)
		} catch (error) {
			setError(error)
		}
	}

	const signOut = async () => {
		try {
			await _signOut(auth)
			setUser(null)
		} catch (error) {
			setError(error)
		}
	}

	return { user, signIn, signOut, isSignedIn: Boolean(user), error }
}
