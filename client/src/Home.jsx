import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Map from './Map.jsx'

export default function Home({ value, setValue, coords, setCoords }) {
  async function getLocInfo() {
    axios.get(`/api/getcoords/${value.value.place_id}`).then((info) => {
      setCoords(info.data)
    })
  }
  return (
    <>
      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_API_KEY}
        selectProps={{
          styles: {
            input: (provided) => ({
              ...provided,
              color: 'black',
            }),
            option: (provided) => ({
              ...provided,
              color: 'black',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: 'blue',
            }),
          },
          value,
          onChange: setValue,
        }}
      />
      {value === '' ? null : (
        <div className="confirmation">
          <div>confirm address: {value.label}</div>
          <button onClick={getLocInfo}>CONFIRM</button>
        </div>
      )}
      {coords === '' ? null : (
        <div>
          <Link to="/feelinghungry">Feeling Hungry? </Link>
          <Link to="/feelingbored">Feeling Bored? </Link>
        </div>
      )}
    </>
  )
}
