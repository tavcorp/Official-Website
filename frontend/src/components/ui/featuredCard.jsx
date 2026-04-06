import React from 'react'

const FeaturedCard = ({ image, title, description }) => {
  return (
    <div className="w-full rounded overflow-hidden bg-white">

      <div className="h-96  sm:h-72 md:h-96 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 rounded-3xl"
        />
      </div>

      <div className="px-4  sm:px-6 py-4">
        <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeaturedCard