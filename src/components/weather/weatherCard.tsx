import { FC } from "react"

import { Weather } from "../../types"

export const WeatherCard: FC<Weather> = (props) => {
  const { time, image, description, temperature, sunrise, sunset, wind } = props

  return (
    <article className="border-none rounded-lg bg-secondary-50">
      <section className="flex items-center justify-between h-24 pl-4 rounded-t-lg bg-primary-500">
        <span className="text-secondary-700">
          <h4 className="text-3xl">{time}</h4>
          <p className="text-md pl-[2px]">{description}</p>
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
