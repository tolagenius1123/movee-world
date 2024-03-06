import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getSeries } from "../../services/actions/page-actions";
import styles from "../home/Home.module.css";
import MovieList from "../movielist/MovieList";
import { MoviesTypes } from "../../types";

const Series = () => {
	const [seriesList, setSeriesList] = useState<MoviesTypes[]>([]);
	const [showAll, setShowAll] = useState<boolean>(false);

	const getTvSeries = async () => {
		try {
			const res = await getSeries();
			console.log(res);

			setSeriesList(res.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTvSeries();
	}, []);

	return (
		<div className={styles.home}>
			<Navbar />
			<div className={styles.content}>
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

export default Series;
