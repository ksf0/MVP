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

  useEffect(() => {
    if (typeof value === 'object') {
      getLocInfo()
    }
  }, [value])
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
      <div className="confirmation">
        {coords === '' ? null : (
          <div>
            <Link to="/feelinghungry">I'm Feeling Hungry</Link>
            {/* <Link to="/feelingbored">Feeling Bored? </Link> */}
          </div>
        )}
      </div>
    </>
  )
}
