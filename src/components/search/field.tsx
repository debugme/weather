import { ChangeEventHandler } from "react";
import { useLanguages } from "../../providers";
import { titlecase } from "../../utilities";

export type FieldProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Field = (props: FieldProps) => {
  const { value, onChange } = props
  const { t } = useLanguages()

  const text = titlecase(t("typeCity"))

  return (
    <input
      id="searchBox"
      className="w-full py-4 border-none rounded-lg lg:rounded-b-lg lg:rounded-t-none text-secondary-800 placeholder-secondary-600 selection:text-primary-800 selection:bg-primary-300 bg-secondary-400 pl-11 outline-secondary-400 focus:outline-white"
      type="search"
      placeholder={text}
      title={text}
      value={value}
      onChange={onChange}
      tabIndex={0}
    />
  )
}