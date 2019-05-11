import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './css/mapContainer.css';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //lat: this.props.test, //this.props.lat,
      //lng: this.props.test2, //this.props.lng,
      zoom: 13,
    }
  }
  
  render() {
    const position = [this.props.lat, this.props.lng] //this.state.lat, this.state.lng
    return (
      <Map center={position} zoom={this.state.zoom}> 
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default MapContainer;