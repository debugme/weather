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
      className="w-full py-4 border-none rounded-b-lg text-secondary-600 placeholder-secondary-400 selection:text-primary-800 selection:bg-primary-300 bg-secondary-50 pl-11 outline-secondary-400"
      type="search"
      placeholder="Search weather"
      title="Search weather"
      value={value}
      onChange={onChange}
    />
  )
}