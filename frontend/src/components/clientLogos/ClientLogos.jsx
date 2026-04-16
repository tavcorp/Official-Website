import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ClientLogos = () => {
  const logos = [
    {
      src: "https://res.cloudinary.com/de3ryzm92/image/upload/v1776355510/stakioooooo-removebg-preview_k89l9o.png",
      alt: "National information technology development agency"
    },
    {
      src: "https://res.cloudinary.com/de3ryzm92/image/upload/v1776081769/national1-removebg-preview_ahzvuy.png",
      alt: "Astruct"
    },
    {
      src: "https://res.cloudinary.com/de3ryzm92/image/upload/v1776081581/transity3-removebg-preview_1_eiflyg.png",
      alt: "transitY"
    },
    {
      src: "https://res.cloudinary.com/de3ryzm92/image/upload/v1776081909/quick4-removebg-preview_hc0dj3.png",
      alt: "Quiksilver"
    },
    {
      src: "https://res.cloudinary.com/de3ryzm92/image/upload/v1775789150/1_ae3iqs.png",
      alt: "EXCAPE cleaning hub"
    },
    {
      src: "https://res.cloudinary.com/de3ryzm92/image/upload/v1776355994/drven2-removebg-preview_jfugdz.png",
      alt: "Stakio - A crypto native staking platform"
    },
    {
      src: "https://res.cloudinary.com/de3ryzm92/image/upload/v1775791874/3_qofvis.png",
      alt: "Digital Solutions"
    }
  ];

  return (
    <>
      {/* ── Client Logos ── */}
      <div className="w-full bg-white relative z-1016" data-aos="fade-up">
        <div className="w-[90%] lg:w-[68%] mx-auto pt-2 pb-2 md:pt-3 md:pb-3">
          {/* Desktop Version with Auto Scroll */}
          <div className="hidden md:block w-full overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={8}
              slidesPerView={5}
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              className="w-full"
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={logo.alt === "EXCAPE cleaning hub" ? "h-8 sm:h-10 md:h-12 object-contain" : "h-8 sm:h-9 md:h-11 object-contain"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile Version with Auto Scroll */}
          <div className="md:hidden w-full overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={4}
              slidesPerView={2.5}
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              className="w-full"
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={logo.alt === "EXCAPE cleaning hub" ? "h-12 sm:h-14 object-contain" : "h-8 sm:h-9 object-contain"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <hr className="w-[90%] lg:w-[68%] mx-auto border-gray-200" />
    </>
  );
};

export default ClientLogos;
