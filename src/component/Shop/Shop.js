import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])



    const cartHandler = (selectedProduct) => {
        const newCart = [...cart, selectedProduct]
        setCart(newCart)

    }

    // const chooseAgain = (cart) => {
    //     cart = cart.splice(cart.length - 1, 0)
    //     setCart(cart)
    // }


    return (
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;