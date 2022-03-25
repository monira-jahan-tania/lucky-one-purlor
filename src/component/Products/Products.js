import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Products = ({ cartHandler, product }) => {
    const { id, name, img, price } = product
    return (
        <div className='products-list'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Product Id: {id}</p>
            <p>Price: {price}</p>
            <button className='cart-btn' onClick={() => { cartHandler(product) }}><p>Add to your Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Products;