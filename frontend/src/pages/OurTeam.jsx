import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "framer-motion";
import { teamMembers } from "../data/teamMembersData";

const teamDepartments = [
  {
    id: "brand-strategy",
    title: "Brand and Strategy",
    description:
      "This team shapes how businesses are seen, felt, and remembered. They define brand identities, craft clear messaging, and align visual direction with business objectives - building brands that are distinctive, consistent, and commercially effective.",
    image: "https://res.cloudinary.com/de3ryzm92/image/upload/v1790014221/Frame_1000012603_opvhtf.png",
    colSpan: "col-span-1 md:col-span-7", // Wider in Row 1
  },
  {
    id: "design",
    title: "Design",
    description:
      "Our designers transform ideas into compelling visual experiences. From brand identity to digital interfaces and 3D visuals, they blend creativity with functionality to produce work that is both beautiful and purposeful.",
    image: "https://res.cloudinary.com/de3ryzm92/image/upload/v1790014220/Frame_1000012603-1_iwnr9a.png",
    colSpan: "col-span-1 md:col-span-5", // Narrower in Row 1
  },
  {
    id: "technology-development",
    title: "Technology & Development",
    description:
      "This team builds the systems behind great brands. They develop custom software, websites, and automation solutions that improve efficiency, scalability, and user experience - ensuring creativity is powered by reliable, high-performing technology.",
    image: "https://res.cloudinary.com/de3ryzm92/image/upload/v1790014221/Frame_1000012603-2_hkywu5.png",
    colSpan: "col-span-1 md:col-span-5", // Narrower in Row 2
  },
  {
    id: "innovation-product",
    title: "Innovation & Product",
    description:
      "Focused on digital product development, this team explores new tools, processes, and technologies to keep Tavcorp ahead of industry trends - bridging creativity and engineering to deliver futuristic, intelligent solutions.",
    image: "https://res.cloudinary.com/de3ryzm92/image/upload/v1790014222/Frame_1000012603-3_oeygnj.png",
    colSpan: "col-span-1 md:col-span-7", // Wider in Row 2
  },
];

// Streamline Freehand Line Icons
const ClientFirstIcon = () => (
  <svg
    className="w-10 h-10 text-[#DF9931]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Briefcase Handle */}
    <path d="M21 14v-3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v3" />
    {/* Briefcase Body */}
    <path d="M14 14h20v11H14z" />
    <path d="M14 18h20" />
    {/* Vertical straps */}
    <path d="M19 18v7" />
    <path d="M29 18v7" />
    {/* Clasp */}
    <path d="M23 16h2v2h-2z" />
    {/* Supporting Hand */}
    <path d="M12 32c3 0 5-1.5 7.5-1.5h7c3 0 6.5 1 8.5 2.5" />
    <path d="M14 35c2.5 0 4.5-.8 7-.8h6c2.5 0 5 .8 7 2" />
  </svg>
);

const TechnicalPrecisionIcon = () => (
  <svg
    className="w-10 h-10 text-[#DF9931]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Bulb body */}
    <path d="M16 23c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.1-1.8 5.8-4.5 7.1V33h-7v-2.9C17.8 28.8 16 26.1 16 23z" />
    {/* Base screw lines */}
    <path d="M21 36h6" />
    <path d="M22.5 39h3" />
    {/* Code symbol inside: < / > */}
    <path d="M21.5 21l-2 2 2 2" />
    <path d="M24 25.5l1-5" />
    <path d="M26.5 21l2 2-2 2" />
    {/* Hand clicking top right */}
    <path d="M35 15l-3 3" />
    <path d="M38 18c0-1.5-1.5-2-2.5-1-1 1-1 3.5-3 3.5" />
    <path d="M35.5 20.5c1.5 1.5 3.5 1.5 4.5.5s1-2.5-1-4" />
    {/* Spark rays */}
    <path d="M24 10v2" />
    <path d="M15 14l2 2" />
  </svg>
);

const CreativeIntelligenceIcon = () => (
  <svg
    className="w-10 h-10 text-[#DF9931]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Bulb outline with jigsaw puzzle contours */}
    <path d="M16 23c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.1-1.8 5.8-4.5 7.1V33h-7v-2.9C17.8 28.8 16 26.1 16 23z" />
    {/* Interlocking puzzle lines */}
    <path d="M16.5 22h3.5c0-1.5 1.5-2 2.5-1 1 1 1 3-1.5 3h6.5" />
    <path d="M24 15v3.5c1.5 0 2 1.5 1 2.5-1 1-3 1-3-1.5V26" />
    {/* Base screw lines */}
    <path d="M21 36h6" />
    <path d="M22.5 39h3" />
    {/* Spark rays */}
    <path d="M24 10v2" />
    <path d="M32 13l-1.5 1.5" />
    <path d="M16 13l1.5 1.5" />
  </svg>
);

const CollaborativeProcessIcon = () => (
  <svg
    className="w-10 h-10 text-[#DF9931]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Left person */}
    <circle cx="19" cy="27" r="3.5" />
    <path d="M13 38c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5" />
    {/* Right person */}
    <circle cx="29" cy="27" r="3.5" />
    <path d="M23 38c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5" />
    {/* Top left speech bubble */}
    <path d="M11 14c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v3c0 2.2-1.8 4-4 4h-1l-2 3v-3h-1c-2.2 0-4-1.8-4-4v-3z" />
    <path d="M15 14h4" />
    <path d="M15 17h6" />
    {/* Top right speech bubble */}
    <path d="M25 18c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v3c0 2.2-1.8 4-4 4h-1l-2 3v-3h-1c-2.2 0-4-1.8-4-4v-3z" />
    <path d="M29 18h4" />
  </svg>
);

const PushPinIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 13.5V15H7V13.5L9 11.5V6C9 4.9 9.9 4 11 4H13C14.1 4 15 4.9 15 6V11.5L17 13.5ZM11 15H13V22L12 24L11 22V15Z" />
  </svg>
);

const MemberCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <div 
      ref={ref}
      className="flex flex-col items-center group snap-start"
      data-aos="fade-up"
      data-aos-delay={100 + index * 50}
    >
      <div className="relative w-full max-w-[320px] mx-auto">
        {/* Push Pin */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 text-[#DF9931] group-hover:-translate-y-1 transition-transform duration-300">
          <PushPinIcon className="w-12 h-12 transform rotate-[45deg]" />
        </div>
        
        {/* Photo Polaroid */}
        <div className="bg-white p-4 sm:p-5 shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <div className="w-full aspect-square bg-gray-100 overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                isInView ? 'grayscale-0' : 'grayscale'
              } md:grayscale md:group-hover:grayscale-0`}
            />
          </div>
        </div>
      </div>
      
      {/* Text */}
      <div className="mt-8 text-center">
        <h3 className="font-extrabold text-gray-900 text-[20px] sm:text-[22px] mb-1">{member.name}</h3>
        <p className="text-gray-700 font-medium text-[16px]">{member.role}</p>
      </div>
    </div>
  );
};

const values = [
  {
    id: "client-first",
    title: "Client-first mindset",
    desc: (
      <>
        Every decision starts with <br />
        your business goals.
      </>
    ),
    icon: ClientFirstIcon,
    rotation: "md:rotate-0",
  },
  {
    id: "technical-precision",
    title: "Technical precision",
    desc: (
      <>
        Solutions are built to last, <br />
        scale, and perform.
      </>
    ),
    icon: TechnicalPrecisionIcon,
    rotation: "md:rotate-[4deg]", // Clockwise tilt
  },
  {
    id: "creative-intelligence",
    title: "Creative intelligence",
    desc: (
      <>
        Ideas are bold, thoughtful, and <br />
        strategically grounded.
      </>
    ),
    icon: CreativeIntelligenceIcon,
    rotation: "md:-rotate-[4deg]", // Counter-clockwise tilt
  },
  {
    id: "collaborative-process",
    title: "Collaborative process",
    desc: (
      <>
        No department works in isolation <br />
        every project is a team effort.
      </>
    ),
    icon: CollaborativeProcessIcon,
    rotation: "md:rotate-0",
  },
];

const LOGO_URL =
  "https://res.cloudinary.com/de3ryzm92/image/upload/v1776084953/Crop_Main_Logo_ntei2c.png";

const OurTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 min-h-screen w-full bg-[#EFEFEF] px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            The Tavcorp Collective
          </h1>
          <p
            className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            At Tavcorp, our strength lies in a compact, multidisciplinary team of
            creative thinkers, technical experts, and problem-solvers. We work
            collaboratively to design meaningful brands and build intelligent
            digital products that help businesses grow with confidence.
          </p>
        </div>

        {/* Departments Grid (Asymmetric Bento Layout matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 md:gap-y-16">
          {teamDepartments.map((dept, index) => (
            <div
              key={dept.id}
              className={`flex flex-col group ${dept.colSpan}`}
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              data-aos-duration="700"
            >
              {/* Image Container with Consistent Height and Rounded Corners */}
              <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                {dept.image ? (
                  <img
                    src={dept.image}
                    alt={dept.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1B1B1B] flex flex-col items-center justify-center gap-3 text-center p-6">
                    <img
                      src={LOGO_URL}
                      alt="Tavcorp Logo"
                      className="h-10 md:h-14 w-auto object-contain opacity-90 transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                      {dept.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-6 mb-3">
                {dept.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {dept.description}
              </p>
            </div>
          ))}
        </div>

        {/* How We Work Section */}
        <div className="mt-24 md:mt-32 text-center" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-14 tracking-tight"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            How We Work Together
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-[20px] p-4 sm:px-6 sm:py-9 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center transform ${item.rotation} hover:rotate-0 hover:-translate-y-2 group`}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                  data-aos-duration="700"
                >
                  <div className="mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-gray-900 text-[17px] sm:text-[19px] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#666666] text-[13px] sm:text-[14px] leading-[1.4]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meet The Team Section */}
        <div className="mt-24 md:mt-32 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 sm:mb-20 tracking-tight">
            Meet Our Creative Minds
          </h2>

          <div className="w-full pt-10 sm:pt-0 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none pb-8 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-16 sm:gap-y-24 w-[260%] sm:w-full max-w-none sm:max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <p className="text-lg sm:text-xl font-medium text-gray-500">
              Supported by our global growing team
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="mt-24 md:mt-32 text-center bg-gradient-to-r from-[#DF9931] to-black rounded-2xl sm:rounded-3xl p-12 sm:p-20 lg:p-24 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white mb-6 leading-tight">
            Want to join the Tavcorp <br className="hidden sm:block" />
            Collective?
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-[14px] sm:text-[15px]">
            We're always looking for sharp minds, creative thinkers, and builders who care about quality.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium text-[15px] rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
          >
            View Career
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
