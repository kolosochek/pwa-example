import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Button, FormGroup, Grid, TextField} from "@mui/material";

function App() {
  return (
    <Box className="b-app-wrapper">
      <Grid container className="b-app">
          <Grid item>
              <Box component={"header"} className="b-header">
                  <img src={logo} alt={"app logo"}  height={200} />
              </Box>
              <Box component={"main"} className="b-main">
                  <form>
                      <FormGroup>
                          <TextField label={"Username"} />
                          <TextField label={"Password"} />
                          <Button type={"submit"}>Log in</Button>
                      </FormGroup>
                  </form>
              </Box>
              <Box component={"footer"} className="b-footer">

              </Box>
          </Grid>
      </Grid>
    </Box>
  );
}

export default App;
