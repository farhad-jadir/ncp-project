import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Vision", path: "/vision" },
  { name: "Mission", path: "/mission" },
  { name: "Works", path: "/works" },
  { name: "History", path: "/history" },
  { name: "Member List", path: "/members" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full z-20">
      <div className="max-w-8xl md:px-32 mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Title (link to home) */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/ncp.png"
            alt="NCP Logo"
            className="w-10 h-10 md:w-16  md:h-16 rounded-full border-2 border-white"
          />
          <div className="leading-tight">
            <span className="text-sm md:text-lg font-semibold block">
              জাতীয় নাগরিক পার্টি (NCP)
            </span>
            <p className="text-xs md:text-sm px-4">বাঘারপাড়া উপজেলা, যশোর</p>
          </div>
        </Link>

        {/* Center: Desktop Nav Links */}
        <ul className="hidden md:flex space-x-12 text-base md:text-lg font-bold">
  {navLinks.map((link) => (
    <li key={link.name} className="group relative overflow-hidden rounded-md">
      <Link
        to={link.path}
        className="relative inline-block px-4 py-2 group"
      >
        {/* Animated Background: starts orange, on hover deep red */}
        <span className="absolute inset-0 bg-orange-500 group-hover:bg-red-900 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-in-out z-0 rounded-md"></span>

        {/* Text */}
        <span className="relative z-10 text-white group-hover:text-gray-100 transition-colors duration-300 ease-in-out">
          {link.name}
        </span>

        {/* Underline */}
        <span className="absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full z-10"></span>
      </Link>
    </li>
  ))}
</ul>



        {/* Right: Join Icon + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Join Button (Always visible) */}
          <Link
            to="/join"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full md:p-4 p-2 border-4 border-white"
          >
            <FaPlus />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 shadow-inner px-4 pb-4">
          <ul className="flex flex-col space-y-2 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-white hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
