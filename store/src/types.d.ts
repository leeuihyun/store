declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

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
    getDataLoading: boolean;
    getDataDone: boolean;
    getDataError: null | objects;
    data: null | Array<>;
}

interface Perfume {
    title: string;
    brand: string;
    image: string;
    productId: string;
    productType: string;
    category1?: string;
    category2?: string;
    category3?: string;
    category4?: string;
}

type onClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => void;
