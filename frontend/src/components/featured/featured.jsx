import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { featuredData } from "../../data/featuredData";
import FeaturedCard from "../ui/featuredCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./featured.css";


const Featured = () => {

  return (
    <div className="h-full w-full bg-white-100 pb-0 pt-0">
        <div className="w-[90%] lg:w-[68%] mx-auto" data-aos="fade-up">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center py-4 mb-6 gap-4 sm:gap-6 md:gap-0">

          {/* Heading Text */}
          <div className="heading">
            <h1 className="flex items-center">
              <span className="text-black font-[650] text-2xl sm:text-5xl md:text-[56px] leading-none tracking-tight">
                Featured
              </span>
              <span 
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 600
                }}
                className="text-[#DF9931] ml-3 text-4xl sm:text-5xl md:text-[56px] leading-none"
              >
                Works
              </span>
            </h1>
          </div>

          {/* Button */}
          <div className="button">
            <button
              className="
          inline-flex items-center justify-center
          border border-black text-black
          rounded-[2rem]
          px-5 py-2.5 sm:px-6 sm:py-3
          font-bold text-base sm:text-[17px]
          hover:bg-black hover:text-white
          transition duration-300 w-fit
        "
            >
              <span className="inline">
                See all projects
              </span>

              <MdKeyboardArrowRight size={24} className="sm:ml-1" />
            </button>
          </div>

        </div>


        {/* main card section */}


        <div className="flex flex-col md:flex-row items-start py-4">

            <div className="flex-1 min-w-0 w-full">
          <Swiper
            className="!pb-12"
            loop={true}
            spaceBetween={16}
            slidesPerView={1.15}
            grabCursor={true}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            speed={600}
            breakpoints={{
              320: { slidesPerView: 1.05 },
              480: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.3 },
              1024: { slidesPerView: 1.4 }
            }}
          >
              {featuredData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="h-full">
                    <FeaturedCard
                      image={item.image}
                      title={item.title}
                      description={item.description}
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

export default Featured;
