import React from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TestomonialCard = ({ testomonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < rating) return <FaStar key={i} className="text-yellow-400" />;
      return <FaRegStar key={i} className="text-yellow-400" />;
    });
  };
  return (
    <>
      <div className="relative group bg-white hover:bg-orange-100  rounded-2xl  p-8 text-left flex flex-col justify-between overflow-hidden min-h-[300px]">
        <FaQuoteLeft className="text-yellow-400 text-2xl mb-4" />
        <p className="text-gray-600  mb-6">{testomonial.feedback}</p>
        <div className="flex items-center justify-between mt-auto relative z-10">
          <div className="flex items-center gap-3">
            {/* <img
              src={testomonial.image}
              alt={testomonial.name}
              className="w-12 h-12 rounded-full object-cover"
            /> */}
            <div>
              <h3 className="font-bold text-gray-800">{testomonial.name}</h3>
              <span className="text-sm text-gray-500">{testomonial.role}</span>
            </div>
          </div>
          <div className="flex">{renderStars(testomonial.rating)}</div>
        </div>

        {/* Hover Image */}
        <div className="absolute bottom-[-100px] left-0 w-full opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
          <img
            src="/images/testimonial-bg.png"
            alt="hover"
            className="w-full object-cover rounded-b-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default TestomonialCard;
