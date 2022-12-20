import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
} from "react";

import { StorageValue } from "../../types";

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

export const StorageProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const { Provider } = StorageContext

  return (
    <Provider value={initialValue}>{children}</Provider>
  )
}

export const useStorage = () => useContext(StorageContext);