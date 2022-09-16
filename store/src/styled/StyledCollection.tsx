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
    height: 60px;
    background-color: black;
    color: white;
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

    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        padding-top: 12px;
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

export const ImageDivStyle = styled.div<{ imgSrc: string }>`
    width: 100%;
    height: 630px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("${(props) => props.imgSrc}");
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 30px;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 767px) {
        height: 350px;
    }
`;

export const StyledBottom = styled.div``;
export const StyledFooter = styled.div``;
