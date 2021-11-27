import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
// import './Explore.css'
import useAuth from '../../../hooks/useAuth';

const training = {
    marginTop:'200px'
}

const HomeService = () => {
    const [products, setProducts] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch('https://thawing-harbor-64472.herokuapp.com/coaching')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="services" className="pt-3 pb-5 mt-5">
            <h1 style={training} className="text-center mb-5">Our Training Courses</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    products.slice(0,4).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;