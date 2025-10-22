import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoimage from "../../assets/lai.png";
import { Authcontext } from "./authcontext/Authcontext";

const themes = [
  { background: "#3b82f6", text: "#ffffff", name: "Blue" },
  { background: "#10b981", text: "#ffffff", name: "Green" },
  { background: "#f59e0b", text: "#000000", name: "Yellow" },
  { background: "#ef4444", text: "#ffffff", name: "Red" },
];

const NavBar = () => {
  const { user, signOutUser } = useContext(Authcontext);
  const [themeIndex, setThemeIndex] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Theme effect
  useEffect(() => {
    const theme = themes[themeIndex];
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
  }, [themeIndex]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    signOutUser()
      .then(() => console.log("User logged out"))
      .catch((err) => console.error(err));
  };

  const toggleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/all-books" },
    { name: "My Books", path: "/my-books" },
    { name: "Add Books", path: "/add-books" },
    { name: "Borrowed Books", path: "/borrowed-books" },
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-md bg-white/20 shadow-lg`}
        style={{ transform: showNav ? "translateY(0)" : "translateY(-100%)", height: "70px" }}
      >
        <div className="flex justify-between items-center h-full px-5 lg:px-16">
          {/* Logo + Mobile Dropdown */}
          <div className="flex items-center gap-4">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links.map((link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `font-semibold ${isActive ? "text-yellow-500" : ""}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-black">
              <img src={logoimage} className="w-12 h-10" alt="Logo" />
              My Books
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
              {links.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded font-semibold transition-colors duration-300 hover:bg-black hover:text-white ${
                        isActive ? "bg-black text-white" : "text-black"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="btn btn-sm bg-black text-white hover:bg-gray-800 transition-colors"
              title={`Switch to ${themes[(themeIndex + 1) % themes.length].name} theme`}
            >
              Theme: {themes[themeIndex].name}
            </button>

            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* Spacer for content */}
      <div style={{ height: "70px" }} />
    </>
  );
};

export default NavBar;
