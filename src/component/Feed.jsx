import avatar from "../assets/img/img1.jpg";
import Cardcomp from "./Cardcomp";

import { cardData } from "./data";
const Feed = () => {
	return (
		<div style={{ marginTop: "5rem" }}>
			{cardData.map((carditem) => {
				const { text, imgsrc,title } = carditem;
				return (
					<Cardcomp
						key={imgsrc}
						{...{ text, imgsrc, title }}
					/>
				);
			})}
		</div>
	);
};

export default Feed;
