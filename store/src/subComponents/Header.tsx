import React, { useState } from "react";
import {
    StyledHeader,
    StyledHeaderList,
    StyledHeaderLogo,
    StyledHeaderTitle,
    StyledHeaderMenuButton,
} from "../styled/StyledCollection";

function Header() {
    const [list, setList] = useState<boolean>(false);
    const onClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("click button clear!");
        setList(!list);
    };
    return (
        <StyledHeader toggle={list}>
            <StyledHeaderList toggle={list}>
                <li>여성향수</li>
                <li>남성향수</li>
                <li>공용향수</li>
            </StyledHeaderList>
            <StyledHeaderTitle>PAFFEM</StyledHeaderTitle>
            <StyledHeaderLogo>🗝 PF</StyledHeaderLogo>
            <StyledHeaderMenuButton onClick={onClickMenu}>
                ⏚
            </StyledHeaderMenuButton>
        </StyledHeader>
    );
}

export default Header;
