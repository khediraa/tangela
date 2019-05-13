import React, {useContext} from 'react';
import ItemListComponent from './ItemListComponent';
import {AppContext} from './App';

import * as BikeHandler from './BikeHandler';
import MapContainer from './MapContainer';
import './css/mapContainer.css';
import './css/itemList.css';

/* Checks if bike object has "city," */
function containsBike(bike, city, bike_type, dates) {
    let todaysDate = BikeHandler.DateToString(new Date());
    let containsCity = city==="" ? true : city.toUpperCase()===bike.city.toUpperCase();
    let containsDates = dates.length===0 ? bike.dates.some(d => todaysDate<=d) : dates.some(d => bike.dates.includes(d));
    let containsType = bike_type==="all" ? true : bike.type===bike_type;
    return containsCity && containsType && containsDates;
}


/* Class that contains ItemListComponents */
function ItemList () {
    const {city, bike_type, startDate, endDate} = useContext(AppContext);

    var dates = BikeHandler.getDates(new Date(startDate), new Date (endDate));

    var obj = BikeHandler.getAllBikes();
    var bikes = Object.values(obj);
    var result = bikes.filter(bike => containsBike(bike, city, bike_type, dates));
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