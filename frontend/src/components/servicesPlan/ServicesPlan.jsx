import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <div className="bg-black text-white py-12 px-6">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold">
          Services <span className="font-caveat text-[#DF9931]">
            Plans
          </span>
        </h1>

        {/* Button */}
        <a
          href="#"
          className="
      flex items-center justify-center
      text-[#DF9931] border border-[#DF9931]
      px-2 py-1 sm:px-3 sm:py-1
      rounded-xl
      hover:bg-[#DF9931] hover:text-[#1B1B1B]
      transition
    "
        >
          {/* Text → hidden on small screens */}
          <span className="hidden sm:inline">
            Our Subscription
          </span>

          {/* Icon → always visible */}
          <IoIosArrowForward className="text-lg sm:ml-1" />
        </a>

      </div>


      {/* Subtitle */}
      <div className="max-w-lg">
        <p className="text-gray-300">
          Clear, straightforward plans tailored to your needs.
          <br />
          Choose a plan and kick-start now
        </p>
      </div>

    </div>
  );
};

export default Services;
