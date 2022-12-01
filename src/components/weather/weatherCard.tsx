import { FC } from "react"

import { Weather } from "../../types"

export const WeatherCard: FC<Weather> = (props) => {
  const { time, image, description, temperature, sunrise, sunset, wind } = props

  return (
    <article className="border-none rounded-lg bg-secondary-50">
      <section className="flex items-center justify-between h-24 pl-4 rounded-t-lg bg-gradient-to-r from-primary-300 to-primary-400">
        <span className="text-secondary-600">
          <h2 className="text-2xl">{time}</h2>
          <h4 className="text-lg">{description}</h4>
        </span>
        <img className="w-24 h-24" src={image} />
      </section>
      <section className="p-4 rounded-b-lg bg-secondary-200 text-md">
        <div className="flex items-center justify-between py-1">
          <h6>temperature</h6>
          <p>{temperature}</p>
        </div>
        <div className="flex justify-between py-1">
          <h6>wind</h6>
          <p>{wind}</p>
        </div>
        <div className="flex justify-between py-1">
          <h6>sunrise</h6>
          <p>{sunrise}</p>
        </div>
        <div className="flex justify-between py-1">
          <h6>sunset</h6>
          <p>{sunset}</p>
        </div>
      </section>
    </article>
  )
}
