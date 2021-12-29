import { Add } from "@mui/icons-material";
import { Box, Fab, Modal, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

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
const Addcomp = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
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
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
					>
						Text in a modal
					</Typography>
					<Typography
						id="modal-modal-description"
						sx={{ mt: 2 }}
					>
						Duis mollis, est non commodo luctus, nisi
						erat porttitor ligula.
					</Typography>
				</Box>
			</Modal>
		</>
	);
};

export default Addcomp;
