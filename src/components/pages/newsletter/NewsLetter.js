import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const newslettersection = {
      backgroundColor:'#45695e',
      marginTop:'200px',
      paddingTop:'50px',
      paddingBottom:'50px',
      color:'white'
  }
  

const NewsLetter = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={newslettersection}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h1 className="mx-4">Newsletter to get in <br></br> touch
</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Your e-mail" variant="outlined" className="bg-light"/>
    </Box>
    
        </Grid>
        
        
      </Grid>
    </Box>
    );
};

export default NewsLetter;