import { useState, useEffect } from 'react'
import axios from 'axios'
import PlacesInfoBox from './PlacesInfoBox.jsx'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

export default function Search({ coords, value, setValue, setCoords }) {
  const [SearchResults, setSearchResults] = useState([])
  const [keyword, setKeyword] = useState('')
  const [CurrentRes, setCurrentRes] = useState([])
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (value !== '') {
        let coordsreq = await axios.get(`/api/getcoords/${value.value.place_id}`)
        setResList(coordsreq.data)
      }
    }
    fetchData()
  }, [value])

  const getList = () => {
    axios.get(`/api/keywordsearch/${coords.lat}%2C${coords.lng}/${keyword}`).then((result) => {
      setSearchResults(result.data.results)
    })
  }

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
  console.log(SearchResults)
  return SearchResults.length > 1 && value !== '' ? (
    <div className="search-container">
      <PlacesInfoBox info={CurrentRes} swiper={swiper} setSwiper={setSwiper} />
      <button onClick={handleSave}>Save</button>
      <button onClick={notInterested}>Next</button>
      <Map center={CurrentRes.data.geometry.location} />
    </div>
  ) : (
    <div className="search-container">
      <>
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
        <label>
          Keyword Search (EX: Italian, Ice cream, Dessert, etc...)
          <input
            value={keyword}
            placeholder="keyword"
            onChange={(e) => {
              setKeyword(e.target.value)
            }}
          ></input>
        </label>
        <button onClick={getList}>search</button>
      </>
    </div>
  )
}
