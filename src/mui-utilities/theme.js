import { createTheme, styled, ThemeProvider, Button } from "@mui/material";
export const customTheme = createTheme({
	spacing: 4,
	palette: {
		primary: {
			main: "#111",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					transform: "rotate(5deg)",
				},
			},
		},
	},

	//custom variable
	mycolor: {
		color: "blue",
	},
});
