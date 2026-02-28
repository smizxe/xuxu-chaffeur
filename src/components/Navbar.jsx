import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { lang, toggleLang } = useLanguage();

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="bg-[#FBF7F0]/90 backdrop-blur-md hard-shadow rounded-full px-2 py-2 flex items-center gap-2 max-w-2xl w-full justify-between transition-all">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 bg-[#3E2723] text-[#FBF7F0] px-4 py-2 rounded-full hover:bg-[#DAB66E] transition-colors group">
                    <span className="font-serif italic font-bold text-xl group-hover:rotate-12 transition-transform block">M</span>
                    <span className="font-bold tracking-tight text-sm">Madam Chaffeur</span>
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-1 items-center">
                    <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#8B6D51] hover:text-[#FFFFFF] transition-colors">
                        {lang === 'EN' ? 'Story' : 'Câu chuyện'}
                    </a>
                    <a href="#experiences" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#A67C52] hover:text-[#3E2723] transition-colors">
                        {lang === 'EN' ? 'Experiences' : 'Trải nghiệm'}
                    </a>
                    <a href="#gallery" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#DAB66E] hover:text-[#3E2723] transition-colors">
                        {lang === 'EN' ? 'Gallery' : 'Thư viện'}
                    </a>
                </div>

                {/* Auth / Action */}
                <div className="flex items-center gap-2">
                    <button onClick={toggleLang} className="px-3 py-2 rounded-full text-sm font-bold hover:bg-[#3E2723]/10 transition-colors">
                        {lang}
                    </button>
                    <a href="#booking" className="bg-[#8B6D51] hover:bg-[#495841] text-[#FFFFFF] px-5 py-2.5 rounded-full text-sm font-bold border-2 border-[#3E2723] shadow-[2px_2px_0px_0px_#3E2723] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2">
                        {lang === 'EN' ? 'Book Now' : 'Đặt ngay'}
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
