import React, { useState } from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { RiCodeSSlashLine, RiRobot3Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const services = [
  {
    title: "Branding",
    description: "Branding Identity, Strategy & Consult, Positioning, Rebrand",
    icon: <IoMegaphoneOutline />,
  },
  {
    title: "Design",
    description: "Graphics, Illustration, Animation, Product, Architecture",
    icon: <FaPencilRuler />,
  },
  {
    title: "Code",
    description: "Mobile App, Web Development, AI, Robotics",
    icon: <RiCodeSSlashLine />,
  },
  {
    title: "Growth",
    description: "Analytics, Strategy, SMM, SEO",
    icon: <IoRocketSharp />,
  },
  {
    title: "Automate",
    description: "AI Systems, Workflows, SaaS, Production, Tools",
    icon: <RiRobot3Line />,
  },
];

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileSelectedIndex, setMobileSelectedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setMobileSelectedIndex(null); // Reset selection on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (index) => 
    isMobile ? mobileSelectedIndex === index : hoveredIndex === index;

  return (
    <section className="py-16 bg-black text-white">
      <div className="w-[90%] lg:w-[68%] mx-auto" data-aos="fade-up">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-0 md:mb-12 px-1 pb-2 md:pb-10 gap-4 md:gap-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold whitespace-nowrap">
            Our<span 
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 600
              }}
              className="text-amber-400 text-4xl sm:text-4xl md:text-5xl"
            > Services</span>
          </h1>

          <a
            href="#"
            className="inline-flex items-center justify-center border border-amber-400 text-amber-400 rounded-full px-3 py-2 sm:px-4 sm:py-1.5 hover:bg-amber-400 hover:text-black transition font-bold w-fit"
          >
            <span className="text-xs sm:text-lg">See our Approach</span>
            <MdKeyboardArrowRight size={24} className="ml-2" />
          </a>
        </div>

        {/* SERVICE ROWS */}
        <div>
          {services.map((service, index) => {
            const active = isActive(index);

            return (
              <div key={service.title}>
                <div
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  onClick={() => isMobile && setMobileSelectedIndex(mobileSelectedIndex === index ? null : index)}
                  className="flex flex-col md:flex-row md:items-end px-0 py-5 cursor-pointer transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Mobile layout: title + icon side by side, description below */}
                  <div className="flex items-center justify-between w-full md:contents">

                    {/* Title */}
                    <div className="md:w-1/2">
                      <h2
                        style={{
                          fontSize: "clamp(2.2rem, 8vw, 5rem)",
                          fontWeight: 600,
                          lineHeight: 1,
                          overflow: isMobile || (active && !isMobile) ? "visible" : "hidden",
                          height: isMobile ? "auto" : active ? "auto" : "0.8em",
                          color: active ? "#FBBF24" : "#ffffff",
                          transition: "color 0.3s ease, height 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {service.title}
                      </h2>
                    </div>

                    {/* Icon — mobile: always visible on right of title */}
                    <div
                      style={{ color: active ? "#FBBF24" : "#e5e7eb" }}
                      className="text-2xl md:hidden transition-colors duration-300"
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Description — mobile: always shown below title */}
                  <div className="md:w-1/2 md:flex md:items-center md:justify-between md:pl-10 md:pb-1">
                    <p className="text-base text-gray-300 mt-2 md:mt-0 md:text-lg md:text-left">
                      {service.description}
                    </p>

                    {/* Icon — desktop only */}
                    <div
                      style={{ color: active ? "#FBBF24" : "#e5e7eb" }}
                      className="hidden md:flex w-8 justify-center text-xl ml-auto md:ml-0 transition-colors duration-300"
                    >
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurServices;