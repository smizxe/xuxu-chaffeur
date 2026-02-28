import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MarqueeBanner = () => {
    const { lang } = useLanguage();

    return (
        <div className="relative py-8 bg-[#8B6D51] -rotate-1 scale-105 border-y-4 border-[#3E2723] z-20 overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[#000000] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <div className="flex animate-marquee whitespace-nowrap">
                <span className="text-3xl md:text-4xl font-black text-[#FBF7F0] px-8 uppercase flex items-center gap-6">
                    {lang === 'EN' ? "Safe & Gentle" : "An Toàn & Kín Đáo"} <iconify-icon icon="solar:star-bold" className="text-[#A67C52]"></iconify-icon>
                    {lang === 'EN' ? "Private Experience" : "Trải Nghiệm Riêng Tư"} <iconify-icon icon="solar:star-bold" className="text-[#DAB66E]"></iconify-icon>
                    {lang === 'EN' ? "Da Nang & Hoi An" : "Đà Nẵng & Hội An"} <iconify-icon icon="solar:star-bold" className="text-[#FBF7F0]"></iconify-icon>
                    {lang === 'EN' ? "Premium Picnics" : "Picnic Cao Cấp"} <iconify-icon icon="solar:star-bold" className="text-[#A67C52]"></iconify-icon>
                </span>
                <span className="text-3xl md:text-4xl font-black text-[#FBF7F0] px-8 uppercase flex items-center gap-6">
                    {lang === 'EN' ? "Safe & Gentle" : "An Toàn & Kín Đáo"} <iconify-icon icon="solar:star-bold" className="text-[#A67C52]"></iconify-icon>
                    {lang === 'EN' ? "Private Experience" : "Trải Nghiệm Riêng Tư"} <iconify-icon icon="solar:star-bold" className="text-[#DAB66E]"></iconify-icon>
                    {lang === 'EN' ? "Da Nang & Hoi An" : "Đà Nẵng & Hội An"} <iconify-icon icon="solar:star-bold" className="text-[#FBF7F0]"></iconify-icon>
                    {lang === 'EN' ? "Premium Picnics" : "Picnic Cao Cấp"} <iconify-icon icon="solar:star-bold" className="text-[#A67C52]"></iconify-icon>
                </span>
            </div>
        </div>
    );
};

export default MarqueeBanner;
