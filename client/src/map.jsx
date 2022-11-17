import React, {useEffect} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};
const center = {
  lat: -3.745,
  lng: -38.523
};


export default function Map() {

  useEffect(() => {

  }, [center])
  return (
    <>
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
    </LoadScript>
    </>
  )
}