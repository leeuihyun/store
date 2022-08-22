import React from "react";
import styled from "styled-components";
import { REST_API_KEY, REDIRECT_URI } from "../kakao/KakaoLogInData";

function MainComponents() {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const onClickLogIn = () => {
        window.location.href = KAKAO_AUTH_URL;
    };
    return (
        <div>
            MainComponents
            <div>
                <button onClick={onClickLogIn}>카카오 시작 버튼</button>
            </div>
        </div>
    );
}

export default MainComponents;
