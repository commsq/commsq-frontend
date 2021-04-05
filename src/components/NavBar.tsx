import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavBar: React.FC = () => {
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (window.location.pathname) {
      setLocation(window.location.pathname)
    }
  }, [])

  return (
    <div className="w-screen flex">
      <Link href="/bulletin">
        <div className={location === '/bulletin' ? 'selectedNavItem' : 'navItem'}>
          Bulletin Page
        </div>
      </Link>
      <Link href="/communitychat">
        <div className={location === '/communitychat' ? 'selectedNavItem' : 'navItem'}>
          Community Chat
        </div>
      </Link>
      <Link href="/myprofile">
        <div className={location === '/myprofile' ? 'selectedNavItem' : 'navItem'}>My Profile</div>
      </Link>
    </div>
  )
}

export default NavBar
