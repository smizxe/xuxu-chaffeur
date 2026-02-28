import React from 'react';

const BrandStory = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative z-10 order-2 lg:order-1">
                    <div className="inline-block bg-[#C5B382] text-[#2C3329] font-bold px-3 py-1 rounded border-2 border-[#2C3329] mb-6 shadow-[2px_2px_0px_0px_#2C3329]">
                        OUR STORY
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#2C3329] mb-8 leading-[0.9]">
                        More Than a Ride. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8987E] to-[#5A6B50] italic font-serif">A Gentle Journey.</span>
                    </h2>
                    <div className="space-y-6 text-xl text-[#2C3329]/80 font-medium">
                        <p>
                            <span className="font-bold text-[#2C3329]">Safety & Comfort First.</span> We specialize in private nature experiences driven by women. We understand the delicate needs of mothers, children, and families seeking a peaceful escape.
                        </p>
                        <p>
                            Every detail is beautifully prepared—from the soft driving style to the aesthetic picnic setups in Da Nang, Hoi An, and Ba Na Hills.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <div className="bg-[#F7F4EF] border-2 border-[#2C3329] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#5A6B50] rounded-full"></div> Safe
                        </div>
                        <div className="bg-[#F7F4EF] border-2 border-[#2C3329] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#E8987E] rounded-full"></div> Gentle
                        </div>
                        <div className="bg-[#F7F4EF] border-2 border-[#2C3329] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#C5B382] rounded-full"></div> Private
                        </div>
                    </div>
                </div>

                <div className="relative h-[500px] w-full order-1 lg:order-2">
                    {/* Abstract Graphic */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Left Shape */}
                        <div className="w-64 h-80 bg-[#5A6B50] rounded-t-full rounded-b-full absolute left-4 md:left-10 top-0 opacity-90 animate-float z-10 border-4 border-[#F7F4EF] overflow-hidden">
                            <img src="/images/picnic_setup_1772269324881.png" className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Picnic setup" />
                        </div>
                        {/* Right Shape */}
                        <div className="w-64 h-80 bg-[#E8987E] rounded-t-full rounded-b-full absolute right-4 md:right-10 bottom-0 opacity-90 animate-float-delayed z-10 border-4 border-[#F7F4EF] overflow-hidden">
                            <img src="/images/mother_child_1772269346232.png" className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Mother and child" />
                        </div>

                        {/* Center overlap badge */}
                        <div className="z-20 text-center bg-[#F7F4EF]/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-[#2C3329] shadow-xl rotate-3">
                            <iconify-icon icon="solar:heart-bold" className="text-[#E8987E] text-5xl mb-2"></iconify-icon>
                            <p className="font-serif italic font-bold text-xl text-[#2C3329]">Warm hospitality</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
