// src/components/Services.jsx
import React from "react";
import { service } from "./ServiceData";

const Services = () => {
  return (
    <section className="py-20 bg-gray-100 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 mt-8 text-gray-800">My Services</h2>

        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {service.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center items-center mt-2 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
