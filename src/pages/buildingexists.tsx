import React from 'react'
import Header from './components/Header'
import SignUp from './components/SignUp'
const BuildingExists: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SignUp />
      </div>
    </>
  )
}

export default BuildingExists
