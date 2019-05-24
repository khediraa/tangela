import React, { useState, useContext } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './css/mapContainer.css';
import {Link} from 'react-router-dom';
import MapListComponent from './MapListComponent';
import {AddBikeContext} from './AddBike';

function MapForAdding(props) {
  const {lng, lat, setLat, setLng} = useContext(AddBikeContext);
  const [currentPos, setCurrentPos] = useState();

   // static MapForAddingContext = AddBikeContext;  
  
    function handleClick(e){
      setLat(e.latlng.lat);
      setLng(e.latlng.lng);
      console.log(e.latlng.lat);
      console.log(e.latlng.lng);
      setCurrentPos( {
                    'lat': e.latlng.lat,
                    'lng': e.latlng.lng
                   }
      )
    }
  
      return (
        <div>
          <Map center={props.center} zoom={props.zoom} onClick={handleClick}>
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {currentPos && <Marker position={currentPos} draggable={true}>
              <Popup position={currentPos}>
                Current location: <pre>{JSON.stringify(currentPos, null, 2)}</pre>
              </Popup>
            </Marker>}
          </Map>
        </div>
      )
}
MapForAdding.contextType = AddBikeContext;

export default MapForAdding;
