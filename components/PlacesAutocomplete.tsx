import React, { useRef } from 'react'
import usePlacesAutocomplete from 'use-places-autocomplete'

const PlacesAutocomplete: React.FC = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  })
  const ref = useRef()
  const handleInput = (e) => {
    setValue(e.target.value)
  }

  const handleSelect = ({ description }) => () => {
    //second parameter "false" prevents requesting from the api again
    setValue(description, false)
    clearSuggestions()
  }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      console.log(suggestion)
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

  return (
    <div ref={ref} className="w-full">
      <input
        id="buildingSearch"
        className="w-full"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter your building address"
      />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
      <img id="magnifyingGlass" src="/images/search.png" />
    </div>
  )
}

export default PlacesAutocomplete
