import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-3 py-4 flex justify-between items-center sm:px-5">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-orange-500 whitespace-nowrap hover:scale-105 transition duration-300">
            Stanley Chilaka
          </h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-7">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="relative group cursor-pointer"
            >
              <span className="hover:text-orange-500 transition-colors duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/form">
          <button className="hidden lg:block bg-orange-500 text-white px-4 py-2 rounded font-bold shadow hover:bg-orange-600 hover:scale-105 transition duration-300 whitespace-nowrap">
            Let's Talk
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="border-2 border-dashed border-gray-600 p-3 rounded-lg hover:border-orange-500 transition duration-300"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed md:hidden top-0 left-0 h-full w-[300px] bg-gray-900/95 backdrop-blur-md text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-5 py-4 border-b border-gray-700">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-orange-500 transition duration-300"
          >
            <FaLongArrowAltLeft size={20} />
          </button>
        </div>

        <ul className="flex flex-col px-5 py-4 space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={handleLinkClick}
              className="hover:text-orange-500 hover:pl-2 transition-all duration-300 py-3 border-b border-gray-700"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

