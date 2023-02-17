import { useAvatars, useHandle } from '../../../providers'

export const Badge = () => {
	const { avatar, avatarMap } = useAvatars()
	const { handle } = useHandle()
	const icon = avatarMap[avatar]

	return (
		<span className="flex items-center justify-center gap-2">
			<h3 className="hidden mt-2 text-sm text-transparent sm:block bg-clip-text bg-primary-500">
				{handle}
			</h3>
			<div className="relative w-10 h-10 rounded-full bg-primary-500">
				<div className="absolute left-0 top-[-8px]">{icon}</div>
			</div>
		</span>
	)
}
