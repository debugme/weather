import { SearchBox, WeatherList, WorldMap } from "../components";
import { useLocales, useWeather } from "../providers";

const gb = {
	city: "london",
	country: "united kingdom",
	countryCode: "GB",
	latitude: 51.509865,
	longitude: -0.118092,
	showMarker: true,
};

export const Home = () => {
	const { t } = useLocales();
	const {
		weatherList,
		searchTerm,
		setSearchTerm,
		isLoading,
		selectedDate,
		setSelectedDate,
	} = useWeather();

	const worldMapProps =
		searchTerm.length === 0
			? gb
			: isLoading
			? { ...gb, city: "", country: "", showMarker: false }
			: weatherList.length === 0
			? { ...gb, city: "No results", country: "Try again" }
			: { ...gb, ...weatherList[0] };

	return (
		<section className="flex flex-col w-3/4 mx-auto">
			<h2 className="text-3xl text-secondary-400 capitalize">{t("search")}</h2>
			<span className="hidden lg:block">
				<WorldMap {...worldMapProps} />
			</span>
			<SearchBox
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				isLoading={isLoading}
			/>
			<WeatherList
				list={weatherList}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
		</section>
	);
};
