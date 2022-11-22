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
  const [swiper, setSwiper] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      let restaurants = await axios.get(`/api/getrestaurants/${coords.lat}%2C${coords.lng}`)
      setResList(restaurants.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (CurrentRes.data === false) {
      notInterested()
    }
  }, [ResList])
  const notInterested = () => {
    if (Array.isArray(ResList) && ResList.length > 0) {
      ResList.splice(CurrentRes.index, 1)
      let random = getRandom(ResList)
      axios.get(`/api/getrestaurantinfo/${ResList[random].place_id}`).then((result) => {
        ResList[random].place_info = result.data
        setResList(ResList)
        setCurrentRes({ data: ResList[random], index: random, info: result.data })
        setLoading(false)
        if (swiper) {
          swiper.slideTo(0)
        }
      })
    }
  }

  const handleSave = () => {
    axios({
      method: 'post',
      url: '/api/saverestaurant',
      data: { user: 'me', restaurant: CurrentRes },
    }).catch((err) => {
      if (err) {
        console.log(err)
      }
    })
  }
  return (
    <>
      {!loading && ResList.length > 1 ? (
        <>
          <Map center={CurrentRes.data.geometry.location} />
          <PlacesInfoBox info={CurrentRes} swiper={swiper} setSwiper={setSwiper} />
          <button onClick={handleSave}>Save</button>
          <button onClick={notInterested}>Next</button>
        </>
      ) : (
        <>
          <div className={ResList === '' || loading ? 'no-choices-noshow' : 'no-choices-show'}>
            You're all out of choices!
            <div>
              <Link className="no-choices-show" to="/">
                <button>Try Again</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
