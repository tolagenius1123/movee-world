import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getPopular } from "../../services/actions/page-actions";
import styles from "../home/Home.module.css";
import MovieList from "../movielist/MovieList";
import { MoviesTypes } from "../../types";

const Popular = () => {
	const [popularList, setPopularList] = useState<MoviesTypes[]>([]);

	const [showAll, setShowAll] = useState<boolean>(false);

	const getPopularMovies = async () => {
		try {
			const res = await getPopular();
			setPopularList(res.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPopularMovies();
	}, []);

	return (
		<div className={styles.home}>
			<Navbar />
			<div className={styles.content}>
				<MovieList
					heading="Popular Movies"
					data={popularList}
					route="/popular"
					isHidden={showAll}
					setHidden={setShowAll}
				/>
			</div>
		</div>
	);
};

export default Popular;
