import React from 'react';
import './Cart.css';
import Calculation from '../Calculation/Calculation';
import Selection from '../Selection/Selection';


const Cart = (props) => {
    const { cart,addToCart} = props;
    
    return (
        <div className='cart-container'>
            {/* ////////////////////////// */}
            <div className='carCards'>
            <h4>You have selelcted {cart.length} cars</h4>
              {      cart.map(cart => 
                    <Selection cart={cart} key={cart.key} addToCart = {addToCart}  >
                    </Selection>)
              }
                   
            </div>
            {/* ///////////////////////////// */}
            <div className='allTotal'>
            
            <Calculation cart={cart} addToCart={addToCart} ></Calculation>
            
            </div>
         </div>

    
    );
};

export default Cart;