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
    console.log(bike || false);
    return bike ? (
        <Bike id={bikeKey}
            dates={bike.dates} 
            title={bike.name} 
            city={bike.city} 
            startDate={bike.dates[0]} 
            endDate={bike.dates[bike.dates.length - 1]} 
            price={bike.price} 
            lat={bike.lat} 
            lng={bike.lng} 
        />
    ) : (
        <div>Loading...</div>
    );
}

export default BikePage;
