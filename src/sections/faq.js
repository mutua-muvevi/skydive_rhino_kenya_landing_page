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

const FAQ = () => {
  return (
	<div id="faq">
		<StyledWrapper>
			FAQ
		</StyledWrapper>
	</div>
  )
}

export default FAQ