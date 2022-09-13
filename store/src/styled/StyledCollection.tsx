import styled from "styled-components";

export const StyleKakaoButton = styled.button`
    background-color: yellow;
    color: black;
    width: 200px;
    height: 100px;
`;

export const StyledMainComponentDiv = styled.div`
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

export const StyledTop = styled.div`
    width: 100%;
    height: 30px;
    background-color: gray;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "surroundAir";
`;

export const StyledHeader = styled.div<{ toggle: boolean }>`
    width: 100%;
    height: 100px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "surroundAir";
    @media screen and (max-width: 600px) {
        height: ${(props) => (props.toggle === true ? "auto" : "45px")};
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const StyledHeaderTitle = styled.div`
    cursor: pointer;
    padding-left: 12px;
    @media screen and (max-width: 600px) {
        padding-top: 12px;
    }
`;

export const StyledHeaderList = styled.div<{ toggle: boolean }>`
    list-style: none;
    display: flex;
    li {
        padding: 8px 8px;
    }
    @media screen and (max-width: 600px) {
        display: ${(props) => (props.toggle === true ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        height: ${(props) => (props.toggle === true ? "100vh" : "auto")};
        li {
            width: 100%;
            text-align: center;
        }
    }
`;
export const StyledHeaderLogo = styled.div`
    padding-right: 15px;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;
export const StyledHeaderMenuButton = styled.button`
    display: none;
    @media screen and (max-width: 600px) {
        display: block;
        position: absolute;
        right: 12px;
        margin-top: 12px;
    }
`;

export const NewPageButton = styled.button`
    margin-top: 5px;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    border: none;
    color: white;
    background-color: black;
`;
export const StyledBottom = styled.div``;
export const StyledFooter = styled.div``;
