import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useStorage } from "../../storage"

type HandleValue = {
  handle: string
  setHandle: (_: string) => void
}

const initialValue: HandleValue = {
  handle: "Tom Grunge",
  setHandle: (_: string) => { }
}

const HandleContext = createContext(initialValue)

export const HandleProvider = (props: PropsWithChildren) => {
  const { getItem, setItem } = useStorage()
  const { handle: _handle } = initialValue
  const savedHandle = getItem("handle")
  const initialhandle = savedHandle || _handle
  const [handle, setHandle] = useState(initialhandle)

  useEffect(() => setItem("handle", handle), [handle])

  const { children } = props
  const { Provider } = HandleContext
  const value = { handle, setHandle }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useHandle = () => useContext(HandleContext);