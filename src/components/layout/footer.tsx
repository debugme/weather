import { useMemo, useState } from "react"
import {
  Cellphone,
  Tablet,
  Laptop,
  Desktop
} from "../images"

export const Breakpoints = () => {
  return (
    <section className="flex cursor-pointer text-secondary-500">
      <figure className="flex xl:text-primary-600" title="desktop (1280px - ∞)">
        <Desktop className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex lg:text-primary-600 xl:text-secondary-500" title="laptop (1024px - 1279px)">
        <Laptop className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex md:text-primary-600 lg:text-secondary-500" title="tablet (768px - 1023px)">
        <Tablet className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex text-primary-600 md:text-secondary-500" title="cellphone (0px - 767px)">
        <Cellphone className="w-6 h-6 ml-2" />
      </figure>
    </section>
  )
}

export const Devices = () => {
  return (
    <section className="flex text-primary-600">
      <p className="md:hidden">Cellphone</p>
      <p className="hidden md:block lg:hidden">Tablet</p>
      <p className="hidden lg:block xl:hidden">Laptop</p>
      <p className="hidden xl:block">Desktop</p>
    </section>
  )
}

export const Footer = () => {
  const [showInfo, setShowInfo] = useState(true)

  const onClick = useMemo(() => () => setShowInfo(showInfo => !showInfo), [])

  return (
    <footer className="bg-secondary-700 text-secondary-700 flex justify-end items-center px-6 cursor-pointer" onClick={onClick} title="Click to toggle breakpoint information">
      {showInfo ? <Devices /> : null}
      {showInfo ? <Breakpoints /> : null}
    </footer>
  )
}
