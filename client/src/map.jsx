import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '400px',
  float: 'right',
  margin: '25px',
}

export default function Map({ center }) {
  return (
    <>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </>
  )
}
