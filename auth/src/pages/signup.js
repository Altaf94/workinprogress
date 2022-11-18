import { Grid, Box, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { userSigning } from "../firebase/firebasemethod";
import { useNavigate } from "react-router-dom";




const SignUp = () => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const obj = {
   username,
   email,
   password    }
    
   const SendData = () => {
    
        userSigning(obj).then((sucess) => {
           console.log("sucess")
           navigate("/login")
        })
            .catch((error) => {
               console.log(error)
            });   
    }

    return (

            <Grid style={{backgroundColor: 'lightblue'}}>
                <Box>
                    
                    <Box sx={{ padding:"6rem",alignItems:"center", gap:"2rem", display:"flex", flexDirection:"column"}}>
                        <h1>SignUp</h1>
                        <TextField onChange={(e) => setUserName(e.target.value)} variant="outlined" label="Username" type="text" />
                        <TextField onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email" type="text" />
                        <TextField onChange={(e) => setPassword(e.target.value)} variant="outlined" label="Password" type="password" />
                        <TextField variant="outlined" label=" Confirm Password" type="password" />
                        <Box style={{ margin: "auto" }}><Button variant="contained" onClick={SendData}>Sign in</Button>
                        </Box>
                    </Box>
                </Box>

            </Grid>
    )
}


export default SignUp ;

