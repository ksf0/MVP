import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import axios from 'axios'
import Home from './home.jsx'
import Map from './map.jsx'
import { Route, Routes} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import FeelingHungry from './FeelingHungry.jsx'
import FeelingBored from './FeelingBored.jsx'
import './App.css'


export default function App() {

  return (
<>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/feelinghungry' element={<FeelingHungry />}/>
      <Route path='/feelingbored' element={<FeelingBored />}/>
      <Route path='*' element={<ErrorPage />}/>
    </ Routes>
    </>
  )
  }
