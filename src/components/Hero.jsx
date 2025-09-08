import React from "react";
import heroimg from "../assets/hero3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 animate-fadeIn">
          <p className="font-bold text-2xl text-gray-800">👋 Hi</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            I'm <span className="text-orange-600">Stanley Chilaka</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            I’m a frontend developer passionate about building beautiful and
            functional web experiences. Let’s build something great together.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/projects">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-300 shadow-md hover:scale-105">
                Projects
              </button>
            </Link>

            <Link to="/form">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-300 shadow-md hover:scale-105">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section (hidden on mobile) */}
        <div className="w-full md:w-1/2 hidden md:block animate-slideUp">
          <img
            src={heroimg}
            alt="Hero Illustration"
            className="w-full h-auto object-cover rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
