import { Container, Typography } from "@mui/material";
import "../App.css";
import { iconArr } from "./data";
const containerStyle = (theme) => ({
	height: "100vh",
	marginTop: "4em",
	padding: "0.1em",
	backgroundColor: theme.palette.primary.main,
	[theme.breakpoints.down("md")]: {
		marginTop: "3.5em",
	},
	color: "white",
	position: "sticky",
	top: "0",
});

const TypoStyle = (theme) => ({
	fontWeight: "500",
	textTransform: "capitalize",
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
});

const Leftbar = () => {
	return (
		<Container sx={containerStyle}>
			{iconArr.map((item, index) => {
				const { icon, text } = item;
				return (
					<div key={index} className="dflex">
						{icon}
						<Typography sx={TypoStyle}>
							{text}
						</Typography>
					</div>
				);
			})}
		</Container>
	);
};

export default Leftbar;
