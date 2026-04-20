import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ImArrowUpRight2 } from "react-icons/im";
import Logo from "/images/Crop_Main_Logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useAuth } from "../../store/auth";
import { useAuthStore } from "../../store/authStore";
import { mainFour, pages } from "./HeaderData";


const Header = () => {
  // const { isLoggedIn, user } = useAuth();
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [pagesOpenMobile, setPagesOpenMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);

  // 

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsProfileDropdownOpen(false);
    closeAll(); // optional: also close menu
  };

  // useEffect(() => {
  //   console.log("isLoggedIn:", isLoggedIn);
  //   console.log("user:", user);
  // }, [isLoggedIn, user]);

  // --- 1. SCROLL LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu when scrolling
      if (mobileOpen) {
        setMobileOpen(false);
      }

      // If any menu is OPEN, always show the navbar
      if (mobileOpen || desktopMenuOpen) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling DOWN -> Hide
        setVisible(false);
      } else {
        // Scrolling UP -> Show
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen, desktopMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (desktopMenuOpen) {
        if (
          panelRef.current &&
          !panelRef.current.contains(e.target) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(e.target)
        ) {
          setDesktopMenuOpen(false);
        }
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        closeAll();
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [desktopMenuOpen]);



  const handleMenuToggle = () => {
    if (isDesktop) {
      setDesktopMenuOpen((s) => !s);
      setMobileOpen(false);
    } else {
      setMobileOpen((s) => !s);
      setDesktopMenuOpen(false);
    }
  };

  const closeAll = () => {
    setMobileOpen(false);
    setDesktopMenuOpen(false);
    setPagesOpenMobile(false);
  };

  const currentPath = window.location.pathname;

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md z-50 animate-slideDown"
      >
        <nav className="w-full">
          <div className="w-[100%] md:w-[70%] mx-auto px-4 pt-6 pb-4 flex items-center justify-between text-white">
            {/* LEFT: logo + main links */}
            <div className="flex items-center gap-8">
              <a href="/" aria-label="Homepage" className="flex items-center">
                <img src={Logo} alt="Logo" className="h-5 md:h-11 w-auto" />
              </a>

              <ul className="hidden md:flex items-center gap-3 text-gray-200">
                {mainFour.map((item) =>
                  item.active ? (
                    <li key={item.id}>
                      <button
                        onClick={() => { navigate(item.url) }}
                        className="inline-block py-1 px-3 font-semibold text-white hover:text-[#DF9931] transition text-lg"
                      >
                        {item.title}
                      </button>
                    </li>
                  ) : null
                )
                }
              </ul>
            </div>

            {/* RIGHT: start project + menu */}
            <div className="flex items-center gap-2 md:gap-4">

              <button
                onClick={() => {
                  navigate("/start-project");
                }}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-lg font-semibold hover:bg-gray-200 transition"
              >
                Start Project <ImArrowUpRight2 />
              </button>

              {isAuthenticated && user?.username && (
                <div className="relative">
                  {/* Desktop: Show full name with white bg */}
                  <button
                    onClick={toggleProfileDropdown}
                    className="hidden md:block px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
                  >
                    <span>{user.username}</span>
                  </button>
                  {/* Mobile: Show initial in circle with white bg */}
                  <button
                    onClick={toggleProfileDropdown}
                    className="md:hidden w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg hover:bg-gray-200 transition"
                  >
                    {user.username.charAt(0).toUpperCase()}
                  </button>

                  {/* Logout Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-red-600 rounded-md shadow-lg z-50">
                      <button
                        onClick={() => {
                          logout();
                          navigate("/");
                          setIsProfileDropdownOpen(false);
                        }}
                        className="block px-4 py-3 text-white w-full text-left font-semibold hover:bg-red-700 rounded-md transition"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="relative">
                <button
                  ref={menuButtonRef}
                  onClick={handleMenuToggle}
                  className="p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#DF9931] z-50"
                  aria-label="Open menu"
                  aria-expanded={isDesktop ? desktopMenuOpen : mobileOpen}
                >
                  {isDesktop ? (
                    desktopMenuOpen ? (
                      <HiX className="w-6 h-6 text-white" />
                    ) : (
                      <HiMenu className="w-6 h-6 text-white" />
                    )
                  ) : mobileOpen ? (
                    <HiX className="w-6 h-6 text-white" />
                  ) : (
                    <HiMenu className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

        </nav>

        {/* DESKTOP PANEL */}
        {isDesktop && desktopMenuOpen && (
          <div
            ref={panelRef}
            className="fixed right-6 top-16 z-50 w-[760px] max-w-[90vw] rounded-lg bg-[#252525] border border-[#DF9931] shadow-2xl p-6"
            role="dialog"
            aria-modal="true"
          >
            {/* ... Menu Content ... */}
            <div className="text-gray-200">
              <div>
                <h3 className="text-sm font-semibold mb-3">Pages</h3>
                <div className="grid gap-1">
                  {pages.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        navigate(p.url);
                        setDesktopMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 px-2 rounded hover:bg-gray-800 text-sm"
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div
            className="md:hidden bg-[#1B1B1B] shadow-md border-t border-[#DF9931] z-40"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            <ul className="flex flex-col px-4 py-4 gap-1 text-gray-200">
              {mainFour.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      navigate(item.url);
                      closeAll();
                    }}
                    className="block w-full text-left py-2 px-2 rounded hover:bg-gray-800 font-medium"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
              <li className="mt-1 border-t border-gray-700" />
              <li>
                <button
                  className="w-full flex items-center justify-between py-2 px-2 rounded hover:bg-gray-800 font-medium"
                  onClick={() => setPagesOpenMobile((s) => !s)}
                  aria-expanded={pagesOpenMobile}
                >
                  <span>Pages</span>
                  <svg className={`w-5 h-5 transform transition-transform ${pagesOpenMobile ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {pagesOpenMobile && (
                  <ul className="mt-1 pl-4 flex flex-col gap-1">
                    {pages.map((p) => (
                      <li key={p.id}>
                        {/* <a href={p.link} onClick={closeAll} className="block py-2 px-2 rounded hover:bg-gray-800 font-medium">{p.title}</a> */}
                        <button
                          onClick={() => {
                            navigate(p.url);
                            closeAll();
                          }}
                          className="block py-2 px-2 rounded hover:bg-gray-800 font-medium"
                        >
                          {p.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {!isAuthenticated && (
                <>
                  <li className="mt-1 border-t border-gray-700" />
                  <li>
                    <Link
                      to="/LoginPage"
                      className="block py-2 px-2 rounded hover:bg-gray-800 font-medium"
                      onClick={closeAll}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/SignUpPage"
                      className="block py-2 px-2 rounded hover:bg-gray-800 font-medium"
                      onClick={closeAll}
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}
              <li className="mt-3 px-4">

                <button
                  onClick={() => {
                    navigate("/start-project");
                    closeAll();
                  }}
                  className="block w-full py-2 px-2 rounded bg-black text-white text-center font-semibold"
                >
                  Start Project <ImArrowUpRight2 className="inline-block ml-2" />
                </button>

                {/* <a href="/start-project" onClick={closeAll} className="block w-full py-2 px-2 rounded bg-black text-white text-center font-semibold">Start Project <ImArrowUpRight2 className="inline-block ml-2" />
                </a> */}
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* <div className="h-16 md:h-20" aria-hidden="true" /> */}
    </>
  );
};

export default Header;