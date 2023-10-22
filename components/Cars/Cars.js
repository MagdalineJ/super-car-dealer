import React from 'react';
import './Cars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';


const Cars = (props) => {
    const {model, brand, Engine,body,Price,img,Seat}= props.car;
    // console.log(props.car)
    return (
        <div className='carDetails'>
           <div className='carImg'>
            <img src={img} alt="carPhoto"></img>
           </div>
           {/* ////////////////////////// */}
           <div className='details'>
            <h3>{brand} {model} </h3>
            <p>Engine Capacity: {Engine} </p>
            <p>Body Type: {body} with {Seat} Seat</p>
            <p>Price: £ {Price}</p>
            {/* /////////////////////////// */}
            <button 
            onClick={()=>{props.addToCart(props.car)}}><FontAwesomeIcon icon={faCar} /> BUY</button>
           </div>
        </div>
    );
};

export default Cars;