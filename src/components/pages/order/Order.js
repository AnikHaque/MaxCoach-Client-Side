import React from 'react';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';

const Order = ({ order }) => {
    const { _id, name, name1,description,price, img } = order;
  
    return (
        <div>
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h6 class="text-center">{name1}</h6>
        <p class="card-text text-center">{description}</p>
        <h4 className="text-center">$ {price}</h4>
        
      </div>
    </div>
        
      </div>
    </div>
  



        
    );
};
export default Order;