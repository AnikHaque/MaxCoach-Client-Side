import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './AddService.css'

const headingService={
    textAlign:'center',
    fontSize:'40px',
    fontWeight:'bolder'
}

const AddService = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post("http://localhost:5000/coaching",data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
                
            }
        })
    } 
    return (
        <div className="add-service">
            <h2 style={headingService}>Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-dark pt-4 pb-4">
      <input {...register("name", { required: true, maxLength: 200 })} placeholder="name" defaultValue={user.email} />
      <input {...register("name2", { required: true, maxLength: 200 })} placeholder="User name" defaultValue={user.name} />
      <input {...register("name1", { required: true, maxLength: 200 })} placeholder="Course name"  />
      <input type="number" {...register("price")}placeholder="price"/>
      <input {...register("img")} placeholder="image url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;