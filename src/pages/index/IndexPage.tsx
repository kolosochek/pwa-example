import {Box, Button, FormGroup, Grid, TextField} from "@mui/material";
import logo from "../../logo.svg";
import React, {useCallback} from "react";

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
                                <Button type="submit">Log in</Button>
                            </FormGroup>
                        </form>
                    </Box>
                    <Box component={"footer"} className="b-footer">
                        <input type="file" accept="image/*" capture="camera" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}