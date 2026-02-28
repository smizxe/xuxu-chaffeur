import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { lang } = useLanguage();

    return (
        <footer className="bg-[#3E2723] text-[#FBF7F0] pt-20 pb-10 px-6 border-t-4 border-[#A67C52]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <a href="#" className="text-3xl font-black tracking-tighter text-[#FBF7F0] flex items-center gap-2 mb-6 group w-fit">
                        <span className="w-10 h-10 rounded-lg bg-[#DAB66E] text-[#3E2723] border-2 border-[#FBF7F0] flex items-center justify-center font-serif italic text-xl group-hover:rotate-12 transition-transform">M</span>
                        Madam Chaffeur
                    </a>
                    <p className="text-[#A67C52] max-w-sm text-lg font-medium leading-relaxed">
                        {lang === 'EN' ? "Private Nature Journeys with a Woman's Touch." : "Những Chuyến Đi Chữa Lành Từ Sự Tinh Tế Của Nữ Giới."} <br />
                        {lang === 'EN' ? "Da Nang • Hoi An • Ba Na Hills" : "Đà Nẵng • Hội An • Bà Nà"}
                    </p>
                </div>

                <div>
                    <h4 className="text-[#DAB66E] font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-[#DAB66E]/30 pb-2 w-fit">
                        {lang === 'EN' ? "Navigation" : "Chỉ Dẫn"}
                    </h4>
                    <ul className="space-y-4 text-[#FBF7F0]/70 font-medium">
                        <li><a href="#about" className="hover:text-[#8B6D51] transition-colors flex items-center gap-2"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> {lang === 'EN' ? "Our Story" : "Câu Chuyện Của Chúng Tôi"}</a></li>
                        <li><a href="#experiences" className="hover:text-[#8B6D51] transition-colors flex items-center gap-2"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> {lang === 'EN' ? "Experiences" : "Góc Trải Nghiệm"}</a></li>
                        <li><a href="#booking" className="hover:text-[#8B6D51] transition-colors flex items-center gap-2"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> {lang === 'EN' ? "Book a Journey" : "Đặt Chuyến Đi"}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#DAB66E] font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-[#DAB66E]/30 pb-2 w-fit">Socials</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-xl bg-[#FBF7F0]/10 border-2 border-[#FBF7F0]/20 flex items-center justify-center hover:bg-[#8B6D51] hover:text-[#FBF7F0] hover:border-[#8B6D51] hover:-translate-y-1 transition-all">
                            <iconify-icon icon="logos:instagram-icon" width="24" style={{ filter: 'grayscale(100%) brightness(200%)' }}></iconify-icon>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-xl bg-[#FBF7F0]/10 border-2 border-[#FBF7F0]/20 flex items-center justify-center hover:bg-[#8B6D51] hover:text-[#FBF7F0] hover:border-[#8B6D51] hover:-translate-y-1 transition-all">
                            <iconify-icon icon="logos:facebook" width="24" style={{ filter: 'grayscale(100%) brightness(200%)' }}></iconify-icon>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-[#FBF7F0]/10 text-center md:text-left flex flex-col md:flex-row justify-between text-[#A67C52] text-sm font-medium">
                <p>© 2026 Madam Chaffeur.</p>
                <p className="flex items-center gap-2 justify-center md:justify-end mt-4 md:mt-0">
                    {lang === 'EN' ? "Crafted with " : "Chuẩn bịด้วย "}<iconify-icon icon="solar:heart-bold" className="text-[#DAB66E]"></iconify-icon> {lang === 'EN' ? " for Families." : " cho các gia đình."}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
