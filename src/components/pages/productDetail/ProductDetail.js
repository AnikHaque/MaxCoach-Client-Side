import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography
} from '@mui/material';
import bg from '../../../images1/banner1.jpg';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './productDetail.css';
import Footer from '../footer/Footer'

const productdetailsImage = {
    width:'700px'
}

const bannerBg={
    background:`url(${bg})`,
   
    backgroundSize:'cover',
    height:'80vh'
}
const servicetitle = {
    textAlign:'center',
    paddingLeft:'280px',
    paddingTop:'200px',
    fontWeight:'bolder',
    fontSize:'70px',
    color:'#264653'
    }

const ProductDetail = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [product,setProduct] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/coaching/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        data.status="pending";
        console.log(data);
        axios.post("http://localhost:5000/orders",data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
                
            }
        })
    } 
    return (
        <div> 
            <div className="product-detail mt-3 mb-5"style={bannerBg}>
                <h1 style={servicetitle}>Enroll To Our Course</h1>
            </div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
            <Typography>
            
          <img style={productdetailsImage} src={product.img}></img>
          <h4 className="text-center">{product.name1}</h4>
          <h2 className="text-center">Price: $ {product.price}</h2>
          </Typography>
        </Grid>
        <Grid item xs={7}>
          

        <h1 className="text-center fw-bold">Enroll The Course</h1>
        
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true, maxLength: 200 })} placeholder="name"  defaultValue={user.email} />
<br></br>
<br></br>
      <input {...register("name1", { required: true, maxLength: 200 })} placeholder="Student Name"/>
<br></br>
<br></br>
      
      <textarea {...register("description")} placeholder="Provide Address"/>
      <br></br>
      <br></br>
      
      <input type="number" {...register("price")}placeholder="Phone Number"/>
      <br></br>
      <br></br>
      <input type="number" {...register("price")}placeholder="Course Price"/>
      <br></br>
      <br></br>
      
      <input {...register("img")} placeholder="Course  image url"/>
      <br></br>
      <br></br>
      
      <input type="submit" value="Enroll Now" />
    </form>



        </Grid> 
      </Grid>
    </Box>
    <Footer></Footer>
</div>
    );
};

export default ProductDetail;