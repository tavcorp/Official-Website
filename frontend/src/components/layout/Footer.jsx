// src/components/layout/Footer.jsx
import React from "react";
import Banner from "/images/Banner.jpeg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-[#F1F1F1]">
      <div className="w-[90%] lg:w-[80%] mx-auto py-10 sm:py-16">
        {/* Top area: newsletter left + columns right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
          {/* Newsletter / left */}
          <div className="md:col-span-6 lg:col-span-5">
            <h4 className="text-[22px] sm:text-2xl lg:text-[28px] font-bold text-white mb-6 md:mb-10 leading-[1.3] tracking-tight">
              Be the first to get the latest news <br className="hidden sm:block" />
              articles, trends, inspiration &amp; more
            </h4>

            <label className="block text-sm font-bold text-white mb-3 tracking-wide">Email Address</label>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribe clicked");
              }}
              className="flex w-full max-w-full sm:max-w-md bg-[#252525] border border-[#DF9931] rounded-sm shadow-inner"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 bg-transparent placeholder-gray-400 px-4 sm:px-5 py-3 sm:py-3.5 outline-none text-white text-[14px] sm:text-[15px]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 sm:px-5 hover:bg-gray-700 transition text-white"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>

            <p className="text-[12px] sm:text-[13px] text-gray-200 mt-6 font-medium max-w-sm">
              By subscribing, you accept our{" "}
              <Link
                to="/privacy"
                className="whitespace-nowrap font-bold underline text-white hover:text-gray-300 decoration-1 underline-offset-4"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Right columns */}
          <div className="md:col-span-6 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
              
              {/* Left inner column (Work Inquiry + Abuja) */}
              <div className="flex flex-col gap-10 md:gap-12">
                <div>
                  <h5 className="text-[18px] sm:text-[22px] font-bold text-white mb-3 sm:mb-5 tracking-wide">Work Inquiry</h5>
                  <p className="text-[13.5px] lg:text-[14px] text-gray-200 mb-1.5 sm:mb-2.5 font-medium">hello@wearetavcorp.com</p>
                  <p className="text-[13.5px] lg:text-[14px] text-gray-200 font-medium">+234-816-609-0757</p>
                </div>

                <div>
                  <h5 className="text-[18px] sm:text-[22px] font-bold text-white mb-3 sm:mb-5 tracking-wide">Abuja, NG</h5>
                  <p className="text-[13.5px] lg:text-[14px] text-gray-200 mb-1.5 sm:mb-2.5 font-medium">Central Business District</p>
                  <p className="text-[13.5px] lg:text-[14px] text-gray-200 font-medium">90001, Nigeria</p>
                </div>
              </div>

              {/* Right inner column (Open Position + Links) */}
              <div className="flex flex-col gap-10 md:gap-12">
                <div>
                  <h5 className="text-[18px] sm:text-[22px] font-bold text-white mb-3 sm:mb-5 tracking-wide">Open  Position</h5>
                  <p className="text-[13.5px] lg:text-[14px] text-gray-200 mb-1.5 sm:mb-2.5 font-medium">Junior 3D Designer (Intern)</p>
                  <p className="text-[13.5px] lg:text-[14px] text-gray-200 font-medium">Illustrator (Remote)</p>
                </div>

                <div>
                  <h5 className="text-[18px] sm:text-[22px] font-bold text-white mb-3 sm:mb-5 tracking-wide">Links</h5>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    <div className="flex flex-col gap-3.5 text-[13.5px] lg:text-[14px] text-gray-200 font-medium">
                      <Link to="/terms" className="hover:text-white transition whitespace-nowrap">Terms &amp; Conditions</Link>
                      <Link to="/privacy" className="hover:text-white transition whitespace-nowrap">Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col gap-3.5 text-[13.5px] lg:text-[14px] text-gray-200 font-medium">
                      <Link to="/news" className="hover:text-white transition">News</Link>
                      <Link to="/pricing" className="hover:text-white transition">Pricings</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Horizontal divider */}
        <hr className="border-t border-[#DF9931] my-8 md:my-10" />

        {/* CTA row: left big title, right socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 pt-4 md:pt-6 pb-2">
          <div className="flex-1 lg:pl-[2px]">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.2] tracking-tight">
              Have a Cool Idea?
              <br />
              Let’s Collaborate.
            </h2>
          </div>

          <div className="w-full md:w-auto md:mr-4 lg:mr-12 mt-4 md:mt-0 lg:pl-[2px]">
            <h6 className="text-[18px] sm:text-[22px] font-bold text-white mb-4 sm:mb-5 tracking-wide text-left">Our Socials</h6>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3.5 lg:gap-x-16 text-[13.5px] lg:text-[14px] font-medium text-gray-200">
              <a href="https://www.instagram.com/tavcorp/" className="hover:text-white transition text-left">Instagram</a>
              <a href="https://tiktok.com" className="hover:text-white transition text-left">Tiktok</a>
              <a href="https://x.com/tavcorp_" className="hover:text-white transition text-left">Twitter/X</a>
              <a href="https://www.linkedin.com/company/tavcorp/" className="hover:text-white transition text-left">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* bottom copyright */}
        <div className="mt-12 sm:mt-16 pt-6 pb-4 sm:pb-2 text-center lg:pl-[2px]">
          <p className="text-[14px] sm:text-[18px] md:text-[20px] font-bold text-white tracking-wide leading-snug">
            2025 - 2026 Copyrights | All Rights Reserved @TavCorp Inc
          </p>
        </div>

        {/* Banner (responsive) */}
        <div className="mt-8 sm:mt-10 w-full lg:pl-[2px]">
          <img
            src={Banner}
            alt="Banner"
            className="w-full rounded-lg sm:rounded-xl object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
