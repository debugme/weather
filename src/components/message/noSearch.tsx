import { Begin } from "../images"
import { Message } from "./message"

export const NoSearch = () => {
  return (
    <Message title="Let's go!" subtitle="Check the weather">
      <Begin className="w-full flex-grow h-auto" />
    </Message>
  )
}