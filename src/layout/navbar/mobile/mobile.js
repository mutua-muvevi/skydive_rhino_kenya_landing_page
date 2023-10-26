import React, { useState } from "react";
import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	SwipeableDrawer,
} from "@mui/material";
import Iconify from "src/components/iconify/iconify";

const NavMobile = ({ isOffset, data }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setDrawerOpen(open);
	};

	const drawer = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{data.map((item) => (
					<ListItem
						button
						key={item.title}
						component="a"
						href={item.path}
					>
						<ListItemText primary={item.title} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{ mr: 2 }}
				onClick={toggleDrawer(true)}
			>
				<Iconify icon="mdi:menu" />
			</IconButton>
			<SwipeableDrawer
				anchor="left"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				{drawer}
			</SwipeableDrawer>
		</div>
	);
};

export default NavMobile;
