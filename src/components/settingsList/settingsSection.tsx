import { FC, PropsWithChildren } from "react"

export type SettingsSectionProps = PropsWithChildren & {
  title: string
  subtitle: string
}

export const SettingsSection: FC<SettingsSectionProps> = (props) => {
  const { title, subtitle, children } = props
  return (
    <section className="flex flex-col pb-4 px-4 mt-4 rounded-lg bg-secondary-600 max-w-[480px]" role="menuitem">
      <div className="mt-8"></div>
      <h3 className="text-secondary-300 capitalize">{title}</h3>
      <p className="text-secondary-400 pt-2 pb-4 text-sm">{subtitle}</p>
      {children}
    </section>
  )
}