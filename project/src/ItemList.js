import React, {useContext} from 'react';
import ItemListComponent from './ItemListComponent';
import {AppContext} from './App';

import * as BikeHandler from './BikeHandler';
import MapContainer from './MapContainer';
import './css/mapContainer.css';
import './css/itemList.css';

function containsBike(bike, city, bike_type, dates) {
    let containsCity = city==="" ? true : city===bike.city;
    let containsDates = dates.length===0 ? true : dates.some(d => bike.dates.includes(d));
    let containsType = bike_type==="all" ? true : bike.type===bike_type;
    return containsCity && containsType && containsDates;
}


/* Class that contains ItemListComponents */
function ItemList () {
    const {city, bike_type, startDate, endDate} = useContext(AppContext);

    var dates = BikeHandler.getDates(new Date(startDate), new Date (endDate));

    var obj = BikeHandler.getAllBikes();
    var bikes = Object.values(obj);
    console.log(bike_type);
    var result = bikes.filter(bike => containsBike(bike, city, bike_type, dates));
    console.log(result);
    var bikes_list = [];
    var bikeCoords = [];

    for (var i = 0; i < result.length; i++) {
        bikes_list = [...bikes_list, 
            <ItemListComponent key={result[i].id} title={result[i].name} price={result[i].price} />];
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