import {
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

import { Nullable } from "../../types";

type StorageValue = {
  setItem: (key: string, value: string | boolean) => void
  getItem: (key: string) => Nullable<string | boolean>
}

const initialValue: StorageValue = {
  setItem: (key, value) => {
    const stringified = JSON.stringify(value)
    window.sessionStorage.setItem(key, stringified)
  },
  getItem: (key) => {
    const stringified = window.sessionStorage.getItem(key)
    if (!stringified)
      return null
    const value = JSON.parse(stringified)
    return value
  }
}

const StorageContext = createContext(initialValue)

export const StorageProvider = (props: PropsWithChildren) => {
  const { children } = props
  const { Provider } = StorageContext

  return (
    <Provider value={initialValue}>{children}</Provider>
  )
}

export const useStorage = () => useContext(StorageContext);