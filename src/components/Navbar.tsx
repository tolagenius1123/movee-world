import styles from "./reusables.module.css";
import { IoPerson, RiMovie2Fill } from "../assets/icons/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const [searchText, setSearchText] = useState<string>("");

	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate(`/search/${searchText}`);
	};

	return (
		<div className={styles.nav}>
			<Link to="/" className={styles.logo}>
				<RiMovie2Fill className={styles.logoIcon} />
				<p className={styles.logoText}>MooveeWorld</p>
			</Link>
			<div className={styles.search}>
				<input
					className={styles.input}
					type="text"
					placeholder="Search..."
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button className={styles.btn} onClick={handleSubmit}>
					G0
				</button>
			</div>
			<div className={styles.profile}>
				<IoPerson className={styles.profileIcon} />
				<Link to="/" className={styles.profileLink}>
					Login
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
