import React, { useState } from 'react';
import Random from '../Random/Random';
import './Cart.css'

const Cart = ({ cart, chooseAgain, choose1, cartOne }) => {

    return (
        <div className='carts'>
            <div className='selectedCart'>
                {
                    cart.map(pd => (<h3 key={pd.id}>{pd.name}</h3>))
                }
            </div>

            <button className="choose-1-btn" onClick={() => { choose1() }}>Choose 1 for Me</button><h3>{cartOne}</h3>



            <button className="choose-again-btn" onClick={() => { chooseAgain() }}>Choose Again</button>

        </div>
    );
};

export default Cart;