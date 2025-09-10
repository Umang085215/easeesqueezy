import React from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < rating) return <FaStar key={i} className="text-yellow-400" />;
      return <FaRegStar key={i} className="text-yellow-400" />;
    });
  };
  return (
    <>
      <div className="relative  group bg-orange-50  rounded-2xl  p-8 text-left flex flex-col items-center justify-center  overflow-hidden min-h-[300px]">
        <FaQuoteLeft className="text-yellow-400 text-2xl mb-4" />
        <p className="text-gray-600  mb-6">{testimonial.feedback}</p>
        <div className="w-full flex items-center justify-between mt-auto relative z-10">
          <div className="flex">{renderStars(testimonial.rating)}</div>
          <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
        </div>

        {/* Hover Image */}
        <div className="absolute bottom-[0px] left-0 w-full opacity-100 transition-all duration-500 ease-in-out  ">
          <img
            src="/images/testimonial-bg.png"
            alt="hover"
            loading="lazy"
            className="w-full object-cover rounded-b-2xl"
          />
        </div>
        {/* <div className="absolute bottom-[-100px] left-0 w-full opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
          <img
            src="/images/testimonial-bg.png"
            alt="hover"
            loading="lazy"
            className="w-full object-cover rounded-b-2xl"
          />
        </div> */}
      </div>
    </>
  );
};

export default TestimonialCard;
