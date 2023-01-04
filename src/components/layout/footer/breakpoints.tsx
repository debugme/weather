const Cellphone = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6 ml-2"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
		/>
	</svg>
);

const Desktop = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6 ml-2"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
		/>
	</svg>
);

const Laptop = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6 ml-2"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
		/>
	</svg>
);

const Tablet = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6 ml-2"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
		/>
	</svg>
);

export const Breakpoints = () => (
	<section className="flex cursor-pointer text-secondary-500">
		<figure className="flex xl:text-primary-600" title="1280px - ∞">
			<Desktop />
		</figure>
		<figure
			className="flex lg:text-primary-600 xl:text-secondary-500"
			title="1024px - 1279px"
		>
			<Laptop />
		</figure>
		<figure
			className="flex md:text-primary-600 lg:text-secondary-500"
			title="768px - 1023px"
		>
			<Tablet />
		</figure>
		<figure
			className="flex text-primary-600 md:text-secondary-500"
			title="0px - 767px"
		>
			<Cellphone />
		</figure>
	</section>
);
