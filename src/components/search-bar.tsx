import styled from "styled-components";
import colorPalette from "../assets/color-palette";
// import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import SearchIcon from "../assets/icons/search.svg";
import CrossIcon from "../assets/icons/x.svg";

const MainContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 8rem;
    background-color: ${colorPalette.creme};
    box-shadow: 0px 10px 10px 10px ${colorPalette.creme};
`;

const SearchBarContainer = styled.div`
    border-radius: 100px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 4rem;
    width: 100%;
    margin: 0 2rem;
    background-color: ${colorPalette.light_green};
`;

const SearchBarStyled = styled.input`
    background-color: ${colorPalette.light_green};
    border: 0px solid;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 1.1rem;
`;

const SearchBar = () => {
    return (
        <MainContainer>
            <div style={{
                width: "200px",
                height: "3rem",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                color: "white",
            }}>LOGO</div>
            <SearchBarContainer>
                {/* <SearchIcon/> */}
                <img src={SearchIcon} alt="icon" style={{margin: "0 1rem"}}/>
                <SearchBarStyled type="text" placeholder="Search ingredients ..." />
                <img src={CrossIcon} alt="icon" style={{margin: "0 1rem"}}/>
            </SearchBarContainer>
            <div style={{
                backgroundColor: "yellow",
            }}>

            </div>
        </MainContainer>
    )
}

export default SearchBar;