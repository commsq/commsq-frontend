const SignUp: React.FC = () => {
  return (
    <div className="w-screen h-full flex flex-row items-center justify-center px-2">
      <div className="w-1/2 h-full flex justify-center items-center bg-green-200">
        <form className="bg-white px-6 py-8 rounded-lg shadow-md text-black w-2/3 h-auto justify-center">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="form-input px-4 py-3 mb-8 rounded-lg w-full"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="form-input px-4 py-3 mb-8 rounded-lg w-full"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="form-input px-4 py-3 mb-8 rounded-lg w-full"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="form-input px-4 py-3 mb-8 rounded-lg w-full"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="px-4 py-3 rounded-xl w-full border bg-green-300 shadow-lg"
          >
            Create Account
          </button>

          <div className="text-center text-md text-gray-500 mt-4">
            By signing up, you agree to the &nbsp;
            <a href="/" className="no-underline border-b border-grey-dark text-grey-dark">
              Terms of Service
            </a>
            &nbsp; and &nbsp;
            <a href="/" className="no-underline border-b border-grey-dark text-grey-dark">
              Privacy Policy
            </a>
          </div>
        </form>
      </div>

      <div className="flex text-grey-dark mt-6 w-1/2 justify-center">
        <h1 className="text-lg">Already have an account? &nbsp; </h1>
        <a className="text-green-600 text-lg" href="../login/">
          Log in
        </a>
        .
      </div>
    </div>
  )
}

export default SignUp
