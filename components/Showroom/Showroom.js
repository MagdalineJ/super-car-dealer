import React, { useEffect, useState } from 'react';
import './Showroom.css';
import Cars from '../Cars/Cars';
import Cart from '../Cart/Cart';

const Showroom = () => {
// ///////////////  state decalre   ////////////////////
    const[ cars, setCars]= useState([]);
// ////////////////  state declare   ////////////////////////
    const[cart, setCart] = useState([]);
// //////////////    event handler   /////////////////////////
const addToCart= car =>{
    const newCart = [...cart,car ];
    setCart(newCart);
}
// //////////////     fetching api     /////////////////////////
    const fakedata = '../../utilities/fakedata.json';
    useEffect(()=>{
        fetch(fakedata)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
             setCars(data)

        })  
    },[cars]);

    return (
        <div className='showroom'>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
            {/* ///////////////////////    Different component   ///////////////////// */}
            <div>
                <h5> Displaying altogether {cars.length} selection</h5>
                <div className='cars-container'>
                   {
                    cars.map(car => <Cars 
                    car={car} key={car.key} addToCart = {addToCart}
                    >
                    </Cars>)
                   }

                
                </div>
                

            </div>
           
        </div>
    );
};

export default Showroom;