import { Fragment, PropsWithChildren } from "react";

import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <Fragment>
      <Header />
      <main className="py-8 overflow-scroll bg-gradient-to-tr from-secondary-800 via-secondary-700 to-secondary-600">
        <section className="flex flex-col pt-2 mx-auto max-w-screen-2xl">
          {children}
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}