import { useSettings } from "../../../providers"
import { Cellphone } from "./cellphone"
import { Desktop } from "./desktop"
import { Laptop } from "./laptop"
import { Tablet } from "./tablet"

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
  const { showBreakpoints } = useSettings()
  return (
    <footer className="flex items-center justify-end px-6 cursor-pointer bg-secondary-700 text-secondary-700">
      {showBreakpoints ? <Devices /> : null}
      {showBreakpoints ? <Breakpoints /> : null}
    </footer>
  )
}
