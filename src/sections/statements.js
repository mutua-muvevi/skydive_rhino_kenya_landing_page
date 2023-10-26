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

const Statements = () => {
  return (
	<div id="statements">
		<StyledWrapper>
			Statements
		</StyledWrapper>
	</div>
  )
}

export default Statements