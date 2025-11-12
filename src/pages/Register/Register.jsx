import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { auth } from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Register = () => {
    
  const {createUser} = use(AuthContext);

  const handleRegister = e => {
    e.preventDefault()
    
    const name = e.target.name.value;
    const image = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const newUser = {name, image, email}

      // password validation by RegEx (regular expressions)!
        const passwordLengthRegex = /^.{6,}$/;
        const passwordCaseRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
         

        if(!passwordLengthRegex.test(password)){
             toast.error('Password should contain 6 charecters!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              
              });
            return;
        }
        else if(!passwordCaseRegex.test(password)){
           toast.error('Password should contains uppercase and lowercase!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
               
              });
            return;
        }
         

    createUser(email, password)
    .then(result => {
        const user = result.user;
       
         if(user && user.displayName == null){
                if(user.providerData){
                    if(user.providerData[0]){
                         if(user.providerData[0].providerId == "password"){
                            user.displayName = name
                            user.photoURL = image
                         }
                    }
                }
            }
            fetch('http://localhost:3000/users', {
              method: "POST",
              headers: {
                'content-type':'application/json'
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
              console.log('after saved to db =>', data);
            })
        console.log(user);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
        .then(() => {
          toast.success('User Register Successfull!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
        })
        .catch(error => {
          console.log(error)
          toast.error(error.message)
        })  
      })
      .catch(error => {
      toast.error(error.message)
        console.log(error);
    })
    
    console.log('register');

  }


  return (
     <div className=" flex font-sans">
      {/* Left Panel */}
      <div className="w-1/2 bg-cover bg-center relative hidden lg:block" style={{ backgroundImage: "url('/sand-dunes.jpg')" }}>
        <div className="absolute inset-0 bg-black h-[638px] bg-opacity-40 flex flex-col justify-between p-8 text-white">
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
            <div className="flex justify-center w-full space-x-4">
               {/* google login */}
               <SocialLogin></SocialLogin>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;