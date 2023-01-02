import { onAuthStateChanged, signInWithPopup, signOut as _signOut, User } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Nullable } from "../types"
import { auth, provider } from "./firebase"

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