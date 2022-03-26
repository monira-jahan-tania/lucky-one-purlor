import React, { useState } from 'react';
import Random from '../Random/Random';
import './Cart.css'

const Cart = ({ cart }) => {
    const [cartOne, setCartOne] = useState('')



    const choose1 = () => {
        const randNum = Math.random()
        const oneItem = Math.floor(randNum * (cart.length - 1))
        const item = cart[oneItem].name
        setCartOne(item)
    }



    return (
        <div className='carts'>
            <div className='selectedCart'>
                {
                    cart.map(pd => (<h3 key={pd.id}>{pd.name}</h3>))
                }
            </div>

            <button className="choose-1-btn" onClick={choose1}>Choose 1 for Me</button><h3>{cartOne}</h3>



            <button className="choose-again-btn">Choose Again</button>

        </div>
    );
};

export default Cart;