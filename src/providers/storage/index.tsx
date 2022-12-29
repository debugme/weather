import {
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

import { Nullable } from "../../types";

type StorageValue = {
  setItem: (key: string, value: string) => void
  getItem: (key: string) => Nullable<string>
  removeItem: (key: string) => void
}

const initialValue: StorageValue = {
  setItem: (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },
  getItem: (key) => {
    const stringified = window.sessionStorage.getItem(key)
    if (!stringified)
      return null
    const value = JSON.parse(stringified)
    return value
  },
  removeItem: (key) => {
    window.sessionStorage.removeItem(key)
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