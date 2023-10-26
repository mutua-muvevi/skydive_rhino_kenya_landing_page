// Import necessary components and styles
import React from "react";
import { Box, Stack, Button, Typography, Link } from "@mui/material";
import { navConfig } from "../info";
import { NavHashLink } from "react-router-hash-link";

const NavDesktop = ({ isOffset, data }) => {
	return (
		<Stack direction="row" spacing={3} alignItems="center">
			{data.map((item, index) => (
				<NavHashLink
					key={index}
					to={item.path}
					smooth
					style={{
						margin: "0 15px",
						color: isOffset ? "#000" : "#fff",
						textDecoration: "none",
						display: "inline-flex",
						alignItems: "center",
						transition: "color 0.3s",
					}}
					activeStyle={{
						borderBottom: "2px solid",
						paddingBottom: "5px",
					}}
				>
					<Button
						variant="text"
						sx={{
							color: isOffset ? "text.primary" : "common.white",
							fontWeight: "medium",
						}}
					>
						{item.title}
					</Button>
				</NavHashLink>
			))}
		</Stack>
	);
};

export default NavDesktop;
