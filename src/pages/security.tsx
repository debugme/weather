import { Navigate } from "react-router-dom"
import { useSecurity } from "../providers"

export const Security = () => {
  const { userProfile, logIn } = useSecurity()

  if (userProfile)
    return <Navigate to="/" replace /> 

  return (
    <section className="flex flex-col w-3/4 mx-auto">
      <h2 className="text-3xl text-secondary-400 capitalize">Sign In</h2>
      <button onClick={logIn}>Sign In</button>
    </section>
  )
}