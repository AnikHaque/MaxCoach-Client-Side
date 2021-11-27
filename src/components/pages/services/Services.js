import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Product from '../product/Product';
// import './Explore.css'
import bg from '../../../images1/banner1.jpg';
import { Grid, Typography } from '@mui/material';

const bannerBg={
    background:`url(${bg})`,
   
    backgroundSize:'cover',
    height:'80vh'
}
const bannerText={
    fontSize:'75px',
    color:'white',
    fontWeight:'bolder',
    textAlign:'center',
    marginTop:'50px'

}
const servicetitle = {
textAlign:'center',
marginLeft:'500px',
fontWeight:'bolder',
fontSize:'70px',
marginTop:'200px',
color:'#264653'
}
const spanpart = {
    color:'#3a7e69'
}

const Services = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://thawing-harbor-64472.herokuapp.com/coaching')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
       
        <div id="services">
             <Grid style={bannerBg} container spacing={2}>
          <h1 style={servicetitle}>See Our <span style={spanpart}>Courses</span></h1>
        </Grid>
           
            <div className="service-container bg-dark pb-5 pt-5">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
    
};

export default Services;