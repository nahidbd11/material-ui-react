import "./App.css";

import Navbar from "./component/Navbar";
import Leftbar from "./component/Leftbar";
import { Container, Grid } from "@mui/material";

import Rightbar from "./component/Rightbar";
import Feed from "./component/Feed";
import Addcomp from "./component/Addcomp";

// function App() {
// 	return (
// 		<ThemeProvider theme={customTheme}>
// 			<Button
// 				variant="contained"
// 				sx={{
// 					"&:hover": {
// 						backgroundColor: "red",
// 					},
// 				}}
// 			>
// 				hi
// 			</Button>
// 			<Mybuttons>Hello</Mybuttons>

// 			<MyPara>
// 				Lorem ipsum dolor, sit amet consectetur adipisicing
// 				elit. Eum vel, praesentium officia in nisi obcaecati
// 				soluta eius consequuntur, suscipit ipsa non? Natus
// 				dolore harum, repudiandae et expedita itaque voluptatem
// 				sed!
// 			</MyPara>
// 			<Button variant="outlined" className="MuiButton-outlined">
// 				with css
// 			</Button>
// 			<Typography color={customTheme.mycolor}>lorem</Typography>
// 		</ThemeProvider>
// 	);
// }

const rightbarstyle = (theme) => ({
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
});

function App() {
	return (
		<div>
			<Navbar />

			<Grid
				container
				wrap="nowrap"
				gap={{ md: 12, sm: 4, xs: 0.5 }}
			>
				<Grid item sm={2} xs={2}>
					<Leftbar />
				</Grid>
				<Grid item sm={7} xs={10} md={5}>
					<Feed />
				</Grid>
				<Grid item sm={2} sx={rightbarstyle}>
					<Rightbar />
				</Grid>
			</Grid>
			<Addcomp
			
			/>
		</div>
	);
}

export default App;
