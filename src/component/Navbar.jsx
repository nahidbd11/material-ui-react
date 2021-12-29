import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatar from "../assets/img/img1.jpg";

import {
	AppBar,
	styled,
	Toolbar,
	Typography,
	InputBase,
	Badge,
	Avatar,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

const MyTypo = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		// backgroundColor: "#235",
		padding: "1em",
	},
}));

const SearchDiv = styled("div")`
   display:flex
	align-items: flex-start;
	padding: 0.5em;
	@media (max-width: 576px) {
		display: ${(props) => (props.open === true ? "flex" : "none")};
        
        // & .searchoutlined{
        //     display:none;
        // }
	}
   @media (min-width:576px){
       & .cancelicon{
           display:none;
       }
   }
`;

const IconDiv = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
	& > * {
		margin-left: 15px;
	}

	@media (max-width: 576px) {
		display: ${(props) => (props.open === true ? "none" : "flex")};
	}
`;
const mystyleObj = {
	mytypo1: (theme) => ({
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	}),
	search: (theme) => ({
		backgroundColor: theme.palette.primary.light,
		color: "white",
		borderRadius: theme.shape.borderRadius,
		marginLeft: "10px",
		transform: "translateY(-5px)",
	}),
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		boxShadow: "0px 4px 4px rgba(0,0,0,0.2)",
	},
	searchIcon: (theme) => ({
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	}),
};
const Typostyles = (theme) => ({
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
});
const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<AppBar postion="static">
			<Toolbar sx={mystyleObj.toolbar}>
				<Typography variant="h5" sx={mystyleObj.mytypo1}>
					Nahid
				</Typography>
				<MyTypo variant="h6" sx={Typostyles}>
					Nahidul islam
				</MyTypo>
				<SearchDiv open={open}>
					<SearchOutlinedIcon className="searchoutlined" />
					<InputBase
						sx={mystyleObj.search}
						placeholder="search"
					/>
					<Cancel
						onClick={() => setOpen(false)}
						className="cancelicon"
					/>
				</SearchDiv>
				<IconDiv open={open}>
					<SearchOutlined
						sx={mystyleObj.searchIcon}
						onClick={() => {
							setOpen(!open);
							console.log(open);
						}}
					/>
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
					<Badge badgeContent={4} color="error">
						<NotificationsIcon />
					</Badge>
					<Avatar alt="Remy Sharp" src={avatar} />
				</IconDiv>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
