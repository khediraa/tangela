import React, { useState, useEffect, useContext } from 'react';
import Bike from './Bike';
import * as BikeHandler from './BikeHandler';
import {AppContext} from './App';

function BikePage(props) {
    //const {bikeKey} = useContext(AppContext);

    //internal state.
    const [initialized, setInitialized] = useState(false);
    const [bike, setBike] = useState();
    const [bikeId, setBikeId] = useState(0);
    useEffect(() => {
        if(!initialized) {
            const {id} = props.match.params;
            console.log(id);
            BikeHandler.getBike(id)
                .then((json) => {
                    console.log(JSON.stringify(json));
                    setBike(json);
                    setBikeId(id);
                });


            setInitialized(true);
        }
    })
    return bike ? (
        <Bike id={bikeId}
            bike={bike}
        />
    ) : (
        <div>Loading...</div>
    );
}

export default BikePage;
