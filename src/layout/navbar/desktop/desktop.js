import React from "react";
import { Stack, Typography } from "@mui/material";
import { NavHashLink } from "react-router-hash-link";


const NavDesktop = ({ isOffset, data }) => {
	return (
		<Stack direction="row" spacing={3} alignItems="center">
			{data.map((item, index) => (
				<NavHashLink
					key={index}
					to={item.path}
					smooth
					className="nav-link" // Add a class name for styling
					activeClassName="active" // Class to apply when the link is active
					style={{
						margin: "0 15px",
						color: isOffset ? "#000" : "#fff",
						textDecoration: "none",
						display: "inline-flex",
						alignItems: "center",
						transition: "color 0.3s",
					}}
				>
					<Typography
						variant="subtitle1"
						sx={{
							color: isOffset ? "text.primary" : "common.white",
							fontWeight: "medium",
						}}
					>
						{item.title}
					</Typography>
				</NavHashLink>
			))}
		</Stack>
	);
};

export default NavDesktop;
