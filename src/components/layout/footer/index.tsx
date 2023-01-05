import { useBreakpoints, useSecurity } from '../../../providers'

import { Breakpoints } from './breakpoints'
import { Devices } from './devices'

export const Footer = () => {
	const { isSignedIn } = useSecurity()
	const { breakpoints } = useBreakpoints()

	const [breakpointInfo, deviceInfo] =
		isSignedIn && breakpoints ? [<Breakpoints />, <Devices />] : [null, null]

	return (
		<footer className="flex items-center justify-end px-6 bg-secondary-700">
			{deviceInfo}
			{breakpointInfo}
		</footer>
	)
}
