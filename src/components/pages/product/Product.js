import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';

const product = ({ product }) => {
    // const {service} = props;
    const { _id, name1, price, img } = product;
    const url =`/coaching/${_id}`;
    return (
        <div>
            
  <div class="col">
    <div class="card h-100 card-bg">
      <img src={img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center">{name1}</h5>
        <h4 className="text-center"> $ {price} </h4>
      </div>
      <div class="card-footer">
          
        <Link to={`/coaching/${_id}`}>
        <button className="btn btn-success mx-5">View Details</button>
        </Link>
        
      
    </div>
  </div>
</div>
</div>


        
    );
};
export default product;