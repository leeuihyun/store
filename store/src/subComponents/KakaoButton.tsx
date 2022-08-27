import React from "react";
import { REST_API_KEY, REDIRECT_URI } from "../kakao/KakaoLogInData";
import { StyleKakaoButton } from "../styled/StyledCollection";

function KakaoButton() {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const onClickLogIn = () => {
        window.location.href = KAKAO_AUTH_URL;
    };
    return (
        <StyleKakaoButton onClick={onClickLogIn}>
            카카오 로그인
        </StyleKakaoButton>
    );
}

export default KakaoButton;
