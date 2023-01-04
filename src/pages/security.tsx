import { ChangeEventHandler, useState } from "react"
import { Navigate } from "react-router-dom"

import { useLocales, useSecurity } from "../providers"
import { isValidEmail } from "../utilities"

export const Security = () => {
  const { t } = useLocales()
  const { isSignedIn, signIn } = useSecurity()
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(false)

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const email = event.target.value.trim()
    setIsValid(isValidEmail(email))
    setEmail(email)
  }

  if (isSignedIn)
    return <Navigate to="/" replace />

  return (
    <section className="flex flex-col w-3/4 mx-auto">
      <h2 className="text-3xl text-secondary-400 capitalize">{t("signIn")}</h2>
      <form className="flex flex-col py-4 w-72 text-sm" onSubmit={signIn}>
        <label htmlFor="email" className="text-secondary-400 pt-2 pb-4 text-sm">{t("typeEmail")}</label>
        <input
          className="py-3 px-4 rounded-lg"
          id="email"
          type="email"
          value={email}
          onChange={onChange} />
        <button
          disabled={!isValid}
          className={`capitalize mt-4 py-3 px-4 rounded-lg text-sm text-white ${ isValid ? "bg-primary-600 cursor-pointer" : "bg-secondary-600 cursor-not-allowed"} `}
          type="submit">{t("getCode")}</button>
      </form>
    </section>
  )
}

