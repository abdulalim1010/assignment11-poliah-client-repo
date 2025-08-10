import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import logoimage from '../../assets/lai.png';
import { Authcontext } from './authcontext/Authcontext';

const themes = [
  { background: '#3b82f6', text: '#ffffff', name: 'Blue' },       // blue
  { background: '#10b981', text: '#ffffff', name: 'Green' },      // green
  { background: '#f59e0b', text: '#000000', name: 'Yellow' },     // yellow
  { background: '#ef4444', text: '#ffffff', name: 'Red' },        // red
];

const NavBar = () => {
  const { user, signOutUser } = useContext(Authcontext);

  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const theme = themes[themeIndex];
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
  }, [themeIndex]);

  const hanldeLogout = () => {
    signOutUser()
      .then(() => {
        console.log('User logged out');
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  const toggleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative px-3 py-2 text-white text-xl font-bold transition-all duration-300 hover:underline hover:underline-offset-8 
            ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={({ isActive }) =>
            `relative px-3 py-2 text-white text-xl font-bold  transition-all duration-300 hover:underline hover:underline-offset-8 
            ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-books"
          className={({ isActive }) =>
            `relative px-3 py-2 text-white text-xl font-bold  transition-all duration-300 hover:underline hover:underline-offset-8 
            ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
        >
          My Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-books"
          className={({ isActive }) =>
            `relative px-3 py-2 text-white text-xl font-bold  transition-all duration-300 hover:underline hover:underline-offset-8 
            ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
        >
          Add Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrowed-books"
          className={({ isActive }) =>
            `relative px-3 py-2 text-white text-xl font-bold  transition-all duration-300 hover:underline hover:underline-offset-8 
            ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='w-full mt-9'>
      <div className="navbar shadow-sm" style={{ backgroundColor: themes[themeIndex].background }}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-bold text-white">
            My Books
            <img src={logoimage} className='w-15 h-10 ml-2' alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease"
            }}
            title={`Switch to ${themes[(themeIndex + 1) % themes.length].name} theme`}
          >
            Theme: {themes[themeIndex].name}
          </button>

          {user ? (
            <button onClick={hanldeLogout} className='btn btn-active bg-white text-blue-600'>
              Logout
            </button>
          ) : (
            <NavLink className="btn" to={'/login'}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
