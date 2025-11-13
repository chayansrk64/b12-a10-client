
import { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import { toast } from 'react-toastify';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
    const {user, loading, logOut} = use(AuthContext);
    // console.log(user);

    const links = <>
         <li><NavLink to="/"  className={({ isActive }) =>
    isActive
      ? "bg-pink-500 text-white px-4 py-2   font-medium shadow-sm"
      : "text-white px-4 py-2  transition"
  }>Home</NavLink></li>
         <li><NavLink to="/my-and-supplies" className={({ isActive }) =>
    isActive
      ? "bg-pink-500 text-white px-4 py-2   font-medium shadow-sm"
      : "text-white px-4 py-2  transition"
  }>Pets and Supplies</NavLink></li>
         {
            user && <>
                <li><NavLink to="/add-listing" className={({ isActive }) =>
    isActive
      ? "bg-pink-500 text-white px-4 py-2   font-medium shadow-sm"
      : "text-white px-4 py-2  transition"
  }>Add Listing</NavLink></li>
                <li><NavLink to="/my-listings" className={({ isActive }) =>
    isActive
      ? "bg-pink-500 text-white px-4 py-2   font-medium shadow-sm"
      : "text-white px-4 py-2  transition"
  }>My Listings</NavLink></li>
                <li><NavLink to="/my-orders" className={({ isActive }) =>
    isActive
      ? "bg-pink-500 text-white px-4 py-2   font-medium shadow-sm"
      : "text-white px-4 py-2  transition"
  }>My Orders</NavLink></li>
            </>
         }
       
         
    </>

    const handleLogOut = () => {
        logOut()
        .then(() => toast('sign out successfull'))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? "light" : "dark")
    }

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='bg-[#30b5b2]'>
         <div className='sticky top-0 z-10 max-w-[1440px] mx-auto'>
             <div className="navbar  text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-[#1d4854] rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Paw <span className='text-[#e9598e]'>Mart</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>

                        <input
                        onChange={(e) => handleTheme(e.target.checked)}
                         type="checkbox" 
                         defaultChecked={localStorage.getItem('theme')}
                         className="toggle me-2" />

                        <img className='w-10 h-10 rounded-full me-2' title={user?.displayName || "User"} src={ user?.photoURL} alt="" />
                        <a onClick={handleLogOut} className="btn bg-pink-500 text-white ">Logout</a>
                        </>  : 
                        <>
                        <Link to="/login" className="btn me-2">Log in</Link>
                        <Link to="/register" className="btn">Register</Link>
                        </>
                }
              
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;