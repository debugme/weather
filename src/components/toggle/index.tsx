import { useState } from 'react'

export type ToggleProps = {
	isOn: boolean
	onClick: () => void
}

export const Toggle = (props: ToggleProps) => {
	const [isEnabled, setEnabled] = useState(props.isOn)

	const onClick = () => {
		props.onClick()
		setEnabled((isEnabled) => !isEnabled)
	}

	const toggleBoxClassList = `relative w-[64px] border-2 border-primary-600 h-7 rounded-lg cursor-pointer focus:outline-white ${
		isEnabled ? 'border-primary-600' : 'border-secondary-500'
	}`
	const toggleClassList = `transition-all absolute h-4 w-7 rounded-md top-[4px] ${
		isEnabled ? 'right-[5px] bg-primary-600' : 'left-[5px] bg-secondary-400'
	}`

	return (
		<button
			className={toggleBoxClassList}
			onClick={onClick}
			tabIndex={0}
			aria-pressed={isEnabled}
		>
			<span className={toggleClassList} />
		</button>
	)
}
