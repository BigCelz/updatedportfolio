import React from "react";
import { project } from "./ProjectData";

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">
          My Projects
        </h2>

        <div className="grid gap-8 !md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {project.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-lg shadow-sm hover:shadow-md transition duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

          
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2  text-gray-800">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {project.description}
                </p>

      
                <div className="pt-4 mt-auto border-t">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
