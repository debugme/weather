import { ChangeEventHandler, FC } from "react";
import { useLanguages } from "../../providers";

export type FieldProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Field: FC<FieldProps> = (props) => {
  const { value, onChange } = props
  const { t } = useLanguages()
  return (
    <input
      id="searchBox"
      className="w-full py-4 border-none rounded-lg lg:rounded-b-lg lg:rounded-t-none text-secondary-800 placeholder-secondary-600 selection:text-primary-800 selection:bg-primary-300 bg-secondary-400 pl-11 outline-secondary-400 focus:outline-white"
      type="search"
      placeholder={t("typeCity")}
      title={t("typeCity")}
      value={value}
      onChange={onChange}
      tabIndex={0}
    />
  )
}