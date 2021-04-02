import React, { useEffect, useRef, useState } from 'react'
import usePlacesAutocomplete from 'use-places-autocomplete'
import { db } from '../services/firebase'
import { useRouter } from 'next/router'

const PlacesAutocomplete: React.FC = () => {
  const router = useRouter()
  const [highLightedIndex, setHighLightedIndex] = useState(null)
  const ref = useRef()
  const UP_ARROW_KEY = 'ArrowUp'
  const DOWN_ARROW_KEY = 'ArrowDown'

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  })

  function handleKeyDown(event) {
    let listElements = document.getElementsByClassName('suggestions')
    if (listElements.length === 0) {
      return
    }

    listElements = Array.from(listElements)
    if (event.key === DOWN_ARROW_KEY) {
      if (highLightedIndex === null) {
        setHighLightedIndex(0)
      } else {
        listElements[highLightedIndex].style.backgroundColor = ''
        setHighLightedIndex(highLightedIndex + 1)
      }
    } else if (event.key === UP_ARROW_KEY) {
      listElements[highLightedIndex].style.backgroundColor = ''
      setHighLightedIndex(highLightedIndex - 1)
    }
  }

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
        <li className="suggestions" key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })
  }

  useEffect(() => {
    let listElements = document.getElementsByClassName('suggestions')
    if (listElements.length === 0) {
      return
    }

    if (listElements[highLightedIndex] === undefined) {
      return
    }

    listElements = Array.from(listElements)

    listElements[highLightedIndex].style.backgroundColor = 'gray'
  }, [highLightedIndex])

  return (
    <div ref={ref} className="w-full">
      <input
        id="buildingSearch"
        className="w-full"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter your building address"
        onKeyDown={(event) => handleKeyDown(event)}
      />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  )
}

export default PlacesAutocomplete
