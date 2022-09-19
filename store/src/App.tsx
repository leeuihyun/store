import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LogInPage from "./pages/LogInPage";
import PerfumePage from "./pages/PerfumePage";
import ManPerfumePage from "./pages/ManPerfumePage";
import GirlPerfumePage from "./pages/GirlPerfumePage";
import BothPerfumePage from "./pages/BothPerfumePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="login" element={<LogInPage />}></Route>
            <Route path="perfume" element={<PerfumePage />}></Route>
            <Route path="/girl" element={<GirlPerfumePage />}></Route>
            <Route path="/man" element={<ManPerfumePage />}></Route>
            <Route path="/both" element={<BothPerfumePage />}></Route>
        </Routes>
    );
}

export default App;
