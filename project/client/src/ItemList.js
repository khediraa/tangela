import React, { useState, useEffect, useContext } from 'react';
import ItemListComponent from './ItemListComponent';
import {AppContext} from './App';

import * as BikeHandler from './BikeHandler';
import MapContainer from './MapContainer';
import './css/mapContainer.css';
import './css/itemList.css';

/* Function that contains ItemListComponents */
function ItemList() {
    const {city, bike_type, startDate, endDate} = useContext(AppContext);
    
    // internal state
    const [initialized, setInitialized] = useState(false);
    const [bikes, setBikes] = useState();
    const [coords, setCoords] = useState();

    useEffect(() => {
        //not initialized before the component is mounted.
        if (!initialized) {
            let dates = BikeHandler.getDates(new Date(startDate), new Date (endDate));
            BikeHandler.getFilteredBikes(city, bike_type, dates)
                .then((json) => {
                    let bikes_list = [];
                    let bikeCoords = [];

                    for (let i = 0; i < json.length; i++) {
                        bikes_list = [...bikes_list, 
                            <ItemListComponent bikeKey={json[i].id} title={json[i].name} price={json[i].price} />];
                            bikeCoords.push({"lat":json[i].lat, "lng":json[i].lng, "id": json[i].id});
                    }
                    setBikes(bikes_list);
                    setCoords(bikeCoords);
                });
            setInitialized(true);
        }
    });

    return bikes && coords ? (
        <div className="item-list-wrapper">
            <div className="item-list">
                {bikes}
            </div>
            
            <MapContainer
                coords={coords}
                zoom={10}
            />
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default ItemList;