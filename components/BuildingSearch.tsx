import React, { useEffect, useState } from 'react'

const BuildingSearch: React.FC = () => {
  const [address, setAddress] = useState({
    id: 0,
    address: null,
  })

  function handleChange(event) {
    setAddress({ address: event.target.value })
    console.log(address)
  }

  useEffect(() => {
    const center = { lat: 50.064192, lng: -130.605469 }
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    }
    const input = document.getElementById('buildingSearch') as HTMLInputElement
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: 'us' },
      fields: ['address_components', 'geometry', 'icon', 'name'],
      origin: center,
      strictBounds: false,
      types: ['address'],
    }
    const autocomplete = new google.maps.places.Autocomplete(input, options)
    autocomplete.setFields(['place_id', 'geometry', 'name'])
  }, [])

  return (
    <div className="flex flex-col justify-center items-center flex-grow mb-48">
      <label className="mb-4">Let&apos;s get started! Find your building community.</label>
      <div className="flex justify-center w-1/3 rounded-md border border-green-400 p-2">
        <input
          className="w-full"
          id="buildingSearch"
          type="text"
          placeholder="Enter your building address"
          onChange={handleChange}
        ></input>
        <img src="./images/search.png"></img>
      </div>
    </div>
  )
}

export default BuildingSearch
