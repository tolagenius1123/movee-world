import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getTrending } from "../../services/actions/page-actions";
import styles from "../home/Home.module.css";
import MovieList from "../movielist/MovieList";
import { MoviesTypes } from "../../types";

const Trending = () => {
	const [trendingList, setTrendingList] = useState<MoviesTypes[]>([]);
	const showAll: boolean = true;

	const getTrendingMovies = async () => {
		try {
			const res = await getTrending();
			setTrendingList(res.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTrendingMovies();
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
				/>
			</div>
		</div>
	);
};

export default Trending;
