import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const navigationLink =  {
color:'black',
textDecoration:'none'
}

const navImage = {
    width:'130px'
}
const navigation = {
  paddingTop:'10px',
  paddingBottom:'10px',
  backgroundColor:'white'
}
const Navigation = () => {
  const {user,logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={navigation}>
          <Toolbar>
              {/* <MenuIcon /> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img style={navImage} src="https://maxcoach.vuedemo.hasthemes.com/images/logo/dark-logo.png"></img>
            </Typography>
           <Link to="/home">
           <Button style={navigationLink}>Home</Button>
           </Link>
           <Link to="/about">
           <Button style={navigationLink}>About</Button>
           </Link>
           <Link to="/courses">
           <Button style={navigationLink}>Courses</Button>
           </Link>
           <Link to="/blogs">
           <Button style={navigationLink}>Blogs</Button>
           </Link>
           <Link to="/events">
           <Button style={navigationLink}>Events</Button>
           </Link>
           <Link to="/contact">
           <Button style={navigationLink}>Contact</Button>
           </Link>
           <Link to="/dashboard">
           <Button style={navigationLink}>Dashboard</Button>
           </Link>
          {
            user?.email ?
            
            <Button onClick={logOut} style={navigationLink}>Logout</Button>
            :
            <Link to="/Login">
            <Button style={navigationLink}>Login</Button>
            </Link>
          }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;