import { Fragment } from "react";
import { useLocales } from "../../providers";

import { Weather } from "../../types";
import { titlecase } from "../../utilities";
import { WeatherCard } from "./weatherCard";

export type WeatherCardListProps = {
	list: Weather[];
};

const buildCard = (weather: Weather, index: number) => (
	<WeatherCard key={`card-${index}`} {...weather} />
);

export const WeatherCardList = (props: WeatherCardListProps) => {
	const { list } = props;
	const { t } = useLocales();

	if (list.length === 0) return null;

	const cardList = list.map(buildCard);

	const text = titlecase(t("weather"));

	return (
		<Fragment>
			<div className="mt-8" />
			<h2 className="text-3xl text-secondary-400">{text}</h2>
			<section className="grid w-full gap-4 p-4 mt-5 mr-auto rounded-lg grid-cols-home bg-secondary-600">
				{cardList}
			</section>
		</Fragment>
	);
};
