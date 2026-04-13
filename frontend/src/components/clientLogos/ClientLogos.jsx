import React from 'react';

const ClientLogos = () => {
  return (
    <>
      {/* ── Client Logos ── */}
      <div className="w-full bg-white relative z-1016" data-aos="fade-up">
        <div className="w-[90%] lg:w-[68%] mx-auto pt-4 pb-4 md:pt-6 md:pb-6">
          {/* Use a 3-column grid on mobile so all 6 icons are guaranteed to stay on screen, and flex row on desktop */}
          <div className="flex flex-wrap md:justify-center items-center gap-y-8 gap-x-4 sm:gap-12 md:gap-8 lg:gap-10 opacity-100 grayscale-0 transition-all duration-300" data-aos="fade-up">
            {/* National information technology development agency */}
            <img 
              src="https://res.cloudinary.com/de3ryzm92/image/upload/v1776081769/national1-removebg-preview_ahzvuy.png" 
              alt="National information technology development agency" 
              className="h-8 sm:h-9 md:h-11 object-contain"
            />
            {/* Astruct */}
            <img 
              src="https://res.cloudinary.com/de3ryzm92/image/upload/v1775791874/3_qofvis.png" 
              alt="Astruct" 
              className="h-8 sm:h-9 md:h-11 object-contain mt-2"
            />
            {/* transitY */}
            <img 
              src="https://res.cloudinary.com/de3ryzm92/image/upload/v1776081581/transity3-removebg-preview_1_eiflyg.png" 
              alt="transitY" 
              className="h-9 sm:h-11 md:h-12 object-contain"
            />
            {/* Quiksilver */}
            <img 
              src="https://res.cloudinary.com/de3ryzm92/image/upload/v1776081909/quick4-removebg-preview_hc0dj3.png" 
              alt="Quiksilver" 
              className="h-8 sm:h-9 md:h-11 object-contain"
            />
            {/* EXCAPE cleaning hub */}
            <img 
              src="https://res.cloudinary.com/de3ryzm92/image/upload/v1775789150/1_ae3iqs.png" 
              alt="EXCAPE cleaning hub" 
              className="h-5 sm:h-6 md:h-8 object-contain"
            />
          </div>
        </div>
      </div>

      <hr className="w-[90%] lg:w-[68%] mx-auto border-gray-200" />
    </>
  );
};

export default ClientLogos;
