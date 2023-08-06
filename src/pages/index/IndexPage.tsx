import {Box, Button, FormGroup, Grid, TextField} from "@mui/material";
import logo from "../../logo.svg";
import React from "react";

export const IndexPage = () => {
    return (
        <Box className="b-app-wrapper">
            <Grid container className="b-app">
                <Grid item>
                    <Box component={"header"} className="b-header">
                        <img src={logo} alt={"app logo"}  height={200} />
                    </Box>
                    <Box component={"main"} className="b-main">
                        <form action="/about" method="GET">
                            <FormGroup>
                                <TextField label={"Username"} />
                                <TextField label={"Password"} />
                                <Button onClick={() => {}}>Log in</Button>
                            </FormGroup>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}