import styled from "styled-components"
import colorPalette from "../assets/color-palette";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: right;
    background-color: ${colorPalette.brown};
    height: 16rem;
    width: 16rem;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        // transform: scale(1.05);
        background-color: ${colorPalette.green};
    }
`;

const ImageStyled = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;

    transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    transform-origin: center;

    ${MainContainer}:hover & {
        transform: scale(1.05);
    }
`;

type RecipeCardProps = {
    imgSrc: string,
    title?: string
};

const RecipeCard: React.FC<RecipeCardProps> = ({imgSrc, title}) => {
    return (
        <MainContainer>
            <ImageStyled src={imgSrc} alt="recipe img"/>
            <h2 style={{color: colorPalette.creme, backgroundColor: colorPalette.brown, padding: "0.5rem"}}>{title}</h2>
        </MainContainer>
    );
}

export default RecipeCard;