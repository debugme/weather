import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
} from "react";
import { Nullable } from "../../types";

export type StorageType = object | string | boolean

export type Normalizer = (id: string) => Nullable<object>

export type StorageValue = {
  setItem: (key: string, value: StorageType) => void
  getItem: (key: string, normalizer?: Normalizer) => Nullable<StorageType>
}

const initialValue: StorageValue = {
  setItem: (key, value) => {
    const stringified = JSON.stringify(value)
    window.sessionStorage.setItem(key, stringified)
  },
  getItem: (key, normalizer) => {
    const stringified = window.sessionStorage.getItem(key)
    if (!stringified)
      return null
    const value = JSON.parse(stringified)
    if (normalizer)
      return normalizer(value)
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