import styled from "styled-components"
import colorPalette from "../assets/color-palette";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colorPalette.green};
    height: 16rem;
    width: 16rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    transform-origin: center;

    &:hover {
        transform: scale(1.05);
        background-color: ${colorPalette.light_green};
    }
`;

type RecipeCardProps = {
    imgSrc: string,
    title?: string
};

const RecipeCard: React.FC<RecipeCardProps> = ({imgSrc, title}) => {
    return (
        <MainContainer>
            <img src={imgSrc} alt="recipe img" style={{width: "100%", height: "70%", objectFit: "cover", borderRadius: "1rem"}}/>
            <h2>{title}</h2>
        </MainContainer>
    );
}

export default RecipeCard;