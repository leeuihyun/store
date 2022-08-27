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
            <StyledHeaderTitle>무신사</StyledHeaderTitle>
            <StyledHeaderList toggle={list}>
                <li>쥬얼리</li>
                <li>남성 옷</li>
                <li>여성 옷</li>
                <li>전자 제품</li>
            </StyledHeaderList>
            <StyledHeaderLogo>로고</StyledHeaderLogo>
            <StyledHeaderMenuButton onClick={onClickMenu}>
                메뉴
            </StyledHeaderMenuButton>
        </StyledHeader>
    );
}

export default Header;
