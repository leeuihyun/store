import React, { useState } from "react";
import styled from "styled-components";
import { REST_API_KEY, REDIRECT_URI } from "../kakao/KakaoLogInData";
import { wish } from "../reducers/userSlice";
import { useAppDispatch } from "../hooks";

function MainComponents() {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const dispatch = useAppDispatch();
    const onClickLogIn = () => {
        window.location.href = KAKAO_AUTH_URL;
    };
    const onClickWish1 = () => {
        dispatch(wish(1));
    };
    const onClickWish2 = () => {
        dispatch(wish(2));
    };
    return (
        <div>
            MainComponents
            <div>
                <button onClick={onClickLogIn}>카카오 시작 버튼</button>
            </div>
            <div>
                <button onClick={onClickWish1}>1번 찜하기</button>
            </div>
            <div>
                <button onClick={onClickWish2}>2번 찜하기</button>
            </div>
        </div>
    );
}

export default MainComponents;
