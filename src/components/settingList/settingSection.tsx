import { PropsWithChildren } from 'react'
import { titlecase } from '../../utilities'

export type SettingSectionProps = PropsWithChildren & {
	title: string
	subtitle: string
}

export const SettingSection = (props: SettingSectionProps) => {
	const { title, subtitle, children } = props
	const normalisedTitle = titlecase(title)
	const normalisedSubtitle = titlecase(subtitle)

	return (
		<section
			className="flex flex-col pb-4 px-4 mt-4 rounded-lg bg-secondary-600 max-w-[480px]"
			role="menuitem"
		>
			<div className="mt-8" />
			<h3 className="text-secondary-300">{normalisedTitle}</h3>
			<p className="pt-2 pb-4 text-sm text-secondary-400">
				{normalisedSubtitle}
			</p>
			{children}
		</section>
	)
}
