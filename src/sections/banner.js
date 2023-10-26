import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

//bannerbox style is fullscreen and when you scroll down it animates to the next section
const BannerBox = styled(Box)(({ theme }) => ({
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "5rem",
	fontWeight: "bold",
	color: "white",
	backgroundColor: "black",
}));

const Banner = () => {
	return (
		<div id="banner">
			<BannerBox>Banner</BannerBox>
		</div>
	);
};

export default Banner;
