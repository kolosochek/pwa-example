import React from 'react';
import './App.css';
import {IndexPage} from "./pages/index/IndexPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/about/AboutPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="*" element={<IndexPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
