import { Link } from "react-router-dom";
import styles from "./reusables.module.css";

type MovieCardProps = {
	id: number;
	image: any;
	title: string;
	date: string;
};

const MovieCard = ({ id, image, title, date }: MovieCardProps) => {
	return (
		<div className={styles.card}>
			<Link to={`/movie/${id}`} className={styles.imageContainer}>
				<img
					src={`https://image.tmdb.org/t/p/w500${image}`}
					alt={title}
					className={styles.image}
				/>
			</Link>
			<p className={styles.title}>{title}</p>
			<div className={styles.info}>
				<div>{date}</div>
			</div>
		</div>
	);
};

export default MovieCard;
