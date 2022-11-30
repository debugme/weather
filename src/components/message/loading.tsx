import { Loader } from "../images"
import { Message } from "./message"

export const Loading = () => {
  return (
    <Message title="Searching..." subtitle="Please wait">
      <Loader className="w-full flex-grow h-auto" />
    </Message>
  )
}