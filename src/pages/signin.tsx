import { login } from '@/utils/helper'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SignIn: React.FC = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resident = e.target[0].value
    const password = e.target[1].value
    try {
      await login(resident, password).then(() => router.push('/bulletin'))
    } catch (err) {
      setError('The email or password entered was invalid.')
    }
  }

  const handleCheck = () => {
    setShowPass(!showPass)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-green-200">
      <form
        aria-label="form"
        onSubmit={handleSubmit}
        className="w-1/3 h-1/2 p-10 flex flex-col justify-evenly bg-white rounded-xl shadow-2xl"
      >
        <label htmlFor="email">Email/Username</label>
        <input
          id="email"
          type="email"
          aria-label="email"
          placeholder="Enter your email"
          className="form-input px-4 py-3 rounded-lg w-full"
        />
        <label htmlFor="password">Password</label>
        <input
          type={showPass ? 'text' : 'password'}
          id="password"
          aria-label="password"
          placeholder="Enter your password"
          className="form-password px-4 py-3 rounded-lg w-full"
        />
        <div className="flex w-full items-center">
          <input id="showPassword" type="checkbox" onClick={handleCheck} className="h-7 w-7" />
          <label htmlFor="showPassword">&nbsp; Show Password</label>
        </div>
        <div className="form-error">{error ? <p className="text-red-500">{error}</p> : ''}</div>
        <button
          type="submit"
          aria-label="sign in"
          className="px-4 py-3 rounded-xl w-1/2 border bg-green-300 shadow-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
