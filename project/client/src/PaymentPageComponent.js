import React, { useState, useEffect, useContext } from 'react';
import Bike from './Bike';
import * as BikeHandler from './BikeHandler';
import {AppContext} from './App';

function PaymentPageComponent(props) {
    //const {bikeKey} = useContext(AppContext);

    //internal state.
    const [initialized, setInitialized] = useState(false);
    const [bike, setBike] = useState();
    useEffect(() => {
        if(!initialized) {
            const {id} = props.match.params;
            BikeHandler.getBike(id)
                .then((json) => {
                    setBike(json);
                });


            setInitialized(true);
        }
    })
    return bike ? (
        <Bike bike={bike}/>
    ) : (
        <div>Loading...</div>
    );
}

export default PaymentPageComponent;
