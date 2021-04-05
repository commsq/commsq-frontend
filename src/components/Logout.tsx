import React from 'react'
import { logout } from '../utils/helper'

const Logout: React.FC = () => {
  return (
    <button
      type="submit"
      onClick={logout}
      className="px-4 py-3 rounded-xl w-1/2 border bg-yellow-300"
    >
      Sign Out
    </button>
  )
}

export default Logout
