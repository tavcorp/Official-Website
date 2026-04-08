import React from 'react'

const FeaturedCard = ({ image, title, description }) => {
  return (
    <div className="w-full bg-transparent flex flex-col">

      <div className="h-[26rem] sm:h-[30rem] md:h-[36rem] w-full overflow-hidden rounded-[2rem]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="pt-5 pb-8 flex flex-col items-start gap-1">
        <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-black leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-[15px] sm:text-[17px] text-gray-800 font-medium">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeaturedCard