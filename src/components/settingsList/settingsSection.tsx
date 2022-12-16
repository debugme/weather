import { FC, PropsWithChildren } from "react"

export type SettingsSectionProps = PropsWithChildren & {
  title: string
  subtitle: string
}

export const SettingsSection: FC<SettingsSectionProps> = (props) => {
  const { title, subtitle, children } = props
  return (
    <section className="flex flex-col pb-4 px-4 mt-4 rounded-lg bg-secondary-600 max-w-[480px]">
      <span className="py-3 text-secondary-300 rounded-lg">{title}</span>
      <p className="text-secondary-400 pb-4 text-sm">{subtitle}</p>
      {children}
    </section>
  )
}