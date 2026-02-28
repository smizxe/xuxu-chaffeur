import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { lang } = useLanguage();

    return (
        <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Decorative Text Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-[0.03] select-none pointer-events-none">
                <span className="text-[20vw] leading-none font-bold text-[#8B6D51]">MADAM</span>
            </div>

            <div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col items-center">

                {/* Badge */}
                <div className="animate-float mb-8">
                    <div className="bg-[#3E2723] text-[#FBF7F0] pl-6 pr-2 py-1.5 rounded-full border-2 border-[#3E2723] shadow-[4px_4px_0px_0px_#8B6D51] font-bold text-sm tracking-wide uppercase transform -rotate-2 inline-flex items-center gap-4">
                        {lang === 'EN' ? "A Woman's Touch" : "Sự Tinh Tế Phái Nữ"}
                        <span className="bg-[#DAB66E] text-[#3E2723] px-3 py-1 rounded-full text-xs font-black">DA NANG</span>
                    </div>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#3E2723] leading-[1.1] mb-6 relative group cursor-default">
                    {lang === 'EN' ? "Private Nature Journeys" : "Hành Trình Gần Gũi Thiên Nhiên"}
                    <br />
                    <span className="font-serif italic text-[#8B6D51] relative inline-block">
                        {lang === 'EN' ? "Beautifully Prepared" : "Chu Đáo Trọn Vẹn"}
                        <iconify-icon icon="solar:map-point-wave-bold" className="absolute -top-6 -right-12 text-[#DAB66E] text-5xl md:text-6xl -z-10 rotate-12 animate-bounce" width="1em"></iconify-icon>
                    </span>
                </h1>

                {/* Subtitle */}
                <div className="mt-6 mb-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A67C52] to-transparent h-[1px] top-1/2 -z-10 opacity-50"></div>
                    <div className="bg-[#FBF7F0] px-6 inline-block relative">
                        <p className="text-xl md:text-2xl font-medium tracking-tight text-[#3E2723]/80">
                            {lang === 'EN' ? "Safe. Personal. Designed for Families." : "An Toàn. Kín Đáo. Dành Riêng Cho Bạn."}
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
                    <a href="#booking" className="bg-[#3E2723] text-[#FBF7F0] px-8 py-4 rounded-full text-xl font-bold hard-shadow hard-shadow-hover transition-all flex items-center gap-3 group">
                        {lang === 'EN' ? "Book Private Experience" : "Đặt Trải Nghiệm Riêng Tư"}
                        <iconify-icon icon="solar:stars-bold" className="text-[#A67C52] group-hover:rotate-180 transition-transform duration-500" width="24"></iconify-icon>
                    </a>
                    <a href="#experiences" className="bg-[#FBF7F0] text-[#3E2723] px-8 py-4 rounded-full text-xl font-bold hard-shadow hard-shadow-hover transition-all flex items-center gap-3">
                        <iconify-icon icon="solar:leaf-bold" className="text-[#8B6D51]" width="24"></iconify-icon>
                        {lang === 'EN' ? "Explore Packages" : "Khám Phá Gói Dịch Vụ"}
                    </a>
                </div>
            </div>

            {/* Floating Cards Decoration */}
            <div className="absolute bottom-20 left-10 md:left-20 animate-float hidden lg:block z-20">
                <div className="bg-[#FFFFFF] p-2 pb-6 rounded-lg hard-shadow-sm rotate-[-6deg] w-48">
                    <div className="bg-[#8B6D51] h-40 rounded mb-2 flex items-center justify-center overflow-hidden relative">
                        <img src="/images/hero_picnic_1772269228827.png" className="w-full h-full object-cover grayscale mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Family Picnic" />
                    </div>
                    <div className="font-serif italic text-center text-sm font-bold text-[#3E2723]">{lang === 'EN' ? "Family Picnic" : "Picnic Gia Đình"}</div>
                </div>
            </div>
            <div className="absolute top-40 right-10 md:right-20 animate-float-delayed hidden lg:block z-20">
                <div className="bg-[#FFFFFF] p-2 pb-6 rounded-lg hard-shadow-sm rotate-[12deg] w-40">
                    <div className="bg-[#DAB66E] h-28 rounded mb-2 flex items-center justify-center">
                        <iconify-icon icon="solar:sunset-bold" className="text-[#FBF7F0] text-5xl"></iconify-icon>
                    </div>
                    <div className="font-serif italic text-center text-sm font-bold text-[#3E2723]">{lang === 'EN' ? "Sunset BBQ" : "BBQ Hoàng Hôn"}</div>
                </div>
            </div>

            {/* Background Stickers */}
            <div className="absolute top-[15%] left-[5%] text-[#DAB66E] animate-spin-slow opacity-80 z-0 pointer-events-none">
                <iconify-icon icon="solar:sun-2-bold" width="80"></iconify-icon>
            </div>
            <div className="absolute top-[60%] right-[5%] text-[#A67C52] animate-float opacity-80 rotate-12 z-0 pointer-events-none">
                <iconify-icon icon="solar:flower-bold" width="120"></iconify-icon>
            </div>
            <div className="absolute bottom-[20%] left-[15%] text-[#8B6D51] animate-float-delayed opacity-60 z-0 pointer-events-none">
                <iconify-icon icon="solar:leaf-bold" width="100"></iconify-icon>
            </div>

        </header>
    );
};

export default Hero;
