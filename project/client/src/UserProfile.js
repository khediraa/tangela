import React, {useContext, useState, useEffect} from 'react';
import * as UserHandler from './UserHandler';
import {AppContext} from './App';
import MapContainer from './MapContainer';
import UserProfileComponent from './UserProfileComponent';
import './css/mapContainer.css';

function UserProfile() {
  const {email: loggedInUser} = useContext(AppContext);

  const [initialized, setInitialized] = useState(false);
  const [userBikes, setUserBikes] = useState();
  const [bikeCoords, setBikeCoords] = useState();

  useEffect(() => {
    if(!initialized) {
      UserHandler.getMyBikes(loggedInUser)
      .then(json => {
        if (!json.hasOwnProperty('result')) {
          let userBikesHTML = [];
          let bikeCoords = [];
          json.forEach(bike => {
            
            userBikesHTML.push(<UserProfileComponent bikeKey={bike.id} title={bike.name} price={bike.price} />);
            bikeCoords.push({"lat":bike.lat, "lng":bike.lng, "id": bike.id, "name": bike.name});
          });
          setUserBikes(userBikesHTML);
          setBikeCoords(bikeCoords);

        }
      })
      setInitialized(true);
    }
  })

    return userBikes && bikeCoords ? (
      <div className="item-list-wrapper">
        <div className="item-list">
          <h1 style={{color:'white'}}>Here are your listings: </h1>
          {userBikes}
        </div>
        <MapContainer
          coords={bikeCoords}
          zoom={10}
          />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }

    export default UserProfile;
