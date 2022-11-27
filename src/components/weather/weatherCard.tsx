import { FC } from "react"

import { Weather } from "../../types"

export const WeatherCard: FC<Weather> = (props) => {
  const { date, time, image, description, temperature, sunrise, sunset } = props

  return (
    <article className="rounded-lg border bg-secondary-200 px-4 py-2">
      <figure>
        <img className="bg-primary-400 rounded-full w-16 h-16" src={image} />
        <figcaption className="text-xl mt-4">{description}</figcaption>
      </figure>
      <section>{temperature}</section>
      <section>{date}</section>
      <section>{time}</section>
      <section>{sunrise}</section>
      <section>{sunset}</section>
    </article>
  )
}
