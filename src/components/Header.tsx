import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-around border-b">
      <img className="h-36" alt="Community Square Logo" src="./images/siteLogo.png"></img>
      <div className="flex justify-around w-56 font-bold">
        <Link href="/">About</Link>
        <Link href="/signin">Sign In</Link>
      </div>
    </div>
  )
}

export default Header
