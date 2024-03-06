import AxiosClient from "../../config/AxiosClient";

export const getTrending = () => {
	return AxiosClient.get(
		`${import.meta.env.VITE_BASE_URL}/3/trending/all/day?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US?`
	)
		.then((response) => response.data)
		.catch((error) => error);
};

export const getPopular = () => {
	return AxiosClient.get(
		`${import.meta.env.VITE_BASE_URL}/3/movie/popular?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US?`
	)
		.then((response) => response.data)
		.catch((error) => error);
};

export const getSeries = () => {
	return AxiosClient.get(
		`${import.meta.env.VITE_BASE_URL}/3/tv/popular?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US?`
	)
		.then((response) => response.data)
		.catch((error) => error);
};

export const getMovieById = (movieId: string | undefined) => {
	return AxiosClient.get(
		`${import.meta.env.VITE_BASE_URL}/3/movie/${movieId}?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US?`
	)
		.then((response) => response.data)
		.catch((error) => error);
};

export const searchForMovie = (text: string | undefined) => {
	return AxiosClient.get(
		`${
			import.meta.env.VITE_BASE_URL
		}/3/search/multi?query=${text}&api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US?`
	)
		.then((response) => response.data.results)
		.catch((error) => error);
};
