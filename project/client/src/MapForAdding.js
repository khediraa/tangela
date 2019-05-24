import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './css/mapContainer.css';
import {Link} from 'react-router-dom';
import MapListComponent from './MapListComponent';

class MapForAdding extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPos: null
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
  
    handleClick(e){
      this.setState({ currentPos: e.latlng });
    }
  
    render() {
      return (
        <div>
          <Map center={this.props.center} zoom={this.props.zoom} onClick={this.handleClick}>
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            { this.state.currentPos && <Marker position={this.state.currentPos} draggable={true}>
              <Popup position={this.state.currentPos}>
                Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
              </Popup>
            </Marker>}
          </Map>
        </div>
      )
    }
}

export default MapForAdding;
