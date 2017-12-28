import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

class App extends Component {
  //  Code for adding map adapted from https://developers.google.com/maps/documentation/javascript/tutorial
  // API KEY: AIzaSyAk2Ky0jfCnkQWb9M7xWm1wxlji3nvJJyQ&
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-md-12">
            <h1 className="text-center">Grocery Store Finder</h1>
          </div>
        </header>
        <main id="map">
          <GoogleMapReact defaultCenter={{ lat: 59.95, lng: 30.33}} defaultZoom={11}></GoogleMapReact>
        </main>
      </div>
    );
  }
}

export default App;
