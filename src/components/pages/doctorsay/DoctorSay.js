import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const doctortitle = {
      fontStyle:'italic',
      fontSize:'40px',
      color:'#3f3a64',
      marginTop:'50px',
      marginLeft:'10px'
  }
const doctorSection = {
    marginTop:'200px'
}

const DoctorSay = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }} style={doctorSection}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p style={doctortitle}>I’m now kinder to myself and am happier, not just because I lost weight, but because I learned to appreciate and take care of myself.</p>
            <h5 className="mx-5">Maggie Strickland</h5>
            <p className="mx-5">Marketer in Seattle</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
           <img src="https://maxcoach.vuedemo.hasthemes.com/images/testimonial/695/health-coaching-testimonial-image-01.jpg" className="img-fluid"></img>
          </Grid>
          
          
        </Grid>
      </Box>
    );
};

export default DoctorSay;