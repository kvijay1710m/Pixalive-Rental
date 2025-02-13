
const SplitContent = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-16 max-w-7xl mx-auto space-y-10 md:space-y-0">
                {/* Left Side */}
                <div className="w-full md:w-4/9 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-black leading-relaxed">
                        Your One-Stop Solution for Office Spaces and Laptop Rentals                    </h1>
                    <h4 className="text-normal md:text-lg text-gray-800 mt-4 leading-10">
                        Our mission is to help you focus on what truly matters—growing your business—by providing the tools and workspace you need to succeed.                     </h4>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-2/5 text-center md:text-left">
                    <p className="text-gray-500 text-sm uppercase font-medium">Who are we</p>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">
                        Flexible Office Spaces and Reliable Laptop Rentals                    </h3>
                    <p className="text-gray-900 mt-4 leading-8">
                        At Pixalive rental services, we provide businesses with flexible, high-quality office spaces and reliable laptop rentals to meet the evolving needs of today’s workforce. Whether you're a growing startup, an established company, or a remote team in need of equipment, we have the perfect solutions for you.

                        We offer a wide range of office spaces, from private offices to coworking environments, equipped with all the essential amenities to foster productivity and collaboration. In addition, our laptop rental services give you access to top-quality devices on-demand, helping you equip your team without the hassle of long-term investments.

                    </p>
                </div>
            </div>
          
        </>

    );
};

export default SplitContent;
