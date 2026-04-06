import React from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { RiCodeSSlashLine, RiRobot3Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

import { IoIosArrowForward } from "react-icons/io";

const OurServices = () => {
  // Styles applied to every row wrapper
  const rowBaseClass = "flex items-end px-0 mb-8";

  // Styles for the H2 (Cut effect)
  const headerClass = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-none overflow-hidden h-[0.75em] md:h-[0.8em]";


  // Styles for the Right Column (Paragraph + Icon)
  // const rightColClass = "w-1/2 flex items-center justify-between pl-10 pb-2";
  const rightColClass =
    "w-1/2 flex items-center justify-end md:justify-between pl-10 pb-2";


  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-12 px-1 pb-10">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold whitespace-nowrap">
            Our<span className="font-caveat text-amber-400 "> Services
            </span>
          </h1>

          {/* Button */}
          <a
            href="#"
            className="
      inline-flex items-center justify-center
      border border-amber-400 text-amber-400
      rounded-full
      px-3 py-2 sm:px-4 sm:py-1.5
      hover:bg-amber-400 hover:text-black
      transition font-bold
    "
          >
            {/* Text → hidden on small screens */}
            <span className="hidden sm:inline text-lg">
              See our Approach
            </span>

            {/* Icon → always visible */}
            <MdKeyboardArrowRight size={24} className="sm:ml-2" />
          </a>

        </div>


        {/* SERVICE ROWS */}
        <div className="space-y-8">

          {/* Branding */}
          <div className={rowBaseClass}>
            {/* Left Side: Title (50%) */}
            <div className="w-1/2">
              <h2 className={headerClass}>Branding</h2>
            </div>

            {/* Right Side: Description + Icon (50%) */}
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                Branding Identity, Strategy & Consult, Positioning, Rebrand
              </p>
              {/* <div className="w-8 flex justify-center text-xl text-gray-200 ml-28 sm:ml-16"> */}
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-auto md:ml-0">
                <IoMegaphoneOutline />
              </div>
            </div>
          </div>

          {/* Design */}
          <div className={rowBaseClass}>
            <div className="w-1/2">
              <h2 className={headerClass}>Design</h2>
            </div>
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                Graphics, Illustration, Animation, Product, Architecture
              </p>
              {/* <div className="w-8 flex justify-center text-xl text-gray-200 ml-28 sm:ml-16"> */}
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-auto md:ml-0">
                <FaPencilRuler />
              </div>
            </div>
          </div>

          {/* Code */}
          <div className={rowBaseClass}>
            <div className="w-1/2">
              <h2 className={headerClass}>Code</h2>
            </div>
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                Mobile App, Web Development, AI, Robotics
              </p>
              {/* <div className="w-8 flex justify-center text-xl text-gray-200 ml-28 sm:ml-16"> */}
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-auto md:ml-0">
                <RiCodeSSlashLine />
              </div>
            </div>
          </div>

          {/* Growth — with border touching the text */}
          <div className="flex items-end px-0 border-b border-gray-700 pb-0 mb-8">
            <div className="w-1/2">
              <h2 className={headerClass}>Growth</h2>
            </div>
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                Analytics, Strategy, SMM, SEO
              </p>
              {/* <div className="w-8 flex justify-center text-xl text-gray-200 ml-28 sm:ml-16"> */}
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-auto md:ml-0">
                <IoRocketSharp />
              </div>
            </div>
          </div>

          {/* Automate */}
          <div className="flex items-end px-0 border-b border-gray-800 pb-12">
            <div className="w-1/2">
              <h2 className="text-[clamp(3rem,12vw,5rem)] font-semibold leading-none text-amber-400">
                Automate
              </h2>
            </div>
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                AI Systems, Workflows, SaaS, Production, Tools
              </p>
              {/* <div className="w-8 flex justify-center text-xl text-gray-200 ml-28 sm:ml-16"> */}
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-auto md:ml-0">
                <RiRobot3Line />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;