import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/actions/page-actions";
import styles from "./Movie.module.css";
import { Circle } from "rc-progress";
import { MovieType } from "../../types";

const Movie = () => {
	const [movie, setMovie] = useState<MovieType>();

	const { id } = useParams();

	const getMovie = async (movieId: string | undefined) => {
		try {
			const res = await getMovieById(movieId);
			setMovie(res);
		} catch (error) {
			console.log(error);
		}
	};

	const voteAverage: number | undefined = movie?.vote_average;
	const percentage =
		voteAverage !== undefined ? Math.round((voteAverage / 10) * 100) : 0;

	const hours =
		movie?.runtime !== undefined ? Math.floor(movie?.runtime / 60) : 0;
	const minutes = movie?.runtime !== undefined ? movie?.runtime % 60 : 0;

	useEffect(() => {
		getMovie(id);
	}, []);

	return (
		<div className={styles.movie}>
			<div className={styles.imageContainer}>
				<img
					className={styles.image}
					src={`https://image.tmdb.org/t/p/w500${
						movie?.poster_path || movie?.backdrop_path
					}`}
					alt={movie?.title}
				/>
			</div>
			<div className={styles.movieInfo}>
				<h2 className={styles.heading}>{movie?.title}</h2>
				<h3 className={styles.overview}>Overview</h3>
				<p className={styles.overviewInfo}>{movie?.overview}</p>
				<div className={styles.genre}>
					<h3>Genre:</h3>
					{movie?.genres
						? movie?.genres.map((genre) => (
								<p key={genre.id}>{genre.name}</p>
						  ))
						: ""}
				</div>

				<div className={styles.runtime}>
					<h3>Runtime:</h3>
					<p>
						{hours} hours {minutes} minutes
					</p>
				</div>
				<div className={styles.progress}>
					<Circle
						percent={percentage}
						trailWidth={6}
						strokeWidth={6}
						strokeColor="blue"
					/>
					<p className={styles.percentage}>{`${percentage}%`}</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
