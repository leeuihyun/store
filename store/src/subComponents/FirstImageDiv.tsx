import React from "react";
import { ImageDivStyle } from "../styled/StyledCollection";
import img from "../images/happy-mothers-day-g317bacce0_1920.jpg";

function FirstImageDiv() {
    return (
        <ImageDivStyle imgSrc={img} first={true}>
            <div className="title">당신만의 향수를 찾아보세요</div>
            <div className="content">PAFFEM이 함께 합니다.</div>
        </ImageDivStyle>
    );
}

export default FirstImageDiv;
