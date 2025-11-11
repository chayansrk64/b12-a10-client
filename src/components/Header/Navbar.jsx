import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const user = null;
    const links = <>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/my-profile">Pets and Supplies</NavLink></li>
    </>
    return (
         <div className='sticky top-0 z-10'>
             <div className="navbar bg-[#30b5b2] shadow-sm text-white">
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
                       
                        <img className='w-10 h-10 rounded-full me-2' title={user?.displayName || "User"} src={ user?.photoURL} alt="" />
                        <a  className="btn">Logout</a>
                        </>  : 
                        <>
                    
                        <Link to="/login" className="btn me-2">Log in</Link>
                        <Link to="/register" className="btn">Register</Link>
                        </>
                }
                
            </div>
            </div>
        </div>
    );
};

export default Navbar;