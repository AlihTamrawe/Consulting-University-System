import React, { useState } from 'react'
 import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
 import { Avatar, Box, Button, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from '@mui/material'
import { Container } from '@mui/material'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
 
const Register = () => {
    const [backendErrors, setBackendErrors] = useState([])
 
     
    const navigate = useNavigate()
    // formhook replacing onChange, to deal with user inputs & handleSubmit function & errors
    
    // when actual submitting happens
    // const onSubmit = (formUser, e) => {
    //     e.preventDefault();
    //     axios.post(`http://localhost:8000/api/signup`, formUser)
    //         .then((res) => {
    //             // save this user in local storage // replacing cookies 
    //             localStorage.setItem('user', JSON.stringify(res.data));
    //             // change the global state for this user once login/register is done
    //             // dispatch({ type: 'LOGIN', payload: res.data })
    //         })
    //         .then(() => navigate(`/`))
    //         .catch(err => 
    //             {
    //             const errorResponse = err.response.data.errors; // Get the errors from err.response.data
    //             const errorArr = []; // Define a temp error array to push the messages in
    //             for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
    //                 errorArr.push(errorResponse[key].message)
    //             }
    //             setBackendErrors(errorArr);
    //         })
    // }
    const theme = createTheme();

    return (
        <Box
            sx={{
                // backgroundImage: `url(${social2})`,
                // backgroundSize: 'cover',
                // width: `calc(90vw)`,
                // height: "90vh",
                // backgroundPosition: 'center',
                // margin: '1rem auto',
                // padding: '1rem',
            }}
        >
            <ThemeProvider theme={theme} className="test">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",


                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LoginRoundedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box
                            component='form'
                            // onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <Typography component="h1" variant="h5">
                             </Typography>
                            <TextField
                                 margin="normal"
                                // required
                                fullWidth
                                type='text'
                                label="Username"
                                placeholder='Enter username...'
                                // autoComplete="userName"
                                autoFocus
                              
                            />
                            <TextField
                                margin="normal"
                                 // required
                                fullWidth
                                type='email'
                                label="Email"
                                placeholder='Enter email...'
                                // autoComplete="Email"
                                autoFocus
                           
                            />
                            <TextField
                                margin="normal"
                                 // required
                                type='password'
                                fullWidth
                                label="Password"
                                placeholder='Enter password...'
                                // autoComplete="password"
                                autoFocus
                              
                            />
                          
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to={`/login`} variant="body2">
                                        Have an account? Sign In
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
        </Box>
    )
}

export default Register