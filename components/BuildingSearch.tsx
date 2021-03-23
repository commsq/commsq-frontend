import React from 'react'
import PlacesAutocomplete from './PlacesAutocomplete'

const BuildingSearch: React.FC = () => {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="flex flex-col justify-center items-center flex-grow mb-48">
      <label className="mb-4">Let&apos;s get started! Find your building community.</label>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-1/3 rounded-md border border-green-400 p-2"
      >
        <PlacesAutocomplete />
      </form>
    </div>
  )
}

export default BuildingSearch
