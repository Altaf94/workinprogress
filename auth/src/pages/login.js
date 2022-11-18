import { Grid, Box, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { GetData } from '../firebase/firebasemethod'
import { useNavigate } from "react-router-dom";




const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const obj = {
        email,
        password
    }

    const GettingData = () => {

        GetData(obj).then((sucess) => {
            console.log("sucess")
            navigate("/DashBoard")
        })
            .catch((error) => {
                console.log(error)
            });
    }

    return (

        <Grid>
            <Box>

                <Box sx={{ padding: "6rem", alignItems: "center", gap: "2rem", display: "flex", flexDirection: "column" }}>
                    <h1>Login</h1>
                    <TextField onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email" type="text" />
                    <TextField onChange={(e) => setPassword(e.target.value)} variant="outlined" label="Password" type="password" />
                    <Box style={{ margin: "auto" }}><Button variant="contained" onClick={GettingData}>Login</Button>
                    </Box>
                </Box>
            </Box>

        </Grid>

    )
}

export { Login }