
import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Login = () => {

    const {signInUser} = use(AuthContext);
     const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";

  
  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
    .then(() => {
      toast.success("Login Successfull!")
       navigate(from, { replace: true });
    })
    .catch(error => toast.error(error.message))
  }


  return (
    <div className="flex mt-16 min-h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-cover bg-center relative hidden lg:block" style={{ backgroundImage: "url('/sand-dunes.jpg')" }}>
        <div style={{ backgroundImage: "url('https://images.stockcake.com/public/2/3/a/23af9c63-075a-4371-be6d-378302a8d420_large/puppy-with-toy-stockcake.jpg')",   backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center", }} className="absolute inset-0  bg-[#B7B89F] bg-opacity-40 flex flex-col justify-between p-8 text-white">
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
          <h2 className="text-3xl font-bold ">Log in to your account</h2>
          <Link to="/register" className="text-sm text-gray-600">
            Don't have an account? <p className="text-blue-600 hover:underline">Register</p>
          </Link>

          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            
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
             
            <button
              type="submit"
              className="w-full bg-[#30b5b2] text-white py-2 rounded-md transition"
            >
              Log in to your account
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Or register with</p>
            <div className="flex justify-center space-x-4">
              {/* google login */}
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;