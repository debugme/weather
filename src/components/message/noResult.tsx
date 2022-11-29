import { Empty } from "../images"
import { Message } from "./message"

export const NoResult = () => {
  return (
    <Message title="No luck!" subtitle="Try again">
      <Empty className="w-full flex-grow h-auto" />
    </Message>
  )
}