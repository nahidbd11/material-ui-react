//TODO:all icondata and desing

import {
	AppShortcut,
	Camera,
	Collections,
	Home,
	Logout,
	People,
	Settings,
	Videocam,
} from "@mui/icons-material";

const iconstyle = (theme) => ({
	[theme.breakpoints.up("sm")]: {
		fontSize: "medium",
		marginRight: theme.spacing(2),
	},
});
export const iconArr = [
	{
		icon: <Home sx={iconstyle} />,
		text: "home",
	},
	{
		icon: <Videocam sx={iconstyle} />,
		text: "video",
	},
	{
		icon: <Camera sx={iconstyle} />,
		text: "camera",
	},
	{
		icon: <Settings sx={iconstyle} />,
		text: "settings",
	},
	{
		icon: <Logout sx={iconstyle} />,
		text: "logout",
	},
	{
		icon: <AppShortcut sx={iconstyle} />,
		text: "App",
	},
	{
		icon: <Collections sx={iconstyle} />,
		text: "collections",
	},
	{
		icon: <People sx={iconstyle} />,
		text: "friends",
	},
];

export const cardData = [
	{
		imgsrc: "img2.jpg",
		title: "nature",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut. Pretium fusce id velit ut. Diam ut venenatis tellus in metus vulputate eu. Nunc scelerisque viverra mauris in aliquam sem. Lacinia at quis risus sed vulputate odio ut. Eleifend donec pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget nulla. Facilisis magna etiam tempor orci eu lobortis. Purus faucibus ornare suspendisse sed nisi.",
		id: 1,
	},
	{
		imgsrc: "img3.jpeg",
		title: "camera",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut. Pretium fusce id velit ut. Diam ut venenatis tellus in metus vulputate eu. Nunc scelerisque viverra mauris in aliquam sem. Lacinia at quis risus sed vulputate odio ut. Eleifend donec pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget nulla. Facilisis magna etiam tempor orci eu lobortis. Purus faucibus ornare suspendisse sed nisi.",
		id: 2,
	},
	{
		imgsrc: "img4.jpeg",
		title: "flower",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut. Pretium fusce id velit ut. Diam ut venenatis tellus in metus vulputate eu. Nunc scelerisque viverra mauris in aliquam sem. Lacinia at quis risus sed vulputate odio ut. Eleifend donec pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget nulla. Facilisis magna etiam tempor orci eu lobortis. Purus faucibus ornare suspendisse sed nisi.",
		id: 3,
	},
	{
		imgsrc: "img2.jpg",
		title: "nature",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut. Pretium fusce id velit ut. Diam ut venenatis tellus in metus vulputate eu. Nunc scelerisque viverra mauris in aliquam sem. Lacinia at quis risus sed vulputate odio ut. Eleifend donec pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget nulla. Facilisis magna etiam tempor orci eu lobortis. Purus faucibus ornare suspendisse sed nisi.",
		id: 4,
	},
	{
		imgsrc: "img3.jpeg",
		title: "camera",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut. Pretium fusce id velit ut. Diam ut venenatis tellus in metus vulputate eu. Nunc scelerisque viverra mauris in aliquam sem. Lacinia at quis risus sed vulputate odio ut. Eleifend donec pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget nulla. Facilisis magna etiam tempor orci eu lobortis. Purus faucibus ornare suspendisse sed nisi.",
		id: 5,
	},
	{
		imgsrc: "img4.jpeg",
		title: "flower",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut. Pretium fusce id velit ut. Diam ut venenatis tellus in metus vulputate eu. Nunc scelerisque viverra mauris in aliquam sem. Lacinia at quis risus sed vulputate odio ut. Eleifend donec pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget nulla. Facilisis magna etiam tempor orci eu lobortis. Purus faucibus ornare suspendisse sed nisi.",
		id: 6,
	},
];
