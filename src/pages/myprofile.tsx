import NavBar from '@/components/NavBar'

const MyProfile: React.FC = () => {
  return (
    <>
      <div className="container h-screen w-screen">
        <NavBar />
        <div className="w-full h-full flex flex-row">
          <div className="controlBar w-1/4 h-5/6 bg-yellow-100 p-5 m-5 flex flex-col justify-evenly rounded-xl">
            <div className="userInfo">
              <strong>Username</strong>
              <p>Random Looney</p>
              <strong>Email</strong>
              <p>rloon@mail.com</p>
              <strong>Address</strong>
              <p>123 Main Street</p>
              <br />
              <button>Change My Email</button>
              <button>Change My Password</button>
            </div>
            <br />
            <div>
              <strong>Actions</strong>
              <button>Post on Bulletin</button>
            </div>
          </div>
          <div className="rightSide w-3/4 h-5/6 flex flex-col m-5">
            <div className="notifications w-11/12 bg-red-300 flex flex-col p-5 rounded-lg">
              <span>Penmenship is interested in your service request</span>
              <span>Gunner445 is interested in your service request</span>
            </div>
            <div className="directMessage h-full w-11/12 bg-yellow-100 mt-2 rounded-xl">
              <div className="message Streams w-1/4 bg-white h-full m-2 p-2 flex flex-col">
                <p>Penmenship</p>
                <p>Gunner445</p>
                <p>MajorLaz0r</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfile
