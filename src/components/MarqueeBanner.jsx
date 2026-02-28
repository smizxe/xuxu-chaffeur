import React from 'react';

const MarqueeBanner = () => {
    return (
        <div className="relative py-8 bg-[#5A6B50] -rotate-1 scale-105 border-y-4 border-[#2C3329] z-20 overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[#000000] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <div className="flex animate-marquee whitespace-nowrap">
                <span className="text-3xl md:text-4xl font-black text-[#F7F4EF] px-8 uppercase flex items-center gap-6">
                    Safe & Gentle <iconify-icon icon="solar:star-bold" className="text-[#C5B382]"></iconify-icon>
                    Private Experience <iconify-icon icon="solar:star-bold" className="text-[#E8987E]"></iconify-icon>
                    Da Nang & Hoi An <iconify-icon icon="solar:star-bold" className="text-[#F7F4EF]"></iconify-icon>
                    Premium Picnics <iconify-icon icon="solar:star-bold" className="text-[#C5B382]"></iconify-icon>
                </span>
                <span className="text-3xl md:text-4xl font-black text-[#F7F4EF] px-8 uppercase flex items-center gap-6">
                    Safe & Gentle <iconify-icon icon="solar:star-bold" className="text-[#C5B382]"></iconify-icon>
                    Private Experience <iconify-icon icon="solar:star-bold" className="text-[#E8987E]"></iconify-icon>
                    Da Nang & Hoi An <iconify-icon icon="solar:star-bold" className="text-[#F7F4EF]"></iconify-icon>
                    Premium Picnics <iconify-icon icon="solar:star-bold" className="text-[#C5B382]"></iconify-icon>
                </span>
            </div>
        </div>
    );
};

export default MarqueeBanner;
