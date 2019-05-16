import React, {useContext} from 'react';
import Bike from './Bike';
import * as BikeHandler from './BikeHandler';
import * as UserHandler from './UserHandler';
import {AppContext} from './App';
import ItemListComponent from './ItemListComponent';

function UserProfile() {
    const {email} = useContext(AppContext);
    console.log("email: " + email);
    var myBikes= UserHandler.getMyBikes(email);
    var oneBike=BikeHandler.getBike(myBikes[1]);
    /*
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
    */
    return (
      <div>
          <h1> Bike profile</h1>
      <ItemListComponent bikeKey={oneBike} title={oneBike.name} price={oneBike.price} />
          
            </div>
    );
}

export default UserProfile;