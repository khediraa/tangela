import React, {useContext} from 'react';
import ItemListComponent from './ItemListComponent';
import * as BikeHandler from './BikeHandler';
import {AppContext} from './App';

/* Class that contains ItemListComponents */
function ItemList () {
    const {city, bike_type, startDate, endDate} = useContext(AppContext);

    var obj = BikeHandler.getAllBikes();
    var bikes = Object.values(obj);
    var result = bikes.filter(p => p.type===bike_type);
    var bikes_list = [];

    for (var i = 0; i < result.length; i++) {
        bikes_list = [...bikes_list, 
            <ItemListComponent key={result[i].id} title={result[i].name} price={result[i].price} />]
    }    
    return (
        <div className="list-item">
            {bikes_list}
        </div>
    );
}

export default ItemList;