import React, { use } from 'react';
import { NavLink } from 'react-router';
import logoimage from '../../assets/lai.png'
import { Authcontext } from './authcontext/Authcontext';



const NavBar = () => {

const {user,signOutUser}=use(Authcontext)
  const hanldeLogout = () => {
    signOutUser()
    .then(() => {
      console.log('User logged out');
    })
    .catch(error => {
      console.error('Error logging out:', error);
    }); 
  }



  const links =  <>
  <li>
    <NavLink 
      to="/"  
      className={({ isActive }) => isActive ? "active-link text-red-600  hover:text-blue-700" : ""}
      end // important for exact matching on "/"
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/all-books"
      className={({ isActive }) => isActive ? "active-link text-blue-500" : ""}
    >
      All Books
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/my-books"
      className={({ isActive }) => isActive ? "active-link text-blue-500" : ""}
    >
      My Books
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/add-books"
      className={({ isActive }) => isActive ? "active-link text-blue-500" : ""}
    >
      Add Books
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/borrowed-books"
      className={({ isActive }) => isActive ? "active-link text-blue-500" : ""}
    >
      Borrowed Books
    </NavLink>
  </li>
</>
  return (
    <div className='w-11/12 mx-auto mt-9'>
      <div className="navbar bg-blue-50 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
          <a className="btn btn-ghost text-4xl font-bold text-green-800">  My Books<img src={logoimage} className='w-15 h-10' alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
          {
            user?<button onClick={hanldeLogout} className='btn btn-active pr-3'>logout</button>:<><NavLink className="btn " to={'/login'}>Login</NavLink>
            <NavLink className="btn " to={'/signin'}>SignIn</NavLink></>
  }
  </div>
</div>
    </div>
  );
};

export default NavBar;