import { Button, styled } from "@mui/material";

export const Mybutton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "#f1f1f1",
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		opacity: 0.8,
	},
}));

export const Mybuttons = styled(Button)(
	({ theme }) => `
  background-color:red;
 color:${theme.palette.primary.main};
 padding:${theme.spacing(2)};
 margin-top:${theme.spacing(35)}

`
);

export const MyPara = styled("p")`
	font-weight: bold;
`;
