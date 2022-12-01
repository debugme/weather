import { Empty } from "../images"
import { Message } from "./message"

export const NoResult = () => {
  return (
    <Message title="No results!" subtitle="Try again">
      <Empty className="flex-grow w-full h-auto" />
    </Message>
  )
}