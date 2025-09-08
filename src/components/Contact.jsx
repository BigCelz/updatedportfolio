// import React from 'react'
// import {  FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section className="w-full py-20 px-6 bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
//         <div>
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Email</h2>
//           <a href="mailto:stanleychilaka22270@gmail.com">
//             <p className="text-gray-700 flex items-center hover:text-orange-600"> <FaEnvelope className='mr-2' /> stanleychilaka22270@gmail.com</p>
//           </a>
//           <a href="mailto:bigcellz26@yahoo.com">
//             <p className="text-gray-700 flex items-center hover:text-orange-600"> <FaEnvelope className='mr-2' /> bigcellz26@yahoo.com</p>
//           </a>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Connect</h2>
//           <div className="flex items-center gap-4 text-2xl text-orange-500">
//             <a href="https://github.com/BigCelz" target="_blank" rel="noopener noreferrer"><FaGithub size={22} className='text-gray-800 hover:text-orange-600' /></a>
//             <a href="https://x.com/parcel_parcels?t=ZQFKsOqhOjglo0yy1WZISA&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-gray-800  hover:text-orange-600' /></a>
//             <a href="https://www.linkedin.com/in/stanley-chilaka-50006b2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-gray-800  hover:text-orange-600' /></a>
//             <a href="https://wa.link/0ljeic" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-gray-800  hover:text-orange-600' /></a>
//           </div>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Phone</h2>
//           <a href="tel:+2348104822035"><p className="text-gray-700 flex items-center hover:text-orange-600"> <FaPhone className='mr-2'/> +2348104822035</p></a>
//           <a href="tel:+2348155666324"><p className="text-gray-700 flex items-center hover:text-orange-600"> <FaPhone className='mr-2'/> +2348155666324</p></a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;



import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Email */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Email</h2>
          <a href="mailto:stanleychilaka22270@gmail.com">
            <p className="text-gray-700 flex items-start gap-2 hover:text-orange-600 transition break-words">
              <FaEnvelope className="mt-1 shrink-0" />
              <span>stanleychilaka22270@gmail.com</span>
            </p>
          </a>
          <a href="mailto:bigcellz26@yahoo.com">
            <p className="text-gray-700 flex items-start gap-2 hover:text-orange-600 transition mt-2 break-words">
              <FaEnvelope className="mt-1 shrink-0" />
              <span>bigcellz26@yahoo.com</span>
            </p>
          </a>
        </div>

        {/* Connect */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Connect</h2>
          <div className="flex items-center gap-6 text-2xl">
            <a
              href="https://github.com/BigCelz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/parcel_parcels?t=ZQFKsOqhOjglo0yy1WZISA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-chilaka-50006b2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.link/0ljeic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Phone</h2>
          <a href="tel:+2348104822035">
            <p className="text-gray-700 flex items-center gap-2 hover:text-orange-600 transition">
              <FaPhone /> +2348104822035
            </p>
          </a>
          <a href="tel:+2348155666324">
            <p className="text-gray-700 flex items-center gap-2 hover:text-orange-600 transition mt-2">
              <FaPhone /> +2348155666324
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;





