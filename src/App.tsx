import styled from "styled-components"
import colorPalette from "./assets/color-palette";

const MainContainer = styled.div`
	background-color: ${colorPalette.green};
  	display: flex;
	flex-direction: column;
  	width: 100vw;
  	height: 100vh;
`;

function App() {

	return (
    	<MainContainer>
    		<p>ciao</p>
      		<input type="text" />
    	</MainContainer>
  	)
}

export default App
