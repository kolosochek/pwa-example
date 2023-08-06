import React from 'react';
import './App.css';
import {IndexPage} from "./pages/index/IndexPage";
import {createTheme, CssBaseline, ThemeOptions, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/about/AboutPage";

function getTheme():ThemeOptions {
    return {
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    background: "#0EA5E9"
                }
            },
        }
    }
}

function App() {
    const theme = createTheme()
  return (
      <Router>
          <ThemeProvider theme={theme}>
              <CssBaseline>
                  <Routes>
                      <Route path="/" element={<IndexPage />} />
                      <Route path="/about" element={<AboutPage />} />
                  </Routes>
              </CssBaseline>
          </ThemeProvider>

      </Router>

  );
}

export default App;
