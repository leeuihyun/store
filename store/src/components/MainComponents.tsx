import React, { useState } from "react";
import Top from "../subComponents/Top";
import Header from "../subComponents/Header";
import NewPageButtonDiv from "../subComponents/NewPageButtonDiv";
import { StyledMainComponentDiv } from "../styled/StyledCollection";
import SearchButtonDiv from "../subComponents/SearchButtonDiv";
import axios from "axios";

function MainComponents() {
    const [arr, setArr] = useState();
    const onClickButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("click button2");
        const url = `/v1/search/shop.json`;
        await axios
            .get(url, {
                params: {
                    query: "모자",
                    display: 10,
                },
                headers: {
                    "X-Naver-Client-Id": `eXLSdjS_rWMbvWtV5IAN`,
                    "X-Naver-Client-Secret": `XlMpKxqWdC`,
                    "Content-Type": "plain/text",
                },
            })
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    };
    return (
        <StyledMainComponentDiv>
            <Top />
            <Header />
            <NewPageButtonDiv>뉴페이지</NewPageButtonDiv>
            <SearchButtonDiv onClick={onClickButton}>
                데이터 가져오기
            </SearchButtonDiv>
        </StyledMainComponentDiv>
    );
}

export default MainComponents;
