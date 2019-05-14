import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './css/mapContainer.css';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //lat: this.props.test, //this.props.lat,
      //lng: this.props.test2, //this.props.lng,
      //zoom: 13,
    }
  }

  render() {
    let coords = this.props.coords;
    const mapCenter = coords[0];
    let markers = coords.map( (coordinatePair) => {
      return <Marker position={coordinatePair}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
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