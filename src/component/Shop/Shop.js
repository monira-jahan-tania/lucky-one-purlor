import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}></Products>)
                }
            </div>
            <div className="cart-container">
                <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Shop;