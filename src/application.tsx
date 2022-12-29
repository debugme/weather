import { Fragment, PropsWithChildren } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { useSecurity } from "./providers"
import { Layout } from "./components"
import { Home, Settings, Security } from "./pages"

const SecureRoute = (props: PropsWithChildren) => {
  const { userProfile } = useSecurity()
  const { children } = props
  if (userProfile)
    return <Fragment>{children}</Fragment>
  else
    return <Navigate to="/security" replace />
}

export const Application = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/security" element={<Security />} />
        <Route path="/" element={<SecureRoute><Home /></SecureRoute>} />
        <Route path="/settings" element={<SecureRoute><Settings /></SecureRoute>} />
      </Routes>
    </Layout>
  )
}