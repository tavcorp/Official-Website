import React from 'react';

const ClientLogos = () => {
  return (
    <>
      {/* ── Client Logos ── */}
      <div className="w-full bg-white relative z-1016" data-aos="fade-up">
        <div className="w-[90%] lg:w-[68%] mx-auto pt-4 pb-4 md:pt-6 md:pb-6">
          {/* Use a 3-column grid on mobile so all 6 icons are guaranteed to stay on screen, and flex row on desktop */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap justify-items-center items-center justify-center gap-y-8 gap-x-4 sm:gap-12 md:gap-8 lg:gap-10 opacity-100 grayscale-0 transition-all duration-300" data-aos="fade-up">
            {/* McDonalds */}
            <img 
              src="/images/national1.png" 
              alt="McDonald's" 
              className="h-8 sm:h-9 md:h-11 object-contain"
            />
            {/* Astruct */}
            <img 
              src="/images/astruct2.jpeg" 
              alt="Astruct" 
              className="h-8 sm:h-9 md:h-11 object-contain mt-2"
            />
            {/* Lacoste */}
            <img 
              src="/images/transity3.png " 
              alt="Lacoste" 
              className="h-9 sm:h-11 md:h-12 object-contain"
            />
            {/* Quiksilver */}
            <img 
              src="/images/quick4.png" 
              alt="Quiksilver" 
              className="h-8 sm:h-9 md:h-11 object-contain"
            />
            {/* Nvidia */}
            <img 
              src="/images/clean5.png" 
              alt="Nvidia" 
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
