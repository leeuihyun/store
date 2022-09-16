import React from "react";
import { ImageDivStyle } from "../styled/StyledCollection";
import img from "../images/filmstrip-gc7031bada_1920.jpg";

function SecondImageDiv() {
    return (
        <ImageDivStyle imgSrc={img} first={false}>
            <div className="title">향기는 당신을 기억하게 합니다.</div>
            <div className="content">PAFFEM</div>
        </ImageDivStyle>
    );
}

export default SecondImageDiv;
