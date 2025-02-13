import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import wifi from '../../assets/specials/wifi.jpg'
import battery from '../../assets/specials/battery.webp'
import meetingroom from '../../assets/specials/meetingroom.webp'
import access from '../../assets/specials/access.webp'
import laptops from '../../assets/specials/laprent.webp'
import lift from '../../assets/specials/lift.jpg'
import parking from '../../assets/specials/parking.jpg'
import camera from '../../assets/specials/camera.jpg'

const stats = [
  { label: "Seating", target: 200, suffix: "+" },
  { label: "Laptops", target: 50, suffix: "+" },
  { label: "Happy Clients", target: 10, suffix: "+" },
  { label: "Cabins", target: 4, suffix: "+" },
];

const cards = [
  { name: "High speed Wi-Fi", img: wifi },
  { name: "Power backup", img: battery },
  { name: "Meeting-Rooms", img: meetingroom },
  { name: "Secured Access", img: access},
  { name: "Laptop-Rentals", img: laptops },
  { name: "Elevator for 3rd floor", img: lift },
  { name: "Reserved bike and car underground parking", img: parking},
  { name: "Security camera", img: camera },
];

const Counter = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(target / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center"
    >
      <h2 className="text-5xl font-bold">{count}{suffix}</h2>
      <p className="text-lg text-gray-600 mt-4">{label}</p>
    </motion.div>
  );
};

const AnimatedCard = ({ name, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-60 h-60 bg-white rounded-sm shadow-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }}
      transition={{ duration: 1.2, ease: [0.6, 0, 0.4, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Image */}
      <img src={img} alt={name} className="w-full h-full p-14" />

      {/* Motion Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-semibold"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.6, ease: [0.6, 0, 0.4, 1] }}
      >
        {name}
      </motion.div>
    </motion.div>
  );
};

const AnimatedCards = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 mt-40">
      <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
        Our Work
      </p>

      <div className="text-start my-6 mt-6">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
        At Pixalive, we provide businesses with the flexibility and support they need to thrive. Whether you're a startup, a growing team, or an established enterprise, our range of office spaces offers the perfect fit for any business        </h1>
      </div>

      {/* Stats Section */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Counter key={index} {...stat} />
        ))}
      </div>

      {/* Grid Layout for Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-16">
        {cards.map((card, index) => (
          <AnimatedCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
