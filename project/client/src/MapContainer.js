import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './css/mapContainer.css';
import {Link} from 'react-router-dom';
import MapListComponent from './MapListComponent';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let coords = this.props.coords;
    let bkey = this.props.bkey;
    const mapCenter = coords[0];
    let markers = coords.map( (coordinatePair) => {
      return <Marker position={coordinatePair}>
        <Popup>
          <MapListComponent bikeKey={bkey}/>
        </Popup>
      </Marker>
    });

    return (
      <Map center={mapCenter} zoom={this.props.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {markers}
      </Map>
    )
  }
}

export default MapContainer;