import { ChangeEventHandler, FC } from "react";

export type FieldProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Field: FC<FieldProps> = (props) => {
  const { value, onChange } = props
  return (
    <input
      id="searchBox"
      className="w-full py-4 border-none rounded-lg lg:rounded-b-lg lg:rounded-t-none text-secondary-600 placeholder-secondary-400 selection:text-primary-800 selection:bg-primary-300 bg-secondary-400 pl-11 outline-secondary-400"
      type="search"
      placeholder="Type in a city name"
      title="Type in a city name"
      value={value}
      onChange={onChange}
    />
  )
}