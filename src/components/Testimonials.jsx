import Slider from "react-slick";
import { testimonials } from "./TestimonialData";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true, 
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-blue-100 text-center px-4">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">What People Say</h2>
      
      <div className="w-full max-w-2xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto">
                <p className="text-lg italic mb-6 text-gray-700">
                  "{testimonial.description}"
                </p>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;


