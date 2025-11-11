import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const Register = () => {

    const {createUser} = use(AuthContext);

  const handleRegister = e => {
    e.preventDefault()
    
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const newUser = {name, photoURL, email, password}

    createUser(email, password)
    .then(result => {
        const user = result.user;
       
         if(user && user.displayName == null){
                if(user.providerData){
                    if(user.providerData[0]){
                         if(user.providerData[0].providerId == "password"){
                            user.displayName = name
                            user.photoURL = photoURL
                         }
                    }
                }
            }
        console.log(result);
    })
    .then(error => {
        console.log(error);
    })
    
    console.log('register');

  }


  return (
     <div className="min-h-screen flex font-sans">
      {/* Left Panel */}
      <div className="w-1/2 bg-cover bg-center relative hidden lg:block" style={{ backgroundImage: "url('/sand-dunes.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-8 text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-wide">PawMart</h1>
            <Link to="/" className="text-sm underline hover:text-gray-300">Back to Home</Link>
          </div>
          <div className="text-center mt-auto mb-20">
            <h2 className="text-2xl font-semibold">Capturing Moments, Creating Memories</h2>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold ">Create an account</h2>
          <Link to="/login" className="text-sm text-gray-600">
            Already have an account? <p  className="text-blue-600 hover:underline">Log in</p>
          </Link>   

          <form onSubmit={handleRegister} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
               
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="photoURL"
                type="text"
                placeholder="PhotoURL"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
             name="email"
              type="email"
              placeholder="Email"
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#30b5b2] text-white py-2 rounded-md cursor-pointer transition"
            >
              Create account
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Or register with</p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100">
                <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </button>
              <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100">
                <img src="/apple-icon.svg" alt="Apple" className="w-5 h-5 mr-2" />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;