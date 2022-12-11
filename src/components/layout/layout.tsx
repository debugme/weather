import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => (
  <Fragment>
    <Header />
    <main className="py-8 overflow-scroll bg-secondary-700">
      <section className="flex flex-col pt-2 mx-auto max-w-screen-2xl">
        <Outlet />
      </section>
    </main>
    <Footer />
  </Fragment>
)