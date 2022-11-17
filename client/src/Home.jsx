import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {useState} from 'react'

export default function Home () {

  const [value, setValue] = useState('')

  return (
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
  )
}