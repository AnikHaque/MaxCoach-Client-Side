import { Container, Grid, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import login from '../../../images/login.png'
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const loginImage = {
    width:'580px'
}
const Login = () => {

const [loginData,setLoginData] = useState({})
const {user,loginUser,isLoading,authError,signInWithGoogle}=useAuth()

const location = useLocation();
const history = useHistory();

const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
}

    const handleLoginSubmit = e => {
    loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(useLocation,useHistory);
    }
    return (
        <Container>
 <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
<h1 className="text-center fw-bold">Please Login</h1>
          </Typography>

<form onSubmit={handleLoginSubmit} className="bg-success text-white p-5 login">
<TextField 
sx={{width:'75%', m:1}}
name="email"
id="standard-basic" 
label="Your Email"
onChange={handleOnChange}
 variant="standard"

  />
<TextField
sx={{width:'75%', m:1}}
name="password"
          id="standard-basic"
          label="Your Password"
          onChange={handleOnChange}
          type="password"
          variant="standard"
/>
<Button sx={{width:'75%', m:1}} variant="contained" type="submit">Login</Button>
<Link style={{textDecoration:'none', marginLeft:'50px'}} to="/register">
<Button variant="text" className="text-white">First Time Here??? Please Register</Button>

</Link>

</form>
<p>.................................</p>
    
<Button onClick={handleGoogleSignIn} className="bg-success text-white px-5 pe-5 pt-3 pb-3">Sign In With Google</Button>
{
    isLoading && <CircularProgress color="inherit" />

}
{
    user?.email && <Alert severity="success">Successfully Logged In</Alert>

}
{
    authError && <Alert severity="error">Login Failed!!!</Alert>


}

        </Grid>
        <Grid item xs={12} md={6}>
        <img src={login} style={loginImage}></img>
        </Grid>
        
        
      </Grid>
        </Container>
    );
};

export default Login;