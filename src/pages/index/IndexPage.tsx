import {Box, Button, FormGroup, Grid, TextField} from "@mui/material";
import logo from "../../logo.svg";
import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export const IndexPage = () => {
    const navigator = useNavigate()
    const handleFormSubmit = useCallback(() => {
        navigator("/about")
    }, [])
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
                                <Button onClick={handleFormSubmit}>Log in</Button>
                            </FormGroup>
                        </form>
                    </Box>
                    <Box component={"footer"} className="b-footer">

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}