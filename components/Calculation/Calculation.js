
import { useState } from 'react';
import './Calculation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
const Calculation = (props) => {
    const{cart}= props;
    let total= 0
   for(const car of cart ){
        
       total = total + car.Price;
   }
   const shipping =total>0 ? 15: 0;
   // ternary operator usage
   let tax= total * 0.2;
   let grandtotal = 0;
   if(total < 500000)
   { grandtotal = (total + shipping + tax).toFixed(2);}
   else{
     grandtotal=(total+shipping + tax)-((total+ shipping+ tax)*20/100)
    }
   
   ////////////////////////////////////////////////
   
  const [ style, setStyle] = useState('congratsClose');
    
  const openModal=()=>{
    if (grandtotal>0){ setStyle('congratsOpen');}
   }
   ////////////////////////////////////////////////
   const refresh = ()=>{
    window.location.reload(false);
    // console.log('refresh')
   }
   ///////////////////////////////////////////////
    return (
        <div>
            <h5>Items Ordered:{props.cart.length}</h5>
            <h5>Total: £ {total}</h5>
            <h5>Shipping: £ {shipping}</h5>
            <h5>Tax (20%): £{tax} </h5><br/>
            <h5>Grand total: £{grandtotal}</h5>
            
            <p><small>* Read terms & conditions <FontAwesomeIcon icon={ faSquareCaretDown}></FontAwesomeIcon></small></p>
             <button className='terms'>Agree</button> <button className='terms'>Disagree</button> 
             <br/><br/>
             <br/><br/>
             <br/><br/>
             <br/><br/>
             <br/><br/>
             <br/><br/>
             <br/><br/>
             <br/><br/>
             {/* ///////// pop up when you use the purchase button   //////// */}
            <div className={style}>
            <div className='congratsOpen' >
                 <h1 > Congratulatins!</h1><br/>
                 <p>The purchase has been succesful.</p>
            </div>
            <div className='congratsClose' > <h1 > Congratulatins!</h1></div>
            </div>
            {/* ///////////////////// */}

             <button className='purchase-btn' onClick={()=>{openModal()}} >Purchase </button>
             
             <button className='purchase-btn' onClick={()=>{refresh()}}>Cancel </button>
        </div>
    );
};

export default Calculation;