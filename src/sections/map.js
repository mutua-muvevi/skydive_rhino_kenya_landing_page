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

const Map = () => {
  return (
	<div id="map">
		<StyledWrapper>
			Map
		</StyledWrapper>
	</div>
  )
}

export default Map