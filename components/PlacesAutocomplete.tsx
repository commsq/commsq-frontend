import React, { useRef, useState } from 'react'
import usePlacesAutocomplete from 'use-places-autocomplete'
import { db } from '../services/firebase'
import BuildingExistsModal from './BuildingExistsModal'

const PlacesAutocomplete: React.FC = () => {
  const [buildingModal, setShowBuildingModal] = useState(false)
  const ref = useRef()

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  })

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  const handleSelect = ({ description }) => async () => {
    setValue(description, false)
    clearSuggestions()
    try {
      db.ref(description).once('value', async (snapshot) => {
        if (!snapshot.exists()) {
          await db.ref(description).push({
            content: value,
            timestamp: Date.now(),
          })
          setValue('')
        } else {
          setShowBuildingModal(true)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
  const renderSuggestions = () =>
    data.map((suggestion) => {
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
      {buildingModal ? <BuildingExistsModal buildingAddress={value} /> : ''}
    </div>
  )
}

export default PlacesAutocomplete
