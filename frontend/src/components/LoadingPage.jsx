import React from 'react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black gap-0">
      {/* Top Image -gradient-to-b from-[#DF9931] to-white*/}
      <img 
        src="https://res.cloudinary.com/de3ryzm92/image/upload/v1776085139/tav__1_-removebg-preview_n9eb68.png" 
        alt="Loading" 
        className="h-24 md:h-32 object-contain animate-bounce"
      />
      
      {/* Bottom Image */}
      {/* <img 
        src="https://res.cloudinary.com/de3ryzm92/image/upload/c_fill,q_auto,f_auto/v1776084953/Crop_Main_Logo_ntei2c.png" 
        alt="Loading" 
        className="h-10 md:h-12 object-contain opacity-80"
      /> */}
    </div>
  );
};
export default LoadingPage;