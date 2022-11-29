import { Broke } from "../images"
import { Message } from "./message"

export const NoServer = () => {
  return (
    <Message title="Oh dear!" subtitle="internet broken">
      <Broke className="w-3/4 flex-grow h-auto" />
    </Message>
  )
}

