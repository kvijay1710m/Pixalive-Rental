import React from "react";
import { motion } from "framer-motion";
import hp from '../../assets/laptop/hp1.webp';
import dell from '../../assets/laptop/dell1.jpg';
import acer from '../../assets/laptop/acer.webp';
import samsung from '../../assets/laptop/samsung.webp';
import asus from '../../assets/laptop/asus.webp';
import lenova from '../../assets/laptop/lenovaa.webp';

const cards = [
    {
        title: "HP",
        subtitle: "HP Intel Intel Core i3 10th Gen 10110U",
        img: hp,
    },
    {
        title: "Dell",
        subtitle: "Dell New Inspiron i3583 Windows 10",
        img: dell,
    },
    {
        title: "Acer",
        subtitle: "Acer Aspire Lite AMD Ryzen 5-5625U Premium",
        img: acer,
    },
    {
        title: "Samsung",
        subtitle: "Samsung Galaxy Book4 (Gray, 16GB RAM, 512GB SSD)",
        img: samsung,
    },
    {
        title: "Asus",
        subtitle: "ASUS Vivobook 15 Intel Core i3 12th Gen 1215U",
        img: asus,
    },
    {
        title: "Lenovo",
        subtitle: "Lenovo IdeaPad Slim 3 Intel Core i3 12th Gen 15.6 inch",
        img: lenova,
    },
];

const CardSection = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 mt-20 mb-12">
            <div className="text-start mb-10">
                <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
                    Show reel
                </p>

                <div className="text-start my-6 mt-6">
                    <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold leading-tight">
                        A glimpse of our distinctive laptops <br /> from different brands
                    </h1>
                </div>
            </div>

            {/* Image Grid (3 images per row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-start cursor-pointer border-amber-200 rounded-sm shadow-md hover:shadow-sm transition-shadow duration-300 p-4 mt-2"
                    >
                        {/* Image with Hover Effect */}
                        <motion.img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-fit object-cover rounded-lg mt-2"
                            initial={{ scale: 1 }} // Default size
                            whileHover={{ scale: 0.95 }} // Shrinks slightly on hover
                            transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
                        />

                        {/* Title & Subtitle */}
                        <div className="mt-4 text-start">
                            <p className="text-slate-700 text-md">{card.subtitle}</p>
                            <h2 className="text-xl font-semibold">{card.title}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
