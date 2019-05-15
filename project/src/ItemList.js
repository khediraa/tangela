import React, {useContext} from 'react';
import ItemListComponent from './ItemListComponent';
import {AppContext} from './App';

import * as BikeHandler from './BikeHandler';
import MapContainer from './MapContainer';
import './css/mapContainer.css';
import './css/itemList.css';

/* Function that contains ItemListComponents */
function ItemList () {
    const {city, bike_type, startDate, endDate} = useContext(AppContext);
    var dates = BikeHandler.getDates(new Date(startDate), new Date (endDate));
    var obj = BikeHandler.getAllBikes();
    var bikes = Object.values(obj);
    var result = bikes.filter(bike => BikeHandler.containsBike(bike, city, bike_type, dates));
    var bikes_list = [];
    var bikeCoords = [];

    for (let i = 0; i < result.length; i++) {
        let bkey = (parseInt(Object.keys(result)[i]) + 1);        
        bikes_list = [...bikes_list, 
            <ItemListComponent bikeKey={bkey} title={result[i].name} price={result[i].price} />];
            bikeCoords.push({"lat":result[i].lat, "lng":result[i].lng});
    }

    return (
        <div className="item-list-wrapper">
            <div className="item-list">
                {bikes_list}
            </div>
            <MapContainer
                coords={bikeCoords}
                zoom={10}
            />
         </div>
    );
}

export default ItemList;