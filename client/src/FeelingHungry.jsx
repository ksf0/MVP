import { getRandom } from '../helpers.js'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function FeelingHungry({ value, setValue, coords, setCoords }) {
  const [ResList, setResList] = useState([])
  const [CurrentRes, setCurrentRes] = useState(false)

  useEffect(() => {
    const config = {}
    axios.get(`/api/getrestaurants/${coords.lat}%2C${coords.lng}`).then((result) => {
      console.log(result)
      setResList(result.data)
    })
  }, [])

  useEffect(() => {
    if (ResList.length > 0) {
      let initialRes = getRandom(ResList)
      setCurrentRes(initialRes)
    }
  }, [ResList])
  return <>{CurrentRes ? <div>{CurrentRes.name}</div> : null} </>
}
