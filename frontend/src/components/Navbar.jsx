import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#7A2F83] via-[#B92F72] to-[#EE4043] text-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img width="80px" className="" src={logo} alt="MyBrand Logo" />
            <span className="text-2xl font-merienda font-bold tracking-wide text-white ml-2">
              Calories
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-white hover:bg-[#B92F72] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-white hover:bg-[#B92F72] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/team"
              className="px-3 py-2 rounded-md text-white hover:bg-[#B92F72] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
            >
              Team
            </Link>
            <Link
              to="/support"
              className="px-3 py-2 rounded-md text-white hover:bg-[#B92F72] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
            >
              Support
            </Link>
            <Link
              to="/form"
              className="px-3 py-2 rounded-md text-white hover:bg-[#B92F72] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
            >Sign-In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#E9BFBD] hover:text-white hover:bg-[#EE4043] transition duration-300 ease-in-out"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 animate-pulse" />
              ) : (
                <FaBars className="h-6 w-6 animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links with Animation */}
      <div
        className={`md:hidden bg-gradient-to-b from-[#B92F72] to-[#EE4043] overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <Link
          to="/"
          className="block px-4 py-2 text-white hover:bg-[#7A2F83] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 text-white hover:bg-[#7A2F83] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/team"
          className="block px-4 py-2 text-white hover:bg-[#7A2F83] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Team
        </Link>
        <Link
          to="/support"
          className="block px-4 py-2 text-white hover:bg-[#7A2F83] hover:text-[#E9BFBD] transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Support
        </Link>
      </div>
    </nav>
  );
}
