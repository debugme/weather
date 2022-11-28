import { Broke } from "../images"
import { Message } from "./message"

export const NoServer = () => {
  return (
    <Message title="Oh gosh!" subtitle="We're broke">
      <Broke className="w-3/4 flex-grow h-auto" />
    </Message>
  )
}

