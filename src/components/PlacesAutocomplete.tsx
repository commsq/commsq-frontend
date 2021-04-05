import React, { useRef } from 'react'
import usePlacesAutocomplete from 'use-places-autocomplete'
import { db } from '../services/firebase'
import { useRouter } from 'next/router'

const PlacesAutocomplete: React.FC = () => {
  const router = useRouter()
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

  function handleInput(e) {
    setValue(e.target.value)
  }

  function handleSelect({ description }) {
    return async () => {
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
            router.push('/BuildingExists')
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
  }

  function renderSuggestions() {
    return data.map((suggestion) => {
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
  }

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
    </div>
  )
}

export default PlacesAutocomplete
