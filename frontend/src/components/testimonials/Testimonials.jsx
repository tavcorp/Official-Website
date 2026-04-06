import React from "react";
import { MdMessage } from "react-icons/md";
import { testimonialsData } from "../../data/testimonialsData";
import TestimonialsCard from "../ui/TestimonialsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="bg-black text-white pt-20 pb-10 px-4">
      <div className="max-w-5xl mx-auto bg-[#181818] py-16 px-6 rounded-xl">

        {/* <div className="flex flex-col md:flex-row items-center md:items-start"> */}

        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-0">


          {/* Left Icon (will appear on top on small screens) */}
          {/* <MdMessage className="text-yellow-400 text-6xl md:text-9xl flex-shrink-0 self-start mt-16 ml-8" /> */}
          <MdMessage
            className="
    text-yellow-400
    text-5xl sm:text-6xl md:text-9xl
    flex-shrink-0
    self-center md:self-start
    mt-6 sm:mt-8 md:mt-16
    mx-auto md:mx-0
  "
          />


          {/* Right Swiper - give it a fixed flex-basis so card has room */}
          {/* <div className="flex-1 min-w-0 w-full"> */}
          <div className="flex-1 min-w-0 w-full mt-6 md:mt-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              speed={600}
              className="testimonials-swiper"
            >
              {testimonialsData.map((item) => (
                <SwiperSlide key={item.id} className="slide-center">
                  <div className="slide-inner px-4">
                    <TestimonialsCard
                      message={item.message}
                      name={item.name}
                      title={item.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
