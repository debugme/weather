import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut as _signOut } from "firebase/auth"

import { noop, Nullable } from "../../types"
import { useStorage } from "../storage"

// ------------------------------------------------------------------------------------------

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
// ------------------------------------------------------------------------------------------




type UserProfile = {
  displayName: string
  photoURL: string
}

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
  const { getItem, setItem, removeItem } = useStorage()
  const savedUserProfile = getItem("userProfile")
  const initialUserProfile = savedUserProfile ? JSON.parse(savedUserProfile) : null
  const [userProfile, setUserProfile] = useState<Nullable<UserProfile>>(initialUserProfile)
  const navigate = useNavigate()

  console.log("[reload] user is ", userProfile);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log("[AuthStateChanged] user is ", user);
      if (user) {
        const { displayName, photoURL } = user
        const userProfile = { displayName: displayName!, photoURL: photoURL! }
        setItem("userProfile", JSON.stringify(userProfile))
        setUserProfile(userProfile)
        navigate("/")
      }
    })
    return unsubscribe
  }, [])

  const signIn = async () => {
    try {
      
      const userCredential = await signInWithPopup(auth, provider)
      const { user } = userCredential
      console.log("[sign-in] user was ", user);
      const { displayName, photoURL } = user
      const userProfile = { displayName: displayName!, photoURL: photoURL! }
      setItem("userProfile", JSON.stringify(userProfile))
      setUserProfile(userProfile)
    } catch (error) {
      console.log("[sign-in] error was ", error);
    }
  }

  const signOut = async () => {
    try {
      await _signOut(auth)
      console.log("[sign-out] log out was successful");
      setUserProfile(null)
      removeItem("userProfile")
    } catch (error) {
      console.log("[sign-out] error was ", error);
    }
  }

  const { children } = props
  const { Provider } = SecurityContext
  const value = { isSignedIn: !!userProfile, userProfile, signIn, signOut }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useSecurity = () => useContext(SecurityContext);