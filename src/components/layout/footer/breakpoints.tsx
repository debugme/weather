import { Cellphone } from "./cellphone"
import { Desktop } from "./desktop"
import { Laptop } from "./laptop"
import { Tablet } from "./tablet"

export const Breakpoints = () => {
  return (
    <section className="flex cursor-pointer text-secondary-500">
      <figure className="flex xl:text-primary-600" title="1280px - ∞">
        <Desktop className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex lg:text-primary-600 xl:text-secondary-500" title="1024px - 1279px">
        <Laptop className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex md:text-primary-600 lg:text-secondary-500" title="768px - 1023px">
        <Tablet className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex text-primary-600 md:text-secondary-500" title="0px - 767px">
        <Cellphone className="w-6 h-6 ml-2" />
      </figure>
    </section>
  )
}