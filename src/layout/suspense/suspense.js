// SuspenseLoader.js
import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion } from "framer-motion";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoaderBox = styled(Box)({
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#fff",
});

const Logo = styled("img")({
	width: "150px",
	height: "150px",
	animation: `${fade} 1s ease-in-out`,
});

const GradientCircularProgress = styled(CircularProgress)(({ theme }) => ({
	color: "transparent",
	animation: "rotate 2s linear infinite",
	"& .MuiCircularProgress-circle": {
		strokeLinecap: "round",
		gradientTransform: "rotate(-90deg)",
		stroke: "url(#gradient)",
	},
}));

const SuspenseLoader = () => {
	return (
		<LoaderBox>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1 }}
			>
				<Logo
					src="https://res.cloudinary.com/dqweh6zte/image/upload/v1679650180/skydive%20rhino/images/skydive_rhino_kenya_logo_trnkqy.png"
					alt="Skydive Rhino Kenya"
				/>
			</motion.div>
			<Box position="relative" zIndex={1}>
				<svg width="0" height="0">
					<linearGradient id="gradient" x1="100%" y1="100%">
						<stop stopColor="#258c33" offset="0%" />
						<stop stopColor="#c9472f" offset="100%" />
					</linearGradient>
				</svg>
				<GradientCircularProgress size={80} thickness={4} />
			</Box>
		</LoaderBox>
	);
};

export default SuspenseLoader;
