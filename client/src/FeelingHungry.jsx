import { getRandom } from '../helpers.js'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function FeelingHungry({ value, setValue, coords, setCoords }) {
  const [ResList, setResList] = useState('')
  const [CurrentRes, setCurrentRes] = useState({ data: false, index: undefined })

  const nochoices = useRef(null)

  useEffect(() => {
    const config = {}
    axios.get(`/api/getrestaurants/${coords.lat}%2C${coords.lng}`).then((result) => {
      console.log(result)
      setResList(result.data)
    })
  }, [])

  useEffect(() => {
    if (ResList !== '' && ResList.length > 0) {
      let random = getRandom(ResList)
      setCurrentRes({ data: ResList[random], index: random })
    }
  }, [ResList])

  const notInterested = () => {
    ResList.splice(CurrentRes.index, 1)
    let random = getRandom(ResList)
    setResList(ResList)
    setCurrentRes({ data: ResList[random], index: random })
  }
  return (
    <>
      {CurrentRes.data ? (
        <>
          <img className="res-icon" src={CurrentRes.data.icon}></img>
          <div>{CurrentRes.data.name}</div>
          <button onClick={notInterested}>Not Interested</button>
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
