import { getRandom } from '../helpers.js'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Map from './Map.jsx'
import PlacesInfoBox from './PlacesInfoBox.jsx'
import axios from 'axios'

export default function FeelingHungry({ value, setValue, coords, setCoords }) {
  const [ResList, setResList] = useState('')
  const [CurrentRes, setCurrentRes] = useState({ data: false, index: undefined, info: undefined })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`/api/getrestaurants/${coords.lat}%2C${coords.lng}`).then((result) => {
      setResList(result.data)
      notInterested()
    })
  }, [])

  const notInterested = () => {
    if (Array.isArray(ResList) && ResList.length > 0) {
      ResList.splice(CurrentRes.index, 1)
      let random = getRandom(ResList)
      axios
        .get(`http://localhost:3000/api/getrestaurantinfo/${ResList[random].place_id}`)
        .then((result) => {
          ResList[random].place_info = result.data
          setResList(ResList)
          setCurrentRes({ data: ResList[random], index: random, info: result.data })
        })
    }
  }
  return (
    <>
      {CurrentRes.data ? (
        <>
          <PlacesInfoBox info={CurrentRes} />
          <button onClick={notInterested}>Not Interested</button>
          <Map center={CurrentRes.data.geometry.location} />
        </>
      ) : (
        <div id={ResList === '' ? 'no-choices-noshow' : 'no-choices-show'}>
          You're all out of choices!
          <div></div>
          <Link to="/">Try again</Link>
        </div>
      )}
    </>
  )
}
