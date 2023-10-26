import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { m } from "framer-motion";

const videoLink =
	"https://res.cloudinary.com/dqweh6zte/video/upload/v1698327008/skydive%20rhino/videos/skydive_1080p_u3mdwh.mp4";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BannerBox = styled(Box)(({ theme }) => ({
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "5rem",
	fontWeight: "bold",
	color: "white",
	overflow: "hidden",
}));

const BackgroundVideo = styled("video")({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	objectFit: "cover",
	zIndex: -2,
});

const Overlay = styled(Box)({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.4)",
	zIndex: -1,
});

const WelcomeText = styled(Typography)(({ theme }) => ({
	fontSize: "5rem",
	fontWeight: "bold",
	[theme.breakpoints.down("md")]: {
		fontSize: "3rem",
	},
	animation: `${fadeIn} 2s ease-in-out`,
}));

const SubText = styled(Typography)(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: "medium",
	marginTop: "20px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
	},
	animation: `${fadeIn} 2s ease-in-out 1s`,
}));

const Banner = () => {
	return (
		<div id="banner">
			<BannerBox>
				<BackgroundVideo autoPlay muted loop>
					<source src={videoLink} type="video/mp4" />
					Your browser does not support the video tag.
				</BackgroundVideo>

				<Overlay />

				<Container maxWidth="xl">
					<Stack direction="column">
						<m.div
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, ease: "easeInOut" }}
						>
							<WelcomeText>
								Welcome to SkydiveRhinoKenya
							</WelcomeText>
						</m.div>

						<m.div
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 1,
								delay: 0.5,
								ease: "easeInOut",
							}}
						>
							<SubText>Your Adventure Starts Here</SubText>
						</m.div>
					</Stack>
				</Container>
			</BannerBox>
		</div>
	);
};

export default Banner;
