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
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 text-center px-6 py-16">
      <h2 className="text-3xl font-extrabold mb-12 text-gray-800 tracking-tight">
        What People Say
      </h2>

      <div className="w-full max-w-2xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <p className="text-lg italic mb-6 text-gray-700 leading-relaxed">
                  “{testimonial.description}”
                </p>
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;



