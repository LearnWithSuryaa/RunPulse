import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 10) {
      setIsScrolled(true); // Set navbar background when scrolled
    } else {
      setIsScrolled(false); // Transparent navbar at the top
    }

    if (currentScrollY > lastScrollY.current) {
      setShowNavbar(false); // Hide navbar when scrolling down
    } else {
      setShowNavbar(true); // Show navbar when scrolling up
    }
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-green-200 shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="text-3xl font-semibold text-green-800 hover:text-green-700"
        >
          RunPulse
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-green-800 hover:text-green-700 focus:outline-none transition-transform duration-300"
          >
            <svg
              className={`w-8 h-8 transform ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              } transition-transform duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-green-200/90 backdrop-blur-md md:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium rounded-b-lg shadow-lg md:shadow-none transition-transform duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="group">
            <button
              onClick={() => scrollToSection("#hero")}
              className="block md:inline-block w-full text-center relative text-green-800 hover:text-green-700 transition-colors duration-300 font-roboto py-2 md:py-0"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-800 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </button>
          </li>
          <li className="group">
            <button
              onClick={() => scrollToSection("#calculator")}
              className="block md:inline-block w-full text-center relative text-green-800 hover:text-green-700 transition-colors duration-300 font-roboto py-2 md:py-0"
            >
              Calculator
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-800 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </button>
          </li>
          <li className="group">
            <button
              onClick={() => scrollToSection("#about")}
              className="block md:inline-block w-full text-center relative text-green-800 hover:text-green-700 transition-colors duration-300 font-roboto py-2 md:py-0"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-800 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
