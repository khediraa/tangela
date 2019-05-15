import React, { useState, useEffect, useContext } from 'react';
import Bike from './Bike';
import * as BikeHandler from './BikeHandler';
import {AppContext} from './App';

function BikePage() {
    const {bikeKey} = useContext(AppContext);

    //internal state.
    const [initialized, setInitialized] = useState(false);
    const [bike, setBike] = useState();
    
    useEffect(() => {
        if(!initialized) {
            BikeHandler.getBike(bikeKey)
                .then((json) => {
                    console.log(JSON.stringify(json));
                    setBike(json);
                });


            setInitialized(true);
        }
    })
    return bike ? (
        <Bike id={bikeKey}
            bike={bike}
        />
    ) : (
        <div>Loading...</div>
    );
}

export default BikePage;
