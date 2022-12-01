import { Begin } from "../images"
import { Message } from "./message"

export const NoSearch = () => {
  return (
    <Message title="Let's go!" subtitle="Check weather">
      <Begin className="flex-grow w-full h-auto" />
    </Message>
  )
}