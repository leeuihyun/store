import React from "react";
import { NewPageButton } from "../styled/StyledCollection";

interface propsType {
    children?: string;
}
function NewPageButtonDiv(props: propsType) {
    const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("click button clear");
        window.open("/login"); // 버튼 클릭시 탭에 새로운 페이지 하나 추가.
    };
    return (
        <NewPageButton onClick={onClickButton}>{props.children}</NewPageButton>
    );
}

export default NewPageButtonDiv;
