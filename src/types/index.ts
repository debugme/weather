export type Nullable<T> = T | null;

export type Weather = {
	date: string;
	time: string;
	image: string;
	temperature: string;
	description: string;
	sunrise: string;
	sunset: string;
	wind: string;
	city: string;
	country: string;
	countryCode: string;
	latitude: number;
	longitude: number;
};

export const noop = () => {};
