import React from 'react';
import ItemListComponent from './ItemListComponent';
import * as BikeHandler from './BikeHandler';

var bikes = BikeHandler.getAllBikes();
var bikes_list = [];
for (var key in bikes) {
    if(bikes.hasOwnProperty(key)) {
        // console.log(bikes[key]);
        bikes_list = [...bikes_list, 
            <ItemListComponent title={bikes[key].name} price={bikes[key].price} />]
    }
}
var bike1 = bikes[0];
console.log(bike1);
function ItemList() {
    return (
        <div className="list-item">
            {bikes_list}
        </div>
    );
}

export default ItemList;