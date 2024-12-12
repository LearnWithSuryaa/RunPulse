import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleScroll = () => {
    const target = document.getElementById("calculator");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 leading-tight">
            Take Control of Your Health
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Use our Health Calculator to measure important health metrics like
            heart rate, resting heart rate, and more. Stay informed and achieve
            your fitness goals!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScroll}
            className="mt-6 inline-block bg-green-600 text-white text-base sm:text-lg font-medium py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex justify-center items-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-xs sm:max-w-md h-auto">
            <img
              src="/image/hero.png"
              alt="Health Calculator Illustration"
              className="w-full h-auto drop-shadow-lg rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
