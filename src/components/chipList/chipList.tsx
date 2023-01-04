import { Fragment } from "react";

export type ChipListProps = {
	list: string[];
	selected: string;
	setSelected: (_: string) => void;
	normaliser?: (_: string) => string;
};

export const ChipList = (props: ChipListProps) => {
	const { list, selected, setSelected, normaliser } = props;

	const chipList = list.map((text) => {
		const label = normaliser ? normaliser(text) : text;
		const className = `capitalize focus:outline-white py-2 rounded-lg text-secondary-800 ${
			selected === text ? "bg-primary-500" : "bg-secondary-400"
		}`;
		const onClick: React.MouseEventHandler = (event) => {
			setSelected(event.currentTarget.getAttribute("data-id")!);
		};

		return (
			<button
				key={text}
				data-id={text}
				className={className}
				onClick={onClick}
				tabIndex={0}
			>
				{label}
			</button>
		);
	});

	return (
		<Fragment>
			<div className="p-4 mt-4 rounded-lg grid grid-cols-3 md:grid-cols-6 place-items-stretch gap-4 bg-secondary-600 justify-items-around">
				{chipList}
			</div>
		</Fragment>
	);
};
