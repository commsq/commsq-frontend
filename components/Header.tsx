import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-around border-b">
      <img className="h-36" src="./images/siteLogo.png"></img>
      <div className="flex justify-around w-56 font-bold">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
