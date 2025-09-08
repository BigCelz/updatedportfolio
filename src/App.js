// import "./App.css";
// import Hero from "./components/Hero";
// import Navigation from "./components/Navigation";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Services from "./components/Services";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Form from "./components/Form";
// import Footer from "./components/Footer";


// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/form" element={<Form/>}/>
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;



import "./App.css";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App font-sans bg-gray-50 text-gray-800 scroll-smooth">
      <BrowserRouter>
        {/* Sticky nav for modern UX */}
        <header className="sticky top-0 z-50 shadow-md bg-white">
          <Navigation />
        </header>

        {/* Main Content Area */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </main>

        {/* Footer with separation */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

