import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import flats from './flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: null,
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    if (this.state.selectedFlat !== null) {
      return {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
    }
    return {
      lat: 48.858093,
      lng: 2.294694
    };
  }

  lat() {
    if (this.state.selectedFlat === null) {
      return 48.858093;
    }
    return this.state.selectedFlat.lat;
  }

  long() {
    if (this.state.selectedFlat === null) {
      return 2.294694;
    }
    return this.state.selectedFlat.lng;
  }


  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.lat()} lng={this.long()} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
