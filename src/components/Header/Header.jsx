import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black py-5 px-6 text-lg font-semibold shadow-sm">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to='/'>
          <h1 className="text-2xl font-bold text-gray-700">Pixalive Rental Services</h1>
        </Link>

        {/* Navigation Links (Hidden on Mobile, Visible on Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/office" className="hover:text-gray-500">Office space</Link>
          <Link to="/laptops" className="hover:text-gray-500">Laptops</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link> 
          <Link to="/contact" className="hover:text-gray-500">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><Link to="/internship" className="hover:text-gray-500">Office Space</Link></li>
              <li><Link to="/services" className="block px-4 py-2 hover:text-blue-600">Laptops</Link></li>
              <li><Link to="/blog" className="block px-4 py-2 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/careers" className="block px-4 py-2 hover:text-blue-600">Careers</Link></li>
              <li><Link to="/contact" className="block px-4 py-2 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
