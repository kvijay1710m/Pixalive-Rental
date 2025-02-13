import React from 'react'

const Mission = () => {
    return (
        <>
            <div className="container mt-4 mb-16 mx-auto px-6 md:px-12 py-10">
                {/* Section Title */}
                <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
                    Our Mission
                </p>


                <div className="text-start my-6 mt-6">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-snug">
                    Empowering Growth <br /> Through Flexible Office Spaces
                    </h1>
                </div>

                {/* Three Columns Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Column 1 */}
                    <div>
                        <h2 className="text-xl from-neutral-600 font-semibold mb-2">By Right Positioning</h2>
                        <p className="mt-10 text-gray-900 font-medium">
                        To offer businesses of all sizes the freedom and flexibility they need to succeed. With modern office spaces tailored to your needs, we create an environment where innovation and collaboration thrive                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h2 className="text-xl from-neutral-600 font-semibold mb-2">Building Spaces for Tomorrow's Businesses</h2>
                        <p className="mt-10 text-gray-900 font-medium">
                        At Pixalive, we are committed to providing high-quality, adaptable office spaces that empower businesses to grow, innovate, and scale
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-xl from-neutral-600 font-semibold mb-2">Transforming Workplaces for Every Business </h4>
                        <p className="mt-10 text-gray-900 font-medium">
                        Our goal is to redefine the way businesses work by offering flexible and well-equipped office spaces that support your team’s productivity and growth
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mission