export type MoviesTypes = {
	adult: boolean;
	backdrop_path: string | null;
	id: number;
	title: string;
	name: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string | null;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	first_air_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

type Genre = {
	id: number;
	name: string;
};

type ProductionCompany = {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
};

type ProductionCountry = {
	iso_3166_1: string;
	name: string;
};

type SpokenLanguage = {
	english_name: string;
	iso_639_1: string;
	name: string;
};

export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: any; // You can define a specific type for this if needed
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};
