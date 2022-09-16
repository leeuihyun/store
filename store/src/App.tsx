import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LogInPage from "./pages/LogInPage";
import PerfumePage from "./pages/PerfumePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="login" element={<LogInPage />}></Route>
            <Route path="perfume" element={<PerfumePage />}></Route>
        </Routes>
    );
}

export default App;
