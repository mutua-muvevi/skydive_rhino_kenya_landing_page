import { Box } from "@mui/material";
import { styled } from "@mui/styles";

const StyledWrapper = styled(Box)(({theme}) => ({
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "5rem",
	fontWeight: "bold",
	color: "white",
	backgroundColor: "black",
}))	

const Footer = () => {
  return (
	<div id="footer">
		<StyledWrapper>
			Footer
		</StyledWrapper>
	</div>
  )
}

export default Footer