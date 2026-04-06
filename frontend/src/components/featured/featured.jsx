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
    <div className="h-full w-full bg-white-100 pb-20 pt-20">

      {/* Heading */}
      <div className="flex flex-row justify-between items-center px-4 sm:px-8 md:px-12 py-4 mb-4">

        {/* Heading */}
        <div className="heading">
          <h1 className="flex items-center">
            <span className="text-black font-[650] text-3xl sm:text-4xl md:text-5xl">
              Featured
            </span>
            <span className="font-caveat text-yellow-400 ml-2 text-3xl sm:text-4xl md:text-5xl font-[600]">
              Works
            </span>
          </h1>
        </div>

        {/* Button */}
        <div className="button">
          <button
            className="
        flex items-center justify-center
        border border-black
        rounded-full
        px-3 py-2 sm:px-4
        hover:bg-black hover:text-white
        transition duration-300
      "
          >
            {/* Text → hidden on small screens */}
            <span className="hidden sm:inline">
              See all projects
            </span>

            <MdKeyboardArrowRight size={24} className="sm:ml-1" />
          </button>
        </div>

      </div>


      {/* main card section */}


      <div className="flex flex-col md:flex-row items-start gap-6 px-4 sm:px-8 md:px-12 py-4">

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
  );
};

export default Featured;
