import React from 'react';
import './App.css';
import {IndexPage} from "./pages/index/IndexPage";
import {Box} from "@mui/material";

function App() {
  return (
      <Box sx={{
        background: "#0EA5E9",
      }}>
        <IndexPage />
      </Box>
  );
}

export default App;
