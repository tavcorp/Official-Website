import React from "react";
import { MdMessage } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { testimonialsData } from "../../data/testimonialsData";
import TestimonialsCard from "../ui/TestimonialsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-16 md:py-20 lg:py-24">
      <div className="w-[95%] sm:w-[90%] lg:w-[68%] mx-auto bg-[#181818] py-12 px-3 sm:px-6 md:py-16 md:px-12 lg:px-16 rounded-2xl" data-aos="fade-up">

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0" data-aos="zoom-in" data-aos-delay="100">

          {/* Left Icon */}
          <MdMessage
            className="
    text-[#DF9931]
    text-[90px] sm:text-[110px] md:text-[180px] lg:text-[240px]
    flex-shrink-0
    self-start
    mt-0 sm:mt-2 md:mt-4
    ml-2 sm:ml-4 md:ml-0
  "
          />

          {/* Right Swiper */}
          <div className="flex-1 min-w-0 w-full mt-2 md:mt-0">
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
                  <div className="slide-inner px-2 sm:px-4">
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

        {/* Logos Section - Desktop */}
        <div className="mt-24 hidden md:flex flex-wrap justify-between items-center gap-0 px-8">
          {/* archin */}
          <div className="flex items-center justify-center h-[72px] w-[130px] border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer">
            <span className="font-bold text-2xl tracking-tighter lowercase text-white">archin</span>
          </div>

          {/* Mathew coo. */}
          <div className="flex flex-col items-center justify-center h-[72px] w-[130px] border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer">
            <span className="text-[26px] leading-tight text-white mb-[-2px]" style={{ fontFamily: "'Brush Script MT', 'Cedarville Cursive', cursive", fontWeight: 400 }}>Mathew</span>
            <span className="text-[9px] tracking-[0.2em] font-medium text-white/90">coo.</span>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-center h-[72px] w-[100px] border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer">
            <FaGithub className="text-4xl text-white" />
          </div>

          {/* ZUMAR CONS */}
          <div className="flex items-center justify-center h-[72px] w-[140px] gap-2 border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer">
            <svg width="20" height="20" className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex flex-col text-[11px] font-bold leading-[1.1] tracking-wider text-white">
              <span>ZUMAR</span>
              <span>CONS</span>
            </div>
          </div>

          {/* Abstract Square Logo */}
          <div className="flex items-center justify-center h-[72px] w-[110px] border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer mx-0">
            <div className="w-7 h-7 border-[2.5px] border-white flex flex-col justify-end items-end p-[1px] rounded-[3px]">
               <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Logos Section - Mobile Swiper */}
        <div className="mt-16 block md:hidden w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={2.2}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="mobile-logos-swiper pb-4"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center h-[50px] sm:h-[60px] w-[110px] sm:w-[120px] border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer mx-auto">
                <span className="font-bold text-lg sm:text-xl tracking-tighter lowercase text-white">archin</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center h-[50px] sm:h-[60px] w-[110px] sm:w-[120px] border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer mx-auto">
                <span className="text-[18px] sm:text-[22px] leading-tight text-white mb-[-2px]" style={{ fontFamily: "'Brush Script MT', 'Cedarville Cursive', cursive", fontWeight: 400 }}>Mathew</span>
                <span className="text-[7px] sm:text-[8px] tracking-[0.2em] font-medium text-white/90">coo.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center h-[50px] sm:h-[60px] w-[110px] sm:w-[120px] border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer mx-auto">
                <FaGithub className="text-2xl sm:text-3xl text-white" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center h-[50px] sm:h-[60px] w-[110px] sm:w-[120px] gap-1.5 border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer mx-auto">
                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col text-[8.5px] sm:text-[10px] font-bold leading-[1.1] tracking-wider text-white">
                  <span>ZUMAR</span>
                  <span>CONS</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center h-[50px] sm:h-[60px] w-[110px] sm:w-[120px] border border-white/20 rounded-[2rem] hover:bg-white/5 transition duration-300 cursor-pointer mx-auto">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-[1.5px] sm:border-[2px] border-white flex flex-col justify-end items-end p-[1px] rounded-[3px]">
                   <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
