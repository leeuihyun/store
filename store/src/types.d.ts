interface AllState {
    logInLoading: boolean;
    logInDone: boolean;
    logInError: null | string;
    logOutLoading: boolean;
    logOutDone: boolean;
    logOutError: null | string;
    wishLoading: boolean;
    wishDone: boolean;
    wishError: null | object;
    wishData: Array<>;
    cancelLoading: boolean;
    cancelDone: boolean;
    cancelError: null | string;
}

type onClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => void;
