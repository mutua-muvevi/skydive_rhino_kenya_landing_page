import PropTypes from "prop-types";
import { useRef } from "react";
import { useTheme } from "@mui/material/styles";
import {
	AppBar,
	Toolbar,
	Container,
	Stack,
	Typography,
	Box,
} from "@mui/material";
import useOffSetTop from "src/hooks/useOffSetTop";
import useResponsive from "src/hooks/useResponsive";
import { bgBlur } from "src/utils/cssStyles";
import { HEADER } from "src/config-global";
import { navConfig } from "./info";
import Logo from "src/components/logo";
import NavDesktop from "./desktop/desktop";
import NavMobile from "./mobile/mobile";

function Shadow({ sx }) {
	return (
		<Box
			sx={{
				left: 0,
				right: 0,
				bottom: 0,
				height: 24,
				zIndex: -1,
				m: "auto",
				borderRadius: "50%",
				position: "absolute",
				width: `calc(100% - 48px)`,
				boxShadow: (theme) => theme.customShadows.z8,
				...sx,
			}}
		/>
	);
}

Shadow.propTypes = {
	sx: PropTypes.object,
};

const Navbar = () => {
	const carouselRef = useRef(null);
	const theme = useTheme();
	const isDesktop = useResponsive("up", "md");
	const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

	return (
		<div id="top">
			<AppBar ref={carouselRef} color="transparent" sx={{ boxShadow: 0 }}>
				<Toolbar
					disableGutters
					sx={{
						height: {
							xs: HEADER.H_MOBILE,
							md: HEADER.H_MAIN_DESKTOP,
						},
						transition: theme.transitions.create(
							["height", "background-color"],
							{
								easing: theme.transitions.easing.easeInOut,
								duration: theme.transitions.duration.shorter,
							}
						),
						...(isOffset && {
							...bgBlur({ color: theme.palette.primary.main }),
							height: {
								md: HEADER.H_MAIN_DESKTOP - 16,
							},
						}),
					}}
				>
					<Container
						maxWidth="xl"
						sx={{
							height: 1,
							display: "flex",
							alignItems: "center",
						}}
					>
						<Stack
							direction="row"
							spacing={2}
							justifyContent="left"
							alignItems="center"
						>
							<Logo />
							<Typography variant="h5" sx={{ color: "#ffffff" }}>
								Afrigorithm
							</Typography>
						</Stack>

						<Box sx={{ flexGrow: 1 }} />

						{isDesktop ? (
							<NavDesktop isOffset={isOffset} data={navConfig} />
						) : (
							<NavMobile isOffset={isOffset} data={navConfig} />
						)}
					</Container>
				</Toolbar>

				{isOffset && <Shadow />}
			</AppBar>
		</div>
	);
};

export default Navbar;
