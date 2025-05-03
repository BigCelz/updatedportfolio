import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow ">
      <div className="max-w-7xl mx-auto px-3 py-4 flex justify-between items-center sm:px-5">
        <Link to="/">
          <h1 className="text-2xl font-bold text-orange-500 whitespace-nowrap">
            Stanley Chilaka
          </h1>
        </Link>

        <ul className="hidden md:flex space-x-7">
          <Link to="/" className="hover:text-orange-500 cursor-pointer">
            Home
          </Link>
          <Link to="/services" className="hover:text-orange-500 cursor-pointer">
            Services
          </Link>
          <Link to="/about" className="hover:text-orange-500 cursor-pointer">
            About
          </Link>
          <Link to="/projects" className="hover:text-orange-500 cursor-pointer">
            Projects
          </Link>
          <Link
            to="/testimonials"
            className="hover:text-orange-500 cursor-pointer"
          >
            Testimonials
          </Link>
          <Link to="/contact" className="hover:text-orange-500 cursor-pointer">
            Contact
          </Link>
        </ul>

        <Link to="/form">
          <button className="hidden lg:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap font-bold">
            Let's Talk
          </button>
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="border-2 border-dashed border-gray-600 p-3 rounded-lg"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed md:hidden top-0 left-0 h-full w-[300px] bg-gray-900 text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-5 py-4 border-b border-gray-700">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl text-end"
          >
            <FaLongArrowAltLeft size={18} />
          </button>
        </div>

        <ul className="flex flex-col px-5 py-4 space-y-4 ">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700 text-left"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700 text-left"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700 text-left"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700 text-left"
          >
            Projects
          </Link>
          <Link
            to="/testimonials"
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700 text-left"
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="hover:text-orange-500 cursor-pointer py-3 border-b border-gray-700 text-left"
          >
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
