import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import axios from 'axios'
import Home from './Home.jsx'
import Map from './Map.jsx'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import FeelingHungry from './FeelingHungry.jsx'
import FeelingBored from './FeelingBored.jsx'
import './App.css'

export default function App() {
  const [value, setValue] = useState('')
  const [coords, setCoords] = useState('')
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home value={value} setValue={setValue} coords={coords} setCoords={setCoords} />}
        />
        <Route
          path="/feelinghungry"
          element={
            <FeelingHungry
              value={value}
              setValue={setValue}
              coords={coords}
              setCoords={setCoords}
            />
          }
        />
        <Route path="/feelingbored" element={<FeelingBored />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
