import { Add } from "@mui/icons-material";
import MuiAlert from "@mui/material/Alert";
import {
	Box,
	Button,
	Fab,
	FormControlLabel,
	FormLabel,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Snackbar,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const style = (theme) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,

	[theme.breakpoints.down("sm")]: {
		width: "100vw",
		height: "100vh",
	},
});

const currencies = [
	{
		value: "public",
		label: "public",
	},
	{
		value: "private",
		label: "private",
	},
	{
		value: "unlisted",
		label: "unlisted",
	},
];

//green background snackbar alert

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Addcomp = () => {
	const [open, setOpen] = useState(false);
	const [visibility, setVisibility] = useState("public");
	const [commentor, setCommentor] = useState("friends");
	const [snackOpen, setSnackopen] = useState(false);
	const handleVisibility = (e) => {
		setVisibility(e.target.value);
	};
	const handleCommentor = (e) => setCommentor(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			{/* TODO:Add button  */}
			<Tooltip
				title="Add"
				style={{
					position: "fixed",
					bottom: "10px",
					right: "10px",
				}}
				aria-label="add"
				onClick={() => setOpen(true)}
			>
				<Fab color="secondary" aria-label="add">
					<Add />
				</Fab>
			</Tooltip>

			{/* TODO:Modal section */}
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{/* HACK:Form section inside modal */}
					<form onSubmit={handleSubmit} autoComplete="off">
						{/* title */}
						<TextField
							id="standard-basic"
							label="Title"
							variant="standard"
							fullWidth
						/>

						{/* post */}
						<TextField
							id="outlined-basic"
							label="Post"
							variant="outlined"
							fullWidth
							multiline={true}
							rows={4}
							size="normal"
							margin="normal"
						/>

						{/* set privacy  with select field*/}

						<TextField
							id="outlined-select-currency"
							select
							label="Visibility"
							value={visibility}
							onChange={handleVisibility}
							helperText="please select who can see your post"
							margin="normal"
						>
							{currencies.map((option) => (
								<MenuItem
									key={option.value}
									value={option.value}
								>
									{option.label}
								</MenuItem>
							))}
						</TextField>

						{/* set commentator with radiogroup*/}
						<div className="radiogroup">
							<FormLabel component="legend">
								Who can comment?
							</FormLabel>
							<RadioGroup
								// defaultValue="friends"
								aria-label="gender"
								name="customized-radios"
								value={commentor}
								onChange={handleCommentor}
							>
								<FormControlLabel
									value="friends"
									control={<Radio />}
									label="Friend"
								/>
								<FormControlLabel
									value="Everybody"
									control={<Radio />}
									label="Everybody"
								/>
								<FormControlLabel
									value="Nobody"
									control={<Radio />}
									label="Nobody"
								/>
								<FormControlLabel
									value="disabled"
									disabled
									control={<Radio />}
									label="(Disabled option)"
								/>
							</RadioGroup>
						</div>
						{/* create or cancel button for post create */}
						<div className="buttonsec">
							<Button
								variant="outlined"
								color="secondary"
								style={{ marginRight: "1em" }}
								type="submit"
								onClick={() => {
									setSnackopen(true);
									setOpen(false);
								}}
							>
								Create
							</Button>
							<Button
								variant="outlined"
								color="error"
								onClick={() => {
									setOpen(false);
								}}
							>
								Cancel
							</Button>
						</div>
					</form>
				</Box>
			</Modal>

			{/* TODO:snackbar for toast message */}
			<Snackbar
				open={snackOpen}
				autoHideDuration={6000}
				onClose={() => setSnackopen(false)}
				// message="Your post has been created"
				// action={action}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<Alert
					severity="success"
					onClose={() => setSnackopen(false)}
				>
					your post hasbeen successfully created
				</Alert>
			</Snackbar>
		</>
	);
};

export default Addcomp;
