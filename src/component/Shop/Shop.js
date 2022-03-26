import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import QuesAns from '../QuesAns/QuesAns';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([])
    const [cart, setCart] = useState([])

    //for fetching data or products
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    //to add products in cart with btn clicking
    const cartHandler = (selectedProduct) => {
        const newCart = [...cart, selectedProduct]
        setCart(newCart)

    }

    //to randomly choose one item
    const [cartOne, setCartOne] = useState('')
    const choose1 = () => {
        const randNum = Math.random()
        const oneItem = Math.floor(randNum * (cart.length - 1))
        const item = cart[oneItem].name
        setCartOne(item)
    }

    //to choose again and remove all
    const chooseAgain = () => {
        setCart([])
        setCartOne('')
    }


    return (
        <div>
            <div className='shop-container'>

                <div className="products-container">
                    {
                        products.map(product => <Products
                            product={product}
                            key={product.id}
                            cartHandler={cartHandler}></Products>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} choose1={choose1} cartOne={cartOne} chooseAgain={chooseAgain}></Cart>

                </div>
            </div>
            <div className='q/a'>
                <QuesAns></QuesAns>
            </div>
        </div>
    );
};

export default Shop;