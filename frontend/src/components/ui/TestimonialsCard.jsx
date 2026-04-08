import React from "react";
import { CgProfile } from "react-icons/cg";

const TestimonialsCard = ({ message, name, title }) => {
  return (
    <div
      className="testimonial-card bg-[#252525] py-2 px-0 sm:p-6 rounded-lg w-full"
      style={{ minHeight: 160 }}
    >


      <p className="text-gray-200 mb-4 leading-relaxed font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        {message}
      </p>


      <hr className="border-gray-700 my-4" />

      <div className="mt-4 flex items-center space-x-4">
        <CgProfile className="text-[#DF9931] text-3xl flex-shrink-0" />
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
