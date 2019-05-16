import React, {useContext} from 'react';
import Bike from './Bike';
import * as BikeHandler from './BikeHandler';
import * as UserHandler from './UserHandler';
import {AppContext} from './App';
import ItemListComponent from './ItemListComponent';
import MapContainer from './MapContainer';
import './css/mapContainer.css';
function UserProfile() {
    const {email} = useContext(AppContext);
    console.log("email: " + email);
    var myBikes= UserHandler.getMyBikes(email);

    var bikes_list = [];
    var bikeCoords = [];

    for (let i = 0; i < myBikes.length; i++) {
        let bkey = (parseInt(Object.keys(myBikes)[i]) + 1);        
        bikes_list = [...bikes_list, 
            <ItemListComponent bikeKey={bkey} title={BikeHandler.getBike(myBikes[i]).name} price={BikeHandler.getBike(myBikes[i]).price} />];
            bikeCoords.push({"lat":BikeHandler.getBike(myBikes[i]).lat, "lng":BikeHandler.getBike(myBikes[i]).lng});
    }
    
    return (
        <div className="item-list-wrapper">
        <div className="item-list">
        <h1>Here your listings: </h1>
            {bikes_list}
        </div>
        <MapContainer
            coords={bikeCoords}
            zoom={10}
        />
     </div>
    );
}

export default UserProfile;