import React, { useState, useEffect } from "react";
import {
    StyledHeader,
    StyledHeaderList,
    StyledHeaderLogo,
    StyledHeaderTitle,
    StyledHeaderMenuButton,
} from "../styled/StyledCollection";

function Header() {
    const [list, setList] = useState<boolean>(false);
    const [back, setBack] = useState<boolean>(false);
    const onClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("click button clear!");
        setList(!list);
    };
    const onClickGirlPerfume = (event: React.MouseEvent<Element>) => {
        event.preventDefault();
        console.log("여성향수 클릭");
    };
    const onClickManPerfume = (event: React.MouseEvent<Element>) => {
        event.preventDefault();
        console.log("남성향수 클릭");
    };
    const onClickBothPerfume = (event: React.MouseEvent<Element>) => {
        event.preventDefault();
        console.log("공용향수 클릭");
    };
    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 100) {
                setBack(true);
            } else {
                setBack(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return (
        <StyledHeader toggle={list} back={back}>
            <StyledHeaderList toggle={list}>
                <li onClick={onClickGirlPerfume}>여성향수</li>
                <li onClick={onClickManPerfume}>남성향수</li>
                <li onClick={onClickBothPerfume}>공용향수</li>
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
