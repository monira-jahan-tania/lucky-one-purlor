import React from 'react';
import './Products.css'

const Products = (props) => {
    const { id, name, img, price } = props.product
    return (
        <div className='products-list'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Product Id: {id}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Products;