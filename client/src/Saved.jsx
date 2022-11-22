import { useState, useEffect } from 'react'
import SavedListItem from './SavedListItem.jsx'
import axios from 'axios'

export default function Saved({ user }) {
  const [saved, setSaved] = useState([])

  useEffect(() => {
    axios.get('/api/getsavedrestaurants/me').then((result) => {
      setSaved(result.data)
    })
  }, [])
  return saved.length > 0 ? (
    <div className="grid">
      <div id="img-wrapper">
        {saved.map((restaurant, index) => (
          <SavedListItem restaurant={restaurant.restaurant} index={index} />
        ))}
      </div>
    </div>
  ) : (
    <div>nothing saved yet</div>
  )
}
