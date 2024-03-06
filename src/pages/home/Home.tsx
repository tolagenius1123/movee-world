import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import {
	getPopular,
	getSeries,
	getTrending,
} from "../../services/actions/page-actions";
import styles from "./Home.module.css";
import MovieList from "../movielist/MovieList";
import { MoviesTypes } from "../../types";

const Home = () => {
	const [trendingList, setTrendingList] = useState<MoviesTypes[]>([]);
	const [popularList, setPopularList] = useState<MoviesTypes[]>([]);
	const [seriesList, setSeriesList] = useState<MoviesTypes[]>([]);
	const [showAll, setShowAll] = useState<boolean>(false);

	const getTrendingMovies = async () => {
		try {
			const res = await getTrending();
			setTrendingList(res.results);
		} catch (error) {
			console.log(error);
		}
	};

	const getPopularMovies = async () => {
		try {
			const res = await getPopular();
			setPopularList(res.results);
		} catch (error) {
			console.log(error);
		}
	};

	const getTvSeries = async () => {
		try {
			const res = await getSeries();
			setSeriesList(res.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTrendingMovies();
		getPopularMovies();
		getTvSeries();
	}, []);

	return (
		<div className={styles.home}>
			<Navbar />
			<div className={styles.content}>
				<MovieList
					heading="Trending Now"
					data={trendingList}
					route="/trending"
					isHidden={showAll}
					setHidden={setShowAll}
				/>
				<MovieList
					heading="Popular Movies"
					data={popularList}
					route="/popular"
					isHidden={showAll}
					setHidden={setShowAll}
				/>
				<MovieList
					heading="TV Shows"
					data={seriesList}
					route="/series"
					isHidden={showAll}
					setHidden={setShowAll}
				/>
			</div>
		</div>
	);
};

export default Home;
