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
import Navbar from './Navbar.jsx'
import Saved from './Saved.jsx'
import Search from './Search.jsx'
import './App.scss'

export default function App() {
  const [value, setValue] = useState('')
  const [coords, setCoords] = useState('')
  const [Loading, setLoading] = useState(true)
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home value={value} setValue={setValue} coords={coords} setCoords={setCoords} />
            }
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
          <Route path="/saved" element={<Saved />} />
          <Route
            path="/search"
            element={
              <Search value={value} coords={coords} setValue={setValue} setCoords={setCoords} />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}
