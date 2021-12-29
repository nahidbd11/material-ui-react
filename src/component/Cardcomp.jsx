import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const Cardcomp = ({ text, imgsrc, title }) => {
	console.log(imgsrc);
	return (
		<Card sx={{ marginTop: "2em" }}>
			<CardMedia
				component="img"
				height="100%"
				src={require(`../assets/img/${imgsrc}`)}
				alt="green iguana"
			/>

			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					style={{ textTransform: "capitalize" }}
				>
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{text}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" variant="outlined">
					Share
				</Button>
				<Button
					size="small"
					variant="outlined"
					color="secondary"
				>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default Cardcomp;
