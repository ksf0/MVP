import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '400px',
}

export default function Map({ center }) {
  useEffect(() => {}, [center])
  return (
    <>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </>
  )
}
