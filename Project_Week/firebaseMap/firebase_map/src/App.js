import React, { useState, Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import AddToFirebase from "./components/AddToFirebase";
import Map from "./components/map";
import addPoint from "./components/map";

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.50853,
    longitude: -0.12574,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [status, setStatus] = useState(null);
  const [userLocation, setUserLocation] = useState({
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 42.430472,
      longitude: -123.334102,
      zoom: 16,
    },
  });

  function showMyLocation() {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported on your browser");
    } else {
      setStatus("Locating your location..");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let newViewport = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            width: "100vw",
            height: "100vh",
            zoom: 10,
          };
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setViewport(newViewport);
          console.log(latitude, longitude)
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  }

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/qu1p/ckrgqg5an5n2618oii11m51r4"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <div
          className="myLocationSearch"
          style={{
            backgroundColor: "yellow",
            width: 200,
            border: "3px solid",
            borderRadius: "25px",
          }}
        >
          <button onClick={showMyLocation}>Find your location</button>
          <h1>Coordinates</h1>
          <p>{status}</p>
          {latitude && <p>Latitude: {latitude}</p>}
          {longitude && <p>Longitude: {longitude}</p>}
        </div>
        <AddToFirebase />
        <Marker latitude={latitude} longitude={longitude}>Here</Marker>
      </ReactMapGL>
    </div>
  );
};

export default App;

// const geolocate = map.addControl(
//   new mapboxgl.GeolocateControl({
//     positionOptions: {
//        enableHighAccuracy: true
//     },
//     trackUserLocation: true
//   })
//  )
