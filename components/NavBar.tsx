import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar: React.FC = () => {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (window.location.pathname) {
      setLocation(window.location.pathname)
    }
  })

  return (
    <div className="w-screen flex">
      <div className={location === '/bulletin' ? 'selectedNavItem' : 'navItem'}>
        <Link href="/bulletin">Bulletin Page</Link>
      </div>
      <div className={location === '/communitychat' ? 'selectedNavItem' : 'navItem'}>
        <Link href="/communitychat">Community Chat</Link>
      </div>
      <div className={location === '/myprofile' ? 'selectedNavItem' : 'navItem'}>
        <Link href="/myprofile">My Profile</Link>
      </div>
    </div>
  )
}

export default NavBar
