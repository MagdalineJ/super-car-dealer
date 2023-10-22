import React from 'react';
import './Header.css';
import carlogos from '../../carlogos.jpeg';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-img'>
            <img src={carlogos} className="logo" alt="" />
            </div>
            
        <div className='header-p'>
        <h2>SUPER CAR DEALER</h2>
        <p><b>BUY TO SELL OFFER!!!</b><br/>Amazing deal to buy cars, get 20% off when you excceed total budget of <b>£500000 </b>!!!<br/>
        <small>Brands included: </small>Toyota, Honda, Vauxhall, Hyundai, Kia, Marcedes-Benz, BMW & Audi. <br/>Hurry up and buy cars for family & friends. </p>
        </div> 
        </div>
    );
};

export default Header;