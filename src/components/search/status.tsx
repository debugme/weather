import { FC } from "react";

import { Nullable } from "../../types";
import { NoResult, NoSearch, NoServer } from "..";

export type StatusProps = {
  searchTerm: string;
  isLoading: boolean
  failure: Nullable<Error>
  resultCount: number
}

export const Status: FC<StatusProps> = (props) => {
  const { failure, isLoading, searchTerm, resultCount } = props

  if (!window.navigator.onLine)
    return <NoServer />

  if (isLoading)
    return null

  if (searchTerm.length === 0)
    return <NoSearch />

  if (failure)
    return <NoSearch />

  if (resultCount === 0)
    return <NoResult />

  return null
}

