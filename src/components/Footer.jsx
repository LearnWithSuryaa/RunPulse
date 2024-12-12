import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4">RunPulse</h2>
            <p className="text-gray-300">
              Platform terbaik untuk memahami zona detak jantung Anda dan
              mencapai tujuan kebugaran dengan lebih efektif.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="text-gray-300 hover:text-white transition"
                >
                  Kalkulator
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/LearnWithSuryaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-green-800 hover:bg-gray-200 transition"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://instagram.com/suryahipersomniaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-green-800 hover:bg-gray-200 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-surya-putra-davindra-60b373318/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-green-800 hover:bg-gray-200 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RunPulse. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
