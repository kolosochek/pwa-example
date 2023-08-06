import React from 'react';
import './App.css';
import {IndexPage} from "./pages/index/IndexPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/about/AboutPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </Router>

    );
}

export default App;
