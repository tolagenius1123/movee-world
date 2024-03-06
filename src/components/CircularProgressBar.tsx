import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type CircleProgressBarProps = {
	percentage: number;
};

const CircleProgressBar = ({ percentage }: CircleProgressBarProps) => {
	return (
		<div style={{ width: "100px" }}>
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				styles={buildStyles({
					textSize: "16px",
					pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
					textColor: "#f88",
					trailColor: "#d6d6d6",
				})}
			/>
		</div>
	);
};

export default CircleProgressBar;
