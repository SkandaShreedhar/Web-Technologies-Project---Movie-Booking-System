import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const labelStyle = {mt:1,mb:1};
const AuthForm = ({onSubmit, isAdmin}) => {
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        password:"",
    });
    const [isSignup, setIsSignup] = useState(false);
    const handleChange = (e) =>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,
        }));
    };

    // PROBLEM

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({inputs,signup: isAdmin?false:isSignup});
    };
    return (
    <Dialog PaperProps={{style:{borderRadius:20}}} open={true}>
        <Box sx={{ml:"auto",padding:1}}>
            <IconButton>
                <CloseRoundedIcon />
            </IconButton>
        </Box>
        <Typography variant="h4" textAlign={"center"}>
            {isSignup?"Signup":"Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box
            padding={6}
                display={'flex'}
                justifyContent={'center'}
                flexDirection="column"
                width={400}
                margin="auto"
                alignContent={"center"}
            >
                { !isAdmin && isSignup && ( 
                <>
                {" "}
                <FormLabel sx={labelStyle}>Name</FormLabel>
                <TextField
                    value={inputs.name}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                    type={"text"}
                    name="name"
                />
                </>
                )}
                <FormLabel sx={labelStyle}>Email</FormLabel>
                <TextField
                    value={inputs.email}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                    type={"email"}
                    name="email"
                />
                <FormLabel sx={labelStyle}>Password</FormLabel>
                <TextField
                    value={inputs.password}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                    type={"password"}
                    name="password"
                />
                <Button 
                    sx={{mt:2,borderRadius:10,bgcolor:"#2b2d42"}}
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    {isSignup?"Signup":"Login"}
                </Button>
                { !isAdmin && <Button 
                    onClick={()=>setIsSignup(!isSignup)}
                    sx={{mt:2,borderRadius:10}}
                    fullWidth
                >
                    Switch To {isSignup?"Login":"Signup"}
                </Button>}
            </Box>
        </form>
    </Dialog>
    );
};

export default AuthForm;