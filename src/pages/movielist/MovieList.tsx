import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { MoviesTypes } from "../../types";
import styles from "./MovieList.module.css";
import { FaAngleRight } from "../../assets/icons/icons";

type MovieListProps = {
	heading: string;
	data: MoviesTypes[];
	route: string;
	isHidden: boolean;
};

const MovieList = ({ heading, data, route, isHidden }: MovieListProps) => {
	const selectedMovies = data.slice(0, 8);

	return (
		<div className={styles.movieList}>
			<div className={styles.header}>
				<h2 className={styles.heading}>{heading}</h2>
				{isHidden ? (
					""
				) : (
					<div className={styles.link}>
						<Link to={route} className={styles.href}>
							View All
						</Link>
						<FaAngleRight className={styles.icon} />
					</div>
				)}
			</div>
			<div className={styles.container}>
				{isHidden
					? data?.map((movie) => (
							<MovieCard
								key={movie.id}
								id={movie.id}
								image={movie.poster_path}
								title={movie.title || movie.name}
								date={
									movie.release_date || movie.first_air_date
								}
							/>
					  ))
					: selectedMovies?.map((movie) => (
							<MovieCard
								key={movie.id}
								id={movie.id}
								image={movie.poster_path}
								title={movie.title || movie.name}
								date={
									movie.release_date || movie.first_air_date
								}
							/>
					  ))}
			</div>
		</div>
	);
};

export default MovieList;
