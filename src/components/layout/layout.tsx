import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => (
  <Fragment>
    <Header />
    <main className="bg-secondary-300 overflow-scroll py-8">
      <section className="flex flex-col mx-auto pt-2 max-w-screen-2xl">
        <Outlet />
      </section>
    </main>
    <Footer />
  </Fragment>
)