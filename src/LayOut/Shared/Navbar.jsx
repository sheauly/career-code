import React, { use } from 'react';
import { Links, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user, logOutUser } = use(AuthContext);
    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
    </>

    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            console.log('log out user' )
        })
            .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-gray-100 w-11/12 mx-auto shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} className='btn' >Log Out</button>:
                        <>
                            <NavLink to="/register" className='btn' >Register</NavLink>
                            <NavLink to="/login" className='btn' >Login</NavLink>
                        </>
                }
            </div>
      </div>
    );
};

export default Navbar;