import { Broke } from "../images"
import { Message } from "./message"

export const NoServer = () => {
  return (
    <Message title="Oh dear!" subtitle="internet broken">
      <Broke className="flex-grow w-3/4 h-auto" />
    </Message>
  )
}

