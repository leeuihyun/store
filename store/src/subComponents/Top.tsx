import React, { useEffect, useState } from "react";
import { StyledTop } from "../styled/StyledCollection";

function Top() {
    const [back, setBack] = useState<boolean>(false);
    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 100) {
                setBack(true);
            } else {
                setBack(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return <StyledTop back={back}>top</StyledTop>;
}

export default Top;
