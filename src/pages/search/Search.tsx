import { useEffect, useState } from "react";
import { searchForMovie } from "../../services/actions/page-actions";
import styles from "../home/Home.module.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { MoviesTypes } from "../../types";
import MovieList from "../movielist/MovieList";

const Search = () => {
	const [searchedResults, setSearchResults] = useState<MoviesTypes[]>();
	const [showAll, setShowAll] = useState<boolean>(false);

	const { searchText } = useParams();

	const getSearchResults = async (text: string | undefined) => {
		try {
			const res = await searchForMovie(text);
			console.log(res);
			setSearchResults(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSearchResults(searchText);
	}, [searchText]);

	return (
		<div className={styles.home}>
			<Navbar />
			<div className={styles.content}>
				{searchedResults && (
					<MovieList
						heading={`Search Results for "${searchText}"`}
						data={searchedResults}
						route="/"
						isHidden={showAll}
						setHidden={setShowAll}
					/>
				)}
			</div>
		</div>
	);
};

export default Search;
