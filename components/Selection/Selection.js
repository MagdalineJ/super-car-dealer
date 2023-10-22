import React from 'react';
import './Selection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons';


const Selection = (props) => {
    const{cart}= props;
    const{img,brand, model}=cart;

////////////////////////////////////
    return (
        <div>
             
             <div className='Details'>
           <div className='Img'>
            <img src={img} alt=''></img>
           </div>
           <div className='name'>
            <h4>{brand} {model}</h4>
           </div>
           <div className='cross' ><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></div>
             </div>
             
        </div>
    );
};

export default Selection;