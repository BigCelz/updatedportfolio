import React from "react";
import heroimg from "../assets/hero3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 bg-blue-100 min-h-screen flex items-center justify-center px-10">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="font-bold text-2xl text-gray-800">Hi</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            I'm <span className="text-orange-600">Stanley Chilaka</span>
          </h1>
          <p className="text-gray-700 text-lg ">
            I’m a frontend developer passionate about building beautiful and
            functional web experiences. Let’s build something great together.
          </p>

          <div className="mt-4 space-x-6">
            <Link to="/projects">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap duration-300 shadow">
                Projects
              </button>
            </Link>

            <Link to="/form">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap duration-300 shadow">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={heroimg}
            alt="Hero Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
