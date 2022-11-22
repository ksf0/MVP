import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Map from './Map.jsx'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

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
    <div className="position-container">
      <div className="home-container">
        <div>Searching near:</div>
        {value === '' ? (
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_API_KEY}
            selectProps={{
              placeholder: 'Choose your location',
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
        ) : (
          <>
            <div
              className="address-text"
              onClick={() => {
                setValue('')
              }}
            >
              {value.label}
            </div>
          </>
        )}
        <div className="slider">
          <div className="center-text">Mile Radius</div>
          <Slider min={1} max={5} defaultValue={3} aria-label="Default" valueLabelDisplay="auto" />
        </div>
        <label>
          <input type="checkbox" />
          Open
        </label>
        {value !== '' && (
          <Link to="/feelinghungry">
            <button style={{ float: 'right' }}>Go</button>
          </Link>
        )}
      </div>
    </div>
  )
}
