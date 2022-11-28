import { FC } from "react"

import { Weather } from "../../types"

import { Sun, Moon } from "../images"

export const WeatherCard: FC<Weather> = (props) => {
  const { date, time, image, description, temperature, sunrise, sunset } = props

  return (
    <article className="w-full md:w-[280px] rounded-lg border bg-secondary-50 flex flex-col gap-4 py-8">

      <section className="flex gap-4 justify-between items-center px-4">
        <div className="text-2xl">{date}</div>
        <div className="text-xl">{time}</div>
      </section>

      <figure className="flex gap-4 justify-between items-center px-4">
        <section className="w-8 h-8 grid place-items-center">
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={image} />
            <span className="text-sm">Forecast</span>
          </span>
        </section>
        <figcaption className="text-sm">{description}</figcaption>
      </figure>

      <figure className="flex gap-4 justify-between items-center px-4">
        <section className="w-8 h-8 grid place-items-center">
          <span className="flex gap-2 items-center">
            <Sun className="w-6 h-6" />
            <span className="text-sm">Sunrise</span>
          </span>
        </section>
        <figcaption className="text-sm">{sunrise}</figcaption>
      </figure>

      <figure className="flex gap-4 justify-between items-center px-4">
        <section className="w-8 h-8 grid place-items-center">
          <span className="flex gap-2 items-center">
            <Moon className="w-6 h-6" />
            <span className="text-sm">Sunset</span>
          </span>
        </section>
        <figcaption className="text-sm">{sunset}</figcaption>
      </figure>

      <figure className="flex gap-4 justify-between items-center px-4">
        <section className="w-8 h-8 grid place-items-center">
          <span className="flex gap-2 items-center">
            <Sun className="w-6 h-6" />
            <span className="text-sm">Temperature</span>
          </span>
        </section>
        <figcaption className="text-sm">{temperature}</figcaption>
      </figure>

    </article>
  )
}
