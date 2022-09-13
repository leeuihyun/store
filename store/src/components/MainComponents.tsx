import React from "react";
import Top from "../subComponents/Top";
import Header from "../subComponents/Header";
import NewPageButtonDiv from "../subComponents/NewPageButtonDiv";
import { StyledMainComponentDiv } from "../styled/StyledCollection";

function MainComponents() {
    return (
        <StyledMainComponentDiv>
            <Top />
            <Header />
            <NewPageButtonDiv>뉴페이지</NewPageButtonDiv>
        </StyledMainComponentDiv>
    );
}

export default MainComponents;
