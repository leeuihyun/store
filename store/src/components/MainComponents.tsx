import React from "react";
import Top from "../subComponents/Top";
import Header from "../subComponents/Header";
import { StyledMainComponentDiv } from "../styled/StyledCollection";

function MainComponents() {
    return (
        <StyledMainComponentDiv>
            <Top />
            <Header />
            hi
        </StyledMainComponentDiv>
    );
}

export default MainComponents;
