import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t mt-10">
      <div className="container mx-auto py-10 px-5">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <motion.h2
            className="text-2xl font-bold text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            📚 Book Trending Hub
          </motion.h2>

          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "All Books", path: "/all-books" },
              { name: "My Books", path: "/my-books" },
              { name: "Add Books", path: "/add-books" },
              { name: "Borrowed Books", path: "/borrowed-books" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300 my-6"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-primary transition duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-primary transition duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-primary transition duration-300">
            <FaYoutube size={22} />
          </a>
          <a href="#" className="hover:text-primary transition duration-300">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold">Book Trending Hub</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
