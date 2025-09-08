// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="bg-gray-800 text-white py-5 flex items-center justify-center px-6">
//       <h2 className="italic">© 2025 All Rights Reserved</h2>
//     </div>
//   )
// }

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <h2 className="italic text-sm sm:text-base hover:text-white transition">
          © 2025 All Rights Reserved
        </h2>
        <p className="text-xs sm:text-sm text-gray-400">
          Built with ❤️ using Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
