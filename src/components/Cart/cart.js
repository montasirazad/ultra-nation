import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0 ;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation+ country.population;
        
    }
    return (
        <div>
            <h2>  cart: {cart.length}</h2>
            <p>Total population : {totalPopulation}</p>
            {/* ascvvv */}
        </div>
    );
};

export default Cart;