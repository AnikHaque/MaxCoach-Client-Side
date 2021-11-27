import React,{useState,useEffect} from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from '../order/Order';
const MyOrder = () => {
    const {user,email} = useAuth();
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch(`https://thawing-harbor-64472.herokuapp.com/myOrders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div id="services">
            <h1>Total Orders{services.length}</h1>
         <div className="service-container">
            <div className="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
             {
                services.map(order => <Order
                    key={order.id}
                    order={order}
                ></Order>)
            } 
            </div>
            </div>
        </div> 
    </div>
    );
};

export default MyOrder;