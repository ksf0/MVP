export default function SavedListItem({ restaurant }) {
  return (
    <div className="grid-item-container">
      <img
        className="grid-item-img"
        src={`https://maps.googleapis.com/maps/api/place/photo?maxheight=1000&photoreference=${
          restaurant.info.photos[0].photo_reference
        }&key=${import.meta.env.VITE_API_KEY}`}
      />
      <div className="overlay">
        <div className="overlay-text">{restaurant.data.name}</div>
      </div>
    </div>
  )
}
