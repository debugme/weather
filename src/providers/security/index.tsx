import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

type UserProfile = {
  displayName: string
  photoURL: string
}

type Nullable<T> = T | null
type SecurityValue = { userProfile: Nullable<UserProfile>, logIn: () => void, logOut: () => void }
const initialValue: SecurityValue = { userProfile: null, logIn: () => { }, logOut: () => { } }

const SecurityContext = createContext(initialValue)

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

export const SecurityProvider = (props: PropsWithChildren) => {
  const { userProfile: _userProfile } = initialValue

  const savedUserProfile = window.sessionStorage.getItem("userProfile")
  const initialUserProfile = savedUserProfile ? JSON.parse(savedUserProfile) : _userProfile
  const [userProfile, setUserProfile] = useState(initialUserProfile)
  const navigate = useNavigate()

  console.log("[reload] user is ", userProfile);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log("[AuthStateChanged] user is ", user);
      if (user) {
        const { displayName, photoURL } = user
        const userProfile = { displayName: displayName!, photoURL: photoURL! }
        window.sessionStorage.setItem("userProfile", JSON.stringify(userProfile))
        setUserProfile(userProfile)
        navigate("/")
      }
    })
    return unsubscribe
  }, [])


  const logOut = async () => {
    try {
      await signOut(auth)
      console.log("[sign-out] log out was successful");
      setUserProfile(null)
      window.sessionStorage.removeItem("userProfile")
    } catch (error) {
      console.log("[sign-out] error was ", error);
    }
  }

  const logIn = async () => {
    try {
      const provider = new GithubAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const { user } = userCredential
      console.log("[sign-in] user was ", user);
      const { displayName, photoURL } = user
      const userProfile = { displayName: displayName!, photoURL: photoURL! }
      window.sessionStorage.setItem("userProfile", JSON.stringify(userProfile))
      setUserProfile(userProfile)
    } catch (error) {
      console.log("[sign-in] error was ", error);
    }
  }

  const { children } = props
  const { Provider } = SecurityContext
  const value = { userProfile, logIn, logOut }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useSecurity = () => useContext(SecurityContext);