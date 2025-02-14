import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PiOfficeChairBold } from "react-icons/pi";
import { FiFeather } from "react-icons/fi";
import { BsLaptop } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="container mt-4 mb-16 mx-auto px-6 md:px-12 py-10"
        >
            <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
                Our Services
            </p>

            <div className="text-start my-6 mt-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
                    From Positioning to Scaling <br /> & Everything in Between
                </h1>
            </div>

            {/* Services Grid */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                {/* Strategy & Scale */}
                <motion.div className="space-y-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <PiOfficeChairBold size={50} className="text-gray-700 mx-auto md:mx-0 transition duration-300  hover:text-red-600 cursor-pointer hover:scale-110" />
                    <h2 className="text-xl text-neutral-600 font-semibold mb-8">Office Space Rental</h2>
                    <p>Affordable Pricing</p>
                    <p>Scalable Solutions</p>
                    <p>Convenient Location</p>
                    <p>Fully Managed</p>
                </motion.div>

                {/* Digital Marketing */}
                <motion.div className="space-y-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <FiFeather size={50} className="text-gray-700 mx-auto md:mx-0 transition duration-300  hover:text-red-600 cursor-pointer hover:scale-110" />
                    <h2 className="text-xl text-neutral-600 font-semibold mb-8">Digital Marketing</h2>
                    <p>Social Media & PR</p>
                    <p>Video Marketing</p>
                    <p>SEO & SEM</p>
                    <p>Sales Enablement</p>
                    <p>Inbound Marketing 2.0</p>
                </motion.div>

                {/* Laptopa */}
                <motion.div className="space-y-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <BsLaptop size={50} className="text-gray-700 mx-auto md:mx-0 transition duration-300  hover:text-red-600 cursor-pointer hover:scale-110" />
                    <h4 className="text-xl text-neutral-600 font-semibold mb-8">Laptops Rental</h4>
                    <p>Flexible rental options</p>
                    <p>Upgrade options</p>
                    <p>Cost-effective solution</p>
                    <p>Affordable daily, weekly, and monthly rental plans</p>
                </motion.div>

                {/* Technology */}
                <motion.div className="space-y-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <GrTechnology size={50} className="text-gray-700 mx-auto md:mx-0 transition duration-300  hover:text-red-600 cursor-pointer hover:scale-110" />
                    <h4 className="text-xl text-neutral-600 font-semibold mb-8">Technology</h4>
                    <p>Website Development</p>
                    <p>Mobile Apps</p>
                    <p>SaaS Platform</p>
                    <p>DevOps</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Services;
