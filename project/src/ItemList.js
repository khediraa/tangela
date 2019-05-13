import React, {Component} from 'react';
import ItemListComponent from './ItemListComponent';
import * as BikeHandler from './BikeHandler';
import MapContainer from './MapContainer';
import './css/mapContainer.css';

/* Class that contains ItemListComponents */
class ItemList extends Component {
    render() {
        console.log(this.props);
        var bikes = BikeHandler.getAllBikes();
        var bikes_list = [];
        var bikeCoords = [];
        for (var key in bikes) {
            if(bikes.hasOwnProperty(key)) {
                bikes_list = [...bikes_list, 
                    <ItemListComponent key={key} title={bikes[key].name} price={bikes[key].price} />];
                bikeCoords.push({"lat":bikes[key].lat, "lng":bikes[key].lng});
                }
        }
        
        return (
            <div className="item-list">
                <div className="list-item">
                    {bikes_list}
                </div>
                <div className="item-list-map">
                    <MapContainer
                        coords={bikeCoords}
                        zoom={10}/>
                </div>
            </div>
        );
    }
}

export default ItemList;