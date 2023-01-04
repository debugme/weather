import { useBreakpoints } from "../../../providers";

import { Breakpoints } from "./breakpoints";
import { Devices } from "./devices";

export const Footer = () => {
	const { breakpoints } = useBreakpoints();
	return (
		<footer className="flex items-center justify-end px-6 bg-secondary-700 ">
			{breakpoints ? <Devices /> : null}
			{breakpoints ? <Breakpoints /> : null}
		</footer>
	);
};
