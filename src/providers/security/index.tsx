import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut as _signOut } from "firebase/auth"

import { noop } from "../../types"
import { useStorage } from "../storage"

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_FIREBASE_APP_ID}`,
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const provider = new GithubAuthProvider()

type SecurityValue = {
  isSignedIn: boolean
  signIn: () => void,
  signOut: () => void
}

const initialValue: SecurityValue = {
  isSignedIn: false,
  signIn: noop,
  signOut: noop
}

const SecurityContext = createContext(initialValue)

export const SecurityProvider = (props: PropsWithChildren) => {
  const navigate = useNavigate()
  const { getItem, setItem, removeItem } = useStorage()
  const savedUserId = getItem("savedUserId")
  const initialUserId = savedUserId || null
  const [userId, setUserId] = useState(initialUserId)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUserId(user.uid)
        navigate("/")
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (userId)
      setItem("userId", userId)
    else
      removeItem("userId")
  }, [userId])

  const signIn = async () => {
    try {

      const userCredential = await signInWithPopup(auth, provider)
      const { user } = userCredential
      setUserId(user.uid)
    } catch (error) {
      console.log("[sign-in] error was ", error);
    }
  }

  const signOut = async () => {
    try {
      await _signOut(auth)
      setUserId(null)
    } catch (error) {
      console.log("[sign-out] error was ", error);
    }
  }

  const { children } = props
  const { Provider } = SecurityContext
  const value = { isSignedIn: !!userId, userId, signIn, signOut }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useSecurity = () => useContext(SecurityContext);