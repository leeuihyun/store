import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
        </Routes>
    );
}

export default App;
