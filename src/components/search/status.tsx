import { FC, Fragment } from "react";

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

  if (isLoading)
    return null

  const message = !window.navigator.onLine
    ? <NoServer />
    : searchTerm.length === 0
    ? <NoSearch />
    : resultCount === 0
    ? <NoResult />
    : failure
    ? <NoSearch />
    : null

  return (
    <Fragment>
      <h2 className="block text-3xl text-secondary-600 mt-10">Status</h2>
      {message}
    </Fragment>
  )

}

