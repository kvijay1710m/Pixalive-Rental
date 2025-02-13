import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mt-10 mb-5 mx-auto px-6 md:px-12">
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div> 
            <Link to="/" onClick={() => window.scrollTo(0, 0)} >
              <h2 className="text-2xl font-bold">Pixalive Rental <br /> Services</h2>
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-10">Address</h3>
            <div className="space-y-3">
              <p className="mb-8 flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-white text-6xl" />
                Third Floor, 35/2, Hosur Rd, Konappana Agrahara, Electronic City, Phase 2, Bengaluru,Karnataka 560100, India.
              </p>
              <p className="flex mb-8 items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-white text-xl" />
                support@pixalivernd.com
              </p>
              <p className="flex mb-8 items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-white text-xl" />
                +91 98765 43210
              </p>
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-10">Quick Links</h3>
            <ul className="space-y-2">
              <li className="mb-4">
                <Link to="/about" className="relative group hover:text-gray-400">About Us<span className="absolute left-0 bottom-0 w-0 h-[3px] bg-red-400 group-hover:w-full transition-all duration-400"></span>
                </Link>
              </li>
              
              <li className="mb-4">
                <Link to="/contact" className="relative group hover:text-gray-400">Contact Us <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-red-400 group-hover:w-full transition-all duration-400"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-10">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link to="https://www.facebook.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </Link>
              <Link to="https://www.twitter.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </Link>
              <Link to="https://www.linkedin.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Grey Line */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © 2025 Pixalive Rental Services. All Rights Reserved. Crafted with ❤️ & ☕ in India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
