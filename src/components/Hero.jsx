import React from 'react';

const Hero = () => {
    return (
        <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Decorative Text Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-[0.03] select-none pointer-events-none">
                <span className="text-[20vw] leading-none font-bold text-[#5A6B50]">MADAM</span>
            </div>

            <div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col items-center">

                {/* Badge */}
                <div className="animate-float mb-8">
                    <div className="bg-[#2C3329] text-[#F7F4EF] pl-6 pr-2 py-1.5 rounded-full border-2 border-[#2C3329] shadow-[4px_4px_0px_0px_#5A6B50] font-bold text-sm tracking-wide uppercase transform -rotate-2 inline-flex items-center gap-4">
                        A Woman's Touch
                        <span className="bg-[#E8987E] text-[#2C3329] px-3 py-1 rounded-full text-xs font-black">DA NANG</span>
                    </div>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#2C3329] leading-[1.1] mb-6 relative group cursor-default">
                    Private Nature Journeys
                    <br />
                    <span className="font-serif italic text-[#5A6B50] relative inline-block">
                        Beautifully Prepared
                        <iconify-icon icon="solar:map-point-wave-bold" className="absolute -top-6 -right-12 text-[#E8987E] text-5xl md:text-6xl -z-10 rotate-12 animate-bounce" width="1em"></iconify-icon>
                    </span>
                </h1>

                {/* Subtitle */}
                <div className="mt-6 mb-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5B382] to-transparent h-[1px] top-1/2 -z-10 opacity-50"></div>
                    <div className="bg-[#F7F4EF] px-6 inline-block relative">
                        <p className="text-xl md:text-2xl font-medium tracking-tight text-[#2C3329]/80">
                            Safe. Personal. Designed for Families.
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
                    <a href="#booking" className="bg-[#2C3329] text-[#F7F4EF] px-8 py-4 rounded-full text-xl font-bold hard-shadow hard-shadow-hover transition-all flex items-center gap-3 group">
                        Book Private Experience
                        <iconify-icon icon="solar:stars-bold" className="text-[#C5B382] group-hover:rotate-180 transition-transform duration-500" width="24"></iconify-icon>
                    </a>
                    <a href="#experiences" className="bg-[#F7F4EF] text-[#2C3329] px-8 py-4 rounded-full text-xl font-bold hard-shadow hard-shadow-hover transition-all flex items-center gap-3">
                        <iconify-icon icon="solar:leaf-bold" className="text-[#5A6B50]" width="24"></iconify-icon>
                        Explore Packages
                    </a>
                </div>
            </div>

            {/* Floating Cards Decoration */}
            <div className="absolute bottom-20 left-10 md:left-20 animate-float hidden lg:block z-20">
                <div className="bg-[#FFFFFF] p-2 pb-6 rounded-lg hard-shadow-sm rotate-[-6deg] w-48">
                    <div className="bg-[#5A6B50] h-40 rounded mb-2 flex items-center justify-center overflow-hidden relative">
                        <img src="/images/hero_picnic_1772269228827.png" className="w-full h-full object-cover grayscale mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Family Picnic" />
                    </div>
                    <div className="font-serif italic text-center text-sm font-bold text-[#2C3329]">Family Picnic</div>
                </div>
            </div>
            <div className="absolute top-40 right-10 md:right-20 animate-float-delayed hidden lg:block z-20">
                <div className="bg-[#FFFFFF] p-2 pb-6 rounded-lg hard-shadow-sm rotate-[12deg] w-40">
                    <div className="bg-[#E8987E] h-28 rounded mb-2 flex items-center justify-center">
                        <iconify-icon icon="solar:sunset-bold" className="text-[#F7F4EF] text-5xl"></iconify-icon>
                    </div>
                    <div className="font-serif italic text-center text-sm font-bold text-[#2C3329]">Sunset BBQ</div>
                </div>
            </div>

            {/* Background Stickers */}
            <div className="absolute top-[15%] left-[5%] text-[#E8987E] animate-spin-slow opacity-80 z-0 pointer-events-none">
                <iconify-icon icon="solar:sun-2-bold" width="80"></iconify-icon>
            </div>
            <div className="absolute top-[60%] right-[5%] text-[#C5B382] animate-float opacity-80 rotate-12 z-0 pointer-events-none">
                <iconify-icon icon="solar:flower-bold" width="120"></iconify-icon>
            </div>
            <div className="absolute bottom-[20%] left-[15%] text-[#5A6B50] animate-float-delayed opacity-60 z-0 pointer-events-none">
                <iconify-icon icon="solar:leaf-bold" width="100"></iconify-icon>
            </div>

        </header>
    );
};

export default Hero;
