import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {IndexPage} from "./pages/index/IndexPage";
import {ErrorPage} from "./pages/error/ErrorPage";
import {AboutPage} from "./pages/about/AboutPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
}

export default App;
