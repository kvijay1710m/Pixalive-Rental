import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import office1 from '../../assets/office pics/office1.jpg'; // Ensure correct path to your images
import office2 from '../../assets/office pics/office2.jpg';
import office3 from '../../assets/office pics/office3.jpg';
import { Link } from "react-router-dom";

const images = [
    office1,
    office2,
    office3,
];

const texts = [
    { title: "Office spaces designed to meet your business needs.", subtitle: "Find Your Ideal Workspace" },
    { title: "Start working immediately with flexible options", subtitle: "Office Spaces Tailored to Your Business" },
    { title: "Empowering Startups to Innovate, Scale, and Lead", subtitle: "Your Office, Your Way" }
];

export default function HeroCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        images.forEach((img) => new Image().src = img); // Preload images
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen flex flex-col md:flex-row items-center overflow-hidden ">

            {/* Background Image (Full Screen on Mobile) */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence>
                    <motion.img
                        key={index}
                        src={images[index]}
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: "0%" }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>

            {/* Logo (Now visible on both mobile and desktop) */}
            <div className="absolute top-5 left-6 sm:left-8 md:left-10 text-white md:text-black font-bold text-2xl sm:text-3xl lg:text-4xl tracking-widest z-10">
                PIXALIVE
            </div>

            {/* Overlay for Text Content on Mobile */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 sm:px-10 md:hidden bg-black/50">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <p className="text-sm sm:text-md uppercase tracking-widest">
                            {texts[index].subtitle}
                        </p>
                        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold mt-3">
                            {texts[index].title}
                        </h1>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Left Side - Text Content (Visible Only on Desktop) */}
            <div className="hidden md:flex flex-col justify-center px-16 w-1/2 h-full bg-white relative">
                {/* Animated Text */}
                <div className="relative overflow-hidden min-h-[280px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="absolute w-full"
                        >
                            <p className="text-md lg:text-xl text-gray-600 uppercase tracking-widest">
                                {texts[index].subtitle}
                            </p>
                            <h1 className="text-2xl lg:text-6xl font-bold mt-3">
                                {texts[index].title}
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Button */}
                <Link to='/contact' >
                    <button className="mt-8 w-36 px-4 py-2 bg-black text-white text-md font-semibold rounded-full shadow-lg cursor-pointer block">
                        Get In Touch



                        
                    </button>
                </Link>

            </div>

            {/* Right Side - Image (Unchanged for Desktop) */}
            <div className="hidden md:block w-1/2 h-full overflow-hidden relative">
                <AnimatePresence>
                    <motion.img
                        key={index}
                        src={images[index]}
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: "0%" }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>

            {/* Navigation Arrows (Hidden on Mobile) */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4">
                <button
                    onClick={() => setIndex((index - 1 + images.length) % images.length)}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition duration-300 shadow-lg"
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                <button
                    onClick={() => setIndex((index + 1) % images.length)}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition duration-300 shadow-lg"
                >
                    <FaArrowRight className="text-xl" />
                </button>
            </div>
        </div>
    );
}
