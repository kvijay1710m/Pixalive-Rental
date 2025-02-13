import React from 'react';

const Whyus = () => {
    return (
        <div className='mt-10 flex justify-center mb-10'>
            <div style={{ width: "90%", height: "500px", margin: "0 auto" }}>
                <h2 style={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold" }}>
                    📍 <a href="https://www.google.com/maps?q=12.8486,77.6707" target="_blank" rel="noopener noreferrer">
                        Pixalive, Electronic City Phase 2
                    </a>
                </h2>
                <iframe
                    src="https://www.google.com/maps?q=12.8486,77.6707(Pixalive,+Electronic+City+Phase+2)&output=embed&z=17"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy">
                </iframe>

            </div>
        </div>
    );
}

export default Whyus;
