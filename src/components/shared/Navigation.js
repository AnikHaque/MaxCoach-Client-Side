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
color:'white',
textDecoration:'none'
}

const navImage = {
    width:'130px'
}
const navigation = {
  paddingTop:'10px',
  paddingBottom:'10px',
  backgroundColor:'#3a7e69'
 
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
           <Link to="/home" style={navigationLink}>
           <Button className="text-white">Home</Button>
           </Link>
           <Link to="/about" style={navigationLink}>
           <Button className="text-white">About</Button>
           </Link>
           <Link to="/courses" style={navigationLink}>
           <Button className="text-white">Courses</Button>
           </Link>
           <Link to="/blogs" style={navigationLink}>
           <Button className="text-white">Blogs</Button>
           </Link>
           <Link to="/events" style={navigationLink}>
           <Button className="text-white">Events</Button>
           </Link>
           <Link to="/contact" style={navigationLink}>
           <Button className="text-white">Contact</Button>
           </Link>
           <Link to="/dashboard" style={navigationLink}>
           <Button className="text-white">Dashboard</Button>
           </Link>
          {
            user?.email ?
            <div>
              <Link to="/myorder" style={navigationLink}>
           <Button className="text-white">My Orders</Button>
           </Link>
            <Button  style={navigationLink}>{user.email}</Button>
            <Button onClick={logOut} style={navigationLink}>Logout</Button>
            </div>
            :
            <Link to="/Login" >
            <button className="btn btn-warning">Login</button>
            </Link>
          }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;