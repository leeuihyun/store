import React from "react";
import { SearchButton } from "../styled/StyledCollection";

interface buttonProps {
    children?: string;
    onClick: onClickSearch;
}
function SearchButtonDiv(props: buttonProps) {
    return (
        <SearchButton onClick={props.onClick}>{props.children}</SearchButton>
    );
}

export default SearchButtonDiv;
