import styled, { keyframes } from "styled-components";

export const slow = keyframes`
    
`;
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

export const StyledTop = styled.div<{ back?: boolean }>`
    width: 100%;
    height: 30px;
    z-index: 1000;
    transition-property: "background-color";
    transition-duration: 2s;
    background-color: ${(props) => (props.back ? "black" : "white")};
    color: ${(props) => (props.back ? "white" : "black")};
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    font-family: "surroundAir";
    top: 0;
`;

export const StyledHeader = styled.div<{ toggle: boolean; back?: boolean }>`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 30px;
    transition-property: "background-color";
    transition-duration: 2s;
    background-color: ${(props) => (props.back ? "black" : "white")};
    color: ${(props) => (props.back ? "white" : "black")};
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "surroundAir";
    @media screen and (max-width: 767px) {
        height: ${(props) => (props.toggle === true ? "auto" : "45px")};
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledHeaderTitle = styled.div`
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        padding-top: 12px;
        font-size: 20px;
    }
`;

export const StyledHeaderList = styled.div<{ toggle: boolean }>`
    list-style: none;
    width: 33%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        cursor: pointer;
        padding: 8px 8px;
    }
    @media screen and (max-width: 767px) {
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;
export const StyledHeaderMenuButton = styled.button`
    display: none;
    color: white;
    background-color: black;
    border: none;
    @media screen and (max-width: 767px) {
        display: block;
        position: absolute;
        left: 12px;
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

export const SearchButton = styled.button`
    margin-top: 5px;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    border: none;
    color: white;
    background-color: black;
`;

export const ImageDivStyle = styled.div<{ imgSrc: string; first: boolean }>`
    width: 100%;
    height: 720px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("${(props) => props.imgSrc}");
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: bold;
    color: white;
    top: ${(props) => props.first && "90px"};
    .title {
        font-size: 32px;
    }
    .content {
        font-size: 20px;
    }
    @media screen and (max-width: 767px) {
        top: ${(props) => props.first && "75px"};
        height: 400px;
        .title {
            font-size: 18px;
        }
        .content {
            font-size: 12px;
        }
    }
`;

export const StyledBottom = styled.div``;
export const StyledFooter = styled.div`
    width: 100%;
    height: 300px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
`;
