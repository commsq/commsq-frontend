import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-around border-b">
      <Link href="/">
        <img className="h-36" alt="Community Square Logo" src="./images/siteLogo.png" />
      </Link>
      <div className="flex justify-around w-56 font-bold">
        <Link href="/">About</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}

export default Header
