import React from "react";
import { service } from "./ServiceData";

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-12 mt-8 text-gray-800 tracking-tight">
          My Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {service.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center items-center mt-2 mb-6 text-orange-600 text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


