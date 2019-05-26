import React, { useState, useEffect, useContext } from 'react';
import Bike from './Bike';
import * as BikeHandler from './BikeHandler';
import "./css/addBike.css";

function BikePage(props) {

  //internal state.
  const [initialized, setInitialized] = useState(false);
  const [bike, setBike] = useState();
  useEffect(() => {
    if(!initialized) {
      const {id} = props.match.params;
      BikeHandler.getBike(id)
      .then((json) => {
        setBike(json);
      });


      setInitialized(true);
    }
  })
  return bike ? (
    <div class="background">
    <Bike bike={bike}/>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default BikePage;
