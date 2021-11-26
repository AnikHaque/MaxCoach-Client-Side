import React from 'react';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images1/banner1.jpg'
import './Banner.css'
import { Button } from '@mui/material';
import { padding } from '@mui/system';
const button = {
    marginLeft:'590px',
   paddingLeft:'40px',
   paddingRight:'40px',
   paddingTop:'10px',
   paddingBottom:'10px',
   backgroundColor:'#3a7e69'
}
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
       <div >
        <Slider {...settings}>
        <div className="banner1">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
        <h5 className="text-center banner-sub">CHANGE YOUR LIFE</h5>
        <h1 className="text-center fw-bold banner-title">Health Coaching <br></br>Just Got <span className="title-extra">Easier!</span></h1>
        <Button style={button} variant="contained">Get Started Today</Button>
        </Grid>  
      </Grid>
    </Box>
        </div>
        <div className="banner2">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
        <h6 className="text-center banner-sub">SPREAD HEALTH AND HAPPINESS</h6>
        <h1 className="text-center fw-bold banner-title">Spark the <span className="title-extra">Change,</span> first for <br></br>you, then for others</h1>
        <Button style={button} variant="contained">Get Started Today</Button>
        </Grid>  
      </Grid>
    </Box>
        </div>
      </Slider>
      </div>
        
    );
};

export default Banner;