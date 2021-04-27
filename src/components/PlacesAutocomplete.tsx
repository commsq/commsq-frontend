import { db } from '@/services/firebase'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import usePlacesAutocomplete from 'use-places-autocomplete'

const PlacesAutocomplete: React.FC = () => {
  const router = useRouter()
  const [highLightedIndex, setHighLightedIndex] = useState(0)
  const UP_ARROW_KEY = 'ArrowUp'
  const DOWN_ARROW_KEY = 'ArrowDown'
  const ENTER_KEY = 'Enter'

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  })

  function getSuggestionsElements() {
    const listElements = document.getElementsByTagName('button')
    if (listElements.length === 0) {
      return null
    }
    return Array.from(listElements)
  }

  function clearLastSuggestion() {
    const listElements = getSuggestionsElements()
    listElements?.[highLightedIndex].className = ''
  }

  function clearAllSuggestions(selectedIndex: number) {
    const listElements = getSuggestionsElements()
    if (listElements) {
      listElements.forEach((item, currentIndex) => {
        if (selectedIndex !== currentIndex) {
          item.className = ''
        }
      })
    }
  }

  function handleHover(event: any) {
    const listElements = getSuggestionsElements()
    if (listElements) {
      listElements.forEach((item, currentIndex) => {
        if (item.contains(event.target)) {
          clearAllSuggestions(currentIndex)
          setHighLightedIndex(currentIndex)
        }
      })
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const listElements = getSuggestionsElements()
    if (listElements) {
      clearLastSuggestion()
      switch (event.key) {
        case DOWN_ARROW_KEY:
          if (highLightedIndex === listElements.length - 1) {
            setHighLightedIndex(0)
            return
          }
          setHighLightedIndex(highLightedIndex + 1)
          break
        case UP_ARROW_KEY:
          if (highLightedIndex === 0) {
            setHighLightedIndex(listElements.length - 1)
            return
          }
          setHighLightedIndex(highLightedIndex - 1)
          break
        case ENTER_KEY:
          submitBuilding({
            description: listElements[highLightedIndex].getAttribute('address-field'),
          })
          break
      }
    }
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  interface SubmitBuildingProps {
    description: any
  }

  async function submitBuilding({ description }: SubmitBuildingProps) {
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

  function renderSuggestions() {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion
      return (
        <button
          address-field={suggestion.description}
          className="hover:bg-gray-200"
          key={place_id}
          onClick={() => submitBuilding(suggestion)}
          onKeyDown={() => submitBuilding(suggestion)}
          onMouseOver={(event) => handleHover(event)}
          onFocus={(event) => handleHover(event)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </button>
      )
    })
  }

  useEffect(() => {
    const listElements = getSuggestionsElements()
    if (listElements) {
      listElements[highLightedIndex].className = 'bg-gray-200'
    }
  }, [highLightedIndex])

  return (
    <div className="w-full">
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
