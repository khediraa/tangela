import React, {Component} from 'react';
import ItemListComponent from './ItemListComponent';
import * as BikeHandler from './BikeHandler';

/* Class that contains ItemListComponents */
class ItemList extends Component {
    render() {
        var bikes = BikeHandler.getAllBikes();
        var bikes_list = [];
        for (var key in bikes) {
            if(bikes.hasOwnProperty(key)) {
                bikes_list = [...bikes_list, 
                    <ItemListComponent title={bikes[key].name} price={bikes[key].price} />]
            }
        }    
        return (
            <div className="list-item">
                {bikes_list}
            </div>
        );
    }
}

export default ItemList;