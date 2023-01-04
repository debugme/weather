import { PropsWithChildren } from 'react'
import { titlecase } from '../../utilities'

export type SettingsSectionProps = PropsWithChildren & {
	title: string
	subtitle: string
}

export const SettingsSection = (props: SettingsSectionProps) => {
	const { title, subtitle, children } = props
	const text = titlecase(subtitle)

	return (
		<section
			className="flex flex-col pb-4 px-4 mt-4 rounded-lg bg-secondary-600 max-w-[480px]"
			role="menuitem"
		>
			<div className="mt-8" />
			<h3 className="text-secondary-300 capitalize">{title}</h3>
			<p className="text-secondary-400 pt-2 pb-4 text-sm">{text}</p>
			{children}
		</section>
	)
}
