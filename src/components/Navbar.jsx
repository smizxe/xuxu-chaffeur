import React, { useState } from 'react';

const Navbar = () => {
    const [lang, setLang] = useState('EN');

    const toggleLang = (e) => {
        e.preventDefault();
        setLang(lang === 'EN' ? 'VI' : 'EN');
    };

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="bg-[#F7F4EF]/90 backdrop-blur-md hard-shadow rounded-full px-2 py-2 flex items-center gap-2 max-w-2xl w-full justify-between transition-all">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 bg-[#2C3329] text-[#F7F4EF] px-4 py-2 rounded-full hover:bg-[#E8987E] transition-colors group">
                    <span className="font-serif italic font-bold text-xl group-hover:rotate-12 transition-transform block">X</span>
                    <span className="font-bold tracking-tight text-sm">XUXU</span>
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-1 items-center">
                    <a href="#about" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5A6B50] hover:text-[#FFFFFF] transition-colors">
                        {lang === 'EN' ? 'Story' : 'Câu chuyện'}
                    </a>
                    <a href="#experiences" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#C5B382] hover:text-[#2C3329] transition-colors">
                        {lang === 'EN' ? 'Experiences' : 'Trải nghiệm'}
                    </a>
                    <a href="#gallery" className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#E8987E] hover:text-[#2C3329] transition-colors">
                        {lang === 'EN' ? 'Gallery' : 'Thư viện'}
                    </a>
                </div>

                {/* Auth / Action */}
                <div className="flex items-center gap-2">
                    <button onClick={toggleLang} className="px-3 py-2 rounded-full text-sm font-bold hover:bg-[#2C3329]/10 transition-colors">
                        {lang}
                    </button>
                    <a href="#booking" className="bg-[#5A6B50] hover:bg-[#495841] text-[#FFFFFF] px-5 py-2.5 rounded-full text-sm font-bold border-2 border-[#2C3329] shadow-[2px_2px_0px_0px_#2C3329] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2">
                        {lang === 'EN' ? 'Book Now' : 'Đặt ngay'}
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
