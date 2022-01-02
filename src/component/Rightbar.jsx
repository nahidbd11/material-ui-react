import {
	Avatar,
	AvatarGroup,
	Divider,
	ImageList,
	ImageListItem,
	Link,
	Typography,
} from "@mui/material";
import { cardData } from "./data";
const Rightbar = () => {
	return (
		<div style={{ marginTop: "5rem",position:"sticky",top:"5em" }}>
			<Typography variant="body1">online friends</Typography>
			<AvatarGroup max={4}>
				{cardData.map((item) => {
					const { imgsrc, id } = item;
					return (
						<Avatar
							key={id}
							src={require(`../assets/img/${imgsrc}`)}
						/>
					);
				})}
			</AvatarGroup>
			<div style={{ marginTop: "2rem" }}>
				<Typography>Gallery</Typography>
				<ImageList cols={3} rowHeight={100}>
					{cardData.map((item) => (
						<ImageListItem
							key={item.id}
							// cols={item.cols || 1}
							// rows={item.rows || 1}
						>
							<img
								src={require(`../assets/img/${item.imgsrc}`)}
								alt={item.title}
								loading="lazy"
							/>
						</ImageListItem>
					))}
				</ImageList>
			</div>
			<div>
				<Typography variant="subtitle1" color="secondary.dark">
					Catergory
				</Typography>
				<Link variant="body1" sx={{ marginRight: "1em" }}>
					Science
				</Link>
				<Link variant="body1" sx={{ marginRight: "1em" }}>
					Science
				</Link>
				<Link variant="body1" sx={{ marginRight: "1em" }}>
					Science
				</Link>
				<Divider flexItem/>
				<Link variant="body1" sx={{ marginRight: "1em" }}>
					Science
				</Link>

				<Link variant="body1" sx={{ marginRight: "1em" }}>
					Science
				</Link>
				<Link variant="body1" sx={{ marginRight: "1em" }}>
					Science
				</Link>
			</div>
		</div>
	);
};

export default Rightbar;
