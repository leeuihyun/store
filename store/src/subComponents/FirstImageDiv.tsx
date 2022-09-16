import React from "react";
import { ImageDivStyle } from "../styled/StyledCollection";
import img from "../images/happy-mothers-day-g317bacce0_1920.jpg";

function FirstImageDiv() {
    return (
        <ImageDivStyle imgSrc={img}>
            <div>test</div>
        </ImageDivStyle>
    );
}

export default FirstImageDiv;
