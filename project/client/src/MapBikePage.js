import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import './css/mapContainer.css';

class MapBikePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let coords = this.props.coords;
    let bikeKeys = this.props.bikeKeys;
    const mapCenter = coords[0];
    let markers = coords.map( (coordinatePair) => {
      return <Circle 
                position={coordinatePair}
                center={{lat: coordinatePair.lat, lng: coordinatePair.lng}}
                fillColor="blue" 
                radius={200}
                />
      
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

export default MapBikePage;
