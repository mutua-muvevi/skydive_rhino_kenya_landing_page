import { Box } from "@mui/material";
import { styled } from "@mui/styles";

const StyledWrapper = styled(Box)(({theme}) => ({
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "5rem",
	fontWeight: "bold",
	color: "black",
	backgroundColor: "white",
}))	

const Services = () => {
  return (
	<div id="services">
		<StyledWrapper>
			Services
		</StyledWrapper>
	</div>
  )
}

export default Services