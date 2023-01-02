import { initializeApp } from "firebase/app"
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut as _signOut, User } from "firebase/auth"
import { getFirestore, doc, getDoc, addDoc, collection, updateDoc, setDoc, onSnapshot, DocumentSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nullable } from "../types";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_FIREBASE_APP_ID}`,
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GithubAuthProvider()
const firestore = getFirestore(app)

export const useAuth = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<Nullable<User>>()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        navigate("/")
      }
    })
    return unsubscribe
  }, [])

  const signIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider)
      setUser(userCredential.user)
    } catch (error) {
      console.log("[sign-in] error was ", error);
    }
  }

  const signOut = async () => {
    try {
      await _signOut(auth)
      setUser(null)
    } catch (error) {
      console.log("[sign-out] error was ", error);
    }
  }

  return { user, signIn, signOut, isSignedIn: Boolean(user) }
}

type Settings = {
  handle: string
  avatar: string
  theme: string
  locale: string
  breakpoints: boolean
}

const defaultSettings = {
  handle: "",
  avatar: "",
  theme: "slate",
  locale: "english",
  breakpoints: false
}

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const { user } = useAuth()

  useEffect(() => {
    if (!user)
      return

    const documentId = user.email!
    const documentReference = doc(firestore, "settings", documentId)

    const updateSettings = (documentSnapshot: DocumentSnapshot) => {
      const settings = documentSnapshot.data() as Settings
      setSettings(settings)
    }

    onSnapshot(documentReference, updateSettings)

    const getSettings = async () => {
      let documentSnapshot = await getDoc(documentReference)
      if (!documentSnapshot.exists()) {
        const collectionsReference = collection(firestore, "settings")
        const documentReference = doc(collectionsReference, documentId)
        await setDoc(documentReference, defaultSettings);
      }
      documentSnapshot = await getDoc(documentReference)
      updateSettings(documentSnapshot)
    }

    getSettings()
  }, [user])

  useEffect(() => {    
    const updateSettingsForUser = async () => {
      if (!user)
        return
      const documentId = user.email!
      const documentReference = doc(firestore, "settings", documentId)
      await updateDoc(documentReference, settings)
    }

    updateSettingsForUser()
  }, [settings])


  const setHandle = (handle: string) => setSettings({ ...settings, handle })
  const setAvatar = (avatar: string) => setSettings({ ...settings, avatar })
  const setTheme = (theme: string) => setSettings({ ...settings, theme })
  const setLocale = (locale: string) => setSettings({ ...settings, locale })
  const setBreakpoints = (breakpoints: boolean) => setSettings({ ...settings, breakpoints })


  return { settings, setHandle, setAvatar, setTheme, setLocale, setBreakpoints }
}
