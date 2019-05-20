import React, {useContext} from 'react';
import './css/itemListComponent.css';
import {AppContext} from './App';
import {Link} from 'react-router-dom';

/* Function returning component with bikes available in the database */
function PaymentPageComponent({bikeKey, title, price}) {
    const state = useContext(AppContext);
    
    return (
        <div className="itemListComponent">
            <div>
                <h5>{state.bikeKey}</h5>
                <h5>{price} kr/day</h5>
            </div>
        </div>
    );
}


export default PaymentPageComponent;