import React from 'react';

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-[#5A6B50] relative overflow-hidden text-[#F7F4EF] border-t-4 border-[#2C3329]">
            <div className="absolute inset-0 bg-[#000000] opacity-5 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
                    Moments of <span className="font-serif italic text-[#C5B382]">Joy</span>
                </h2>
                <p className="text-xl font-medium text-[#F7F4EF]/80 max-w-2xl mx-auto">
                    A glimpse into the beautiful memories we create together in nature.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Simple Masonry-like Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="space-y-6">
                        <div className="rounded-2xl overflow-hidden border-2 border-[#2C3329] hard-shadow bg-gray-200">
                            <img src="/images/hero_picnic_1772269228827.png" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt="Family playing" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border-2 border-[#2C3329] hard-shadow bg-gray-200">
                            <img src="/images/picnic_setup_1772269324881.png" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt="Picnic details" />
                        </div>
                    </div>

                    <div className="space-y-6 lg:mt-12">
                        <div className="rounded-2xl overflow-hidden border-2 border-[#2C3329] hard-shadow bg-gray-200 relative">
                            <div className="absolute top-4 right-4 bg-[#E8987E] text-[#2C3329] p-2 rounded-full border-2 border-[#2C3329] rotate-12 z-10">
                                <iconify-icon icon="solar:camera-bold" width="24"></iconify-icon>
                            </div>
                            <img src="/images/mother_child_1772269346232.png" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt="Mother and child in nature" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border-2 border-[#2C3329] hard-shadow bg-gray-200">
                            <img src="/images/beach_bbq_1772269260293.png" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt="BBQ setup" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-2xl overflow-hidden border-2 border-[#2C3329] hard-shadow bg-gray-200">
                            <img src="/images/female_chauffeur_1772269241667.png" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt="Happy chauffeur" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border-2 border-[#2C3329] hard-shadow bg-gray-200">
                            <img src="/images/bana_hills_1772269361633.png" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt="Scenic view" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Gallery;
