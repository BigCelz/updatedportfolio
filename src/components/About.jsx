import React from "react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800 tracking-tight">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello! I'm <span className="font-semibold text-orange-600">Stanley Chilaka</span>, 
          a forward-thinking web developer passionate about building modern, responsive, 
          and user-friendly digital experiences. I work with technologies like 
          <span className="font-medium text-gray-900"> Next.js</span>, 
          <span className="font-medium text-gray-900"> React</span>, and 
          <span className="font-medium text-gray-900"> Tailwind CSS</span>, while also 
          exploring new frameworks, tools, and best practices in the ever-evolving 
          tech ecosystem. My focus is on creating fast, scalable, and accessible 
          applications that deliver real value. I'm constantly learning, adapting, 
          and pushing myself to stay ahead in the rapidly changing world of web 
          development.
        </p>
      </div>
    </section>
  );
};

export default About;


