import styled from "styled-components"
import SearchBar from "./components/search-bar";
import RecipeCard from "./components/recipe-card";
import Immagine1 from "./assets/recipe images/Pasta con salsiccia.jpg";
import Immagine2 from "./assets/recipe images/Ratatouille-recipe-500x500.jpg";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
	width: 100vw;
	height: 100vh;
	align-items: center;
`;

const Container = styled.div`
  	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 12rem 12rem 12rem 12rem;
	gap: 1.5rem;
`;

function App() {

	return (
		<MainContainer>
			<SearchBar/>
			<Container>
				<RecipeCard 
					imgSrc={Immagine1}
					title={"Titolo 1"}
				/>
				<RecipeCard 
					imgSrc={Immagine2}
					title={"Titolo 2"}
				/>
				<RecipeCard 
					imgSrc={Immagine1}
					title={"Titolo 1"}
				/>
				<RecipeCard 
					imgSrc={Immagine2}
					title={"Titolo 2"}
				/>
				<RecipeCard 
					imgSrc={Immagine1}
					title={"Titolo 1"}
				/>
				<RecipeCard 
					imgSrc={Immagine2}
					title={"Titolo 2"}
				/>
				<RecipeCard 
					imgSrc={Immagine1}
					title={"Titolo 1"}
				/>
				<RecipeCard 
					imgSrc={Immagine2}
					title={"Titolo 2"}
				/>
				<RecipeCard 
					imgSrc={Immagine1}
					title={"Titolo 1"}
				/>
				<RecipeCard 
					imgSrc={Immagine2}
					title={"Titolo 2"}
				/>
				<RecipeCard 
					imgSrc={Immagine1}
					title={"Titolo 1"}
				/>
				<RecipeCard 
					imgSrc={Immagine2}
					title={"Titolo 2"}
				/>
				<RecipeCard 
					imgSrc={Immagine1}
					title={"Titolo 1"}
				/>
				<RecipeCard 
					imgSrc={Immagine2}
					title={"Titolo 2"}
				/>
    		</Container>
		</MainContainer>
  	)
}

export default App
