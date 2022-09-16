import React, { useState } from "react";
import Top from "../subComponents/Top";
import Header from "../subComponents/Header";
import NewPageButtonDiv from "../subComponents/NewPageButtonDiv";
import { StyledMainComponentDiv } from "../styled/StyledCollection";
import SearchButtonDiv from "../subComponents/SearchButtonDiv";
import axios from "axios";

function MainComponents() {
    const [arr, setArr] = useState<Perfume[] | null>(null);
    const onClickButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("click button2");
        const url = `/v1/search/shop.json`;
        await axios
            .get(url, {
                params: {
                    query: "향수",
                    display: 100,
                },
                headers: {
                    "X-Naver-Client-Id": `eXLSdjS_rWMbvWtV5IAN`,
                    "X-Naver-Client-Secret": `XlMpKxqWdC`,
                    "Content-Type": "plain/text",
                },
            })
            .then((res) => {
                setArr(res.data.items);
                console.log(res.data.items);
            })
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
            <div>
                {arr &&
                    arr.map((v) => {
                        //const num: number = v.title.indexOf("<");
                        //console.log(num);

                        if (v.title.includes("<b>향수</b>")) {
                            v.title = v.title.replace("<b>향수</b>", " ");
                        }
                        if (v.title.includes("<b>퍼퓸</b>")) {
                            v.title = v.title.replace("<b>퍼퓸</b>", " ");
                        }

                        return <div key={v.productId}>{v.title}</div>;
                    })}
            </div>
        </StyledMainComponentDiv>
    );
}

export default MainComponents;
