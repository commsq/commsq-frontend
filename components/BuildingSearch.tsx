import React from 'react'

const BuildingSearch: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow mb-48">
      <label className="mb-4">Let&apos;s get started! Find your building community.</label>
      <div className="flex justify-center w-1/3 rounded-md border border-green-400 p-2">
        <input
          className="w-full"
          id="buildingSearch"
          type="text"
          placeholder="Enter your building address"
        ></input>
        <img src="./images/search.png"></img>
      </div>
    </div>
  )
}

export default BuildingSearch
