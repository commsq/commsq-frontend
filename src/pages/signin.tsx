import React from 'react'

const SignIn: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form aria-label="form" className="w-1/4 flex flex-col">
        <label>Email/Username</label>
        <input
          type="email"
          aria-label="email or username"
          placeholder="Enter your email or username"
          className="form-input px-4 py-3 rounded-xl w-full"
        />
        <label>Password</label>
        <input
          type="password"
          aria-label="password"
          placeholder="enter your password"
          className="form-password px-4 py-3 rounded-xl w-full"
        />
      </form>
    </div>
  )
}

export default SignIn
