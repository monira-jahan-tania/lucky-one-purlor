import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let oneCart
    const choose1 = () => {
        oneCart = cart.Math.floor((Math.random() * this.length))
    }

    return (
        <div className='carts'>
            {
                cart.map(pd => (<h3 key={pd.id}>{pd.name}</h3>))
            }

            <button className="choose-1-btn" onClick={choose1}>Choose 1 for Me</button>
            <h3>{cart[oneCart]}</h3>

            <button className="choose-again-btn" >Choose Again</button>

        </div>
    );
};

export default Cart;