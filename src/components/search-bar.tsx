import styled from "styled-components";
import colorPalette from "../assets/color-palette";
import SearchIcon from "../assets/icons/search.svg?react";
import CrossIcon from "../assets/icons/x.svg?react";
import { SetStateAction, useState } from "react";

const MainContainer = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 8rem;
`;

const SearchBarContainer = styled.div`
    border-radius: 100px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 4rem;
    width: 100%;
    margin: 0 2rem;
    background-color: ${colorPalette.creme};
    border: 1px solid ${colorPalette.brown}
`;

const SearchBarStyled = styled.input`
    background-color: ${colorPalette.creme};
    border: 0px solid;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 1.1rem;
`;

const SearchIconStyled = styled(SearchIcon)`
    margin: 0 1rem;
    stroke: ${colorPalette.brown};
`;

const CrossIconStyled = styled(CrossIcon)`
    margin: 0 1rem;
    stroke: ${colorPalette.brown};
    cursor: pointer;
`;

const SearchBar = () => {

    const [barContent, setBarContent] = useState("");

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setBarContent(e.target.value);
    }

    const deleteBarContent = () => {
        setBarContent("");
    };

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
                <SearchIconStyled/>
                <SearchBarStyled value={barContent} onChange={handleInputChange} type="text" placeholder="Search ingredients ..." />
                <CrossIconStyled onClick={deleteBarContent} />
            </SearchBarContainer>
        </MainContainer>
    )
}

export default SearchBar;