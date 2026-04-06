// src/components/layout/Footer.jsx
import React from "react";
import Banner from "/images/Banner.jpeg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#010101] text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Top area: newsletter left + columns right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Newsletter / left (stack on mobile, span on md+) */}
          <div className="md:col-span-5">
            <h4 className="text-xl sm:text-2xl font-semibold text-white">
              Be the first to get the latest news
            </h4>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              articles, trends, inspiration &amp; more
            </p>

            <label className="block text-xs text-gray-400 mb-2">Email Address</label>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // replace with actual subscribe logic
                alert("Subscribe clicked");
              }}
              className="flex w-full max-w-full sm:max-w-md"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 bg-[#151515] border border-gray-700 placeholder-gray-400 px-3 py-2 rounded-l-md outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-[#222] border border-gray-700 px-3 sm:px-4 py-2 rounded-r-md hover:bg-gray-800 text-sm"
              >
              ➤
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3 max-w-sm">
              By subscribing, you accept our{" "}
              <Link
                to="/privacy"
                className=" whitespace-nowrap underline text-gray-300"
              >
                Privacy Policy
              </Link>
              {/* <a href="/privacy" className="underline text-gray-300">
                Privacy Policy
              </a> */}
            </p>
          </div>

          {/* Right columns (col span 7 on md+) */}
          <div className="md:col-span-7">
            {/* Responsive inner grid: 1 col (sm) -> 2 cols (sm) -> 3 logical columns on lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* LEFT column (Work Inquiry + Address) */}
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-semibold text-white mb-2">Work Inquiry</h5>
                  <p className="text-sm text-gray-300">hello@wearetavcorp.com</p>
                  <p className="text-sm text-gray-300 mt-1">+234-816-609-0757</p>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-white mb-2">Abuja, NG</h5>
                  <p className="text-sm text-gray-300">Central Business District</p>
                  <p className="text-sm text-gray-300">90001, Nigeria</p>
                </div>
              </div>
              <div className="flex flex-col">
                {/* MIDDLE column (Open Positions) */}
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">Open Position</h5>
                    <p className="text-sm text-gray-300">Junior 3D Designer (Intern)</p>
                    <p className="text-sm text-gray-300 mt-1">Illustrator (Remote)</p>
                  </div>

                  {/* On small screens keep links below; we keep this block for consistent height */}
                  <div className="hidden lg:block" aria-hidden />
                </div>

                {/* RIGHT column (Links) — right-aligned on lg */}
                <div className="lg:self-start lg:justify-self-end pt-2">
                  <h5 className="text-sm font-semibold text-white mb-3">Links</h5>

                  {/* Two-column link list collapses to single column on xs */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-10 gap-y-5 sm:gap-x-6">
                    <ul className="text-sm text-gray-300">
                      <li>
                        <Link
                          to="/terms"
                          className="hover:underline whitespace-nowrap"
                        >
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/privacy"
                          className="hover:underline whitespace-nowrap"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>

                    <ul className="text-sm text-gray-300">
                      <li>
                        <Link
                           to="/news" 
                           className="hover:underline"
                        >
                          News
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/pricing" 
                          className="hover:underline">
                            Pricings
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal divider */}
        <hr className="border-t border-gray-800 my-8" />

        {/* CTA row: left big title, right socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Have a Cool Idea?
              <br />
              <span className="block">Let’s Collaborate.</span>
            </h2>
          </div>

          <div className="w-full md:w-auto md:mr-12">
            <h6 className="text-sm font-semibold text-white mb-3 text-center md:text-right">Our Socials</h6>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 justify-center md:justify-end">
              <a href="https://www.instagram.com/tavcorp/" className="hover:underline text-center md:text-right">Instagram</a>
              <a href="https://tiktok.com" className="hover:underline text-center md:text-right">Tiktok</a>
              <a href="https://x.com/tavcorp_" className="hover:underline text-center md:text-right">Twitter/X</a>
              <a href="https://www.linkedin.com/company/tavcorp/" className="hover:underline text-center md:text-right">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* bottom copyright */}
        <div className="mt-8 sm:mt-10  border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} TavCorp Inc — All rights reserved
        </div>

        {/* Banner (responsive) */}
        <div className="mt-6 w-full px-4 sm:px-6 lg:px-8">
          <img
            src={Banner}
            alt="Banner"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
