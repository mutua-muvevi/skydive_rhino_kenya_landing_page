import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Link } from "@mui/material";

const logoImage = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679650180/skydive%20rhino/images/skydive_rhino_kenya_logo_trnkqy.png";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
	const theme = useTheme();

	const PRIMARY_LIGHT = theme.palette.primary.light;

	const PRIMARY_MAIN = theme.palette.primary.main;

	const PRIMARY_DARK = theme.palette.primary.dark;

	// OR using local (public folder)
	// -------------------------------------------------------
	// const logo = (
	//   <Box
	//     component="img"
	//     src="/logo/logo_single.svg" => your path
	//     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
	//   />
	// );

	const logo = (
		<Box
			ref={ref}
			component="div"
			sx={{
				// width: 40,
				height: 40,
				display: "inline-flex",
				...sx,
			}}
			{...other}
		>
			<img src={logoImage} alt="Afrigorithm logo"/>
		</Box>
	);

	if (disabledLink) {
		return logo;
	}

	return (
		<Link component={RouterLink} to="/" sx={{ display: "contents" }}>
			{logo}
		</Link>
	);
});

Logo.propTypes = {
	sx: PropTypes.object,
	disabledLink: PropTypes.bool,
};

export default Logo;
