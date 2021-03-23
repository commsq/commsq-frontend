import React from 'react'
import PlacesAutocomplete from './PlacesAutocomplete'

const BuildingSearch: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow mb-48">
      <label className="mb-4">Let&apos;s get started! Find your building community.</label>
      <form className="flex justify-center w-1/3 rounded-md border border-green-400 p-2">
        <PlacesAutocomplete />
        <img id="magnifyingGlass" className="h-auto w-auto" src="/images/search.png" />
      </form>
    </div>
  )
}

export default BuildingSearch
