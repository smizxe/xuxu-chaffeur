import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2C3329] text-[#F7F4EF] pt-20 pb-10 px-6 border-t-4 border-[#C5B382]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <a href="#" className="text-3xl font-black tracking-tighter text-[#F7F4EF] flex items-center gap-2 mb-6 group w-fit">
                        <span className="w-10 h-10 rounded-lg bg-[#E8987E] text-[#2C3329] border-2 border-[#F7F4EF] flex items-center justify-center font-serif italic text-xl group-hover:rotate-12 transition-transform">M</span>
                        Madam Chaffeur
                    </a>
                    <p className="text-[#C5B382] max-w-sm text-lg font-medium leading-relaxed">
                        Private Nature Journeys with a Woman's Touch. <br />
                        Da Nang • Hoi An • Ba Na Hills
                    </p>
                </div>

                <div>
                    <h4 className="text-[#E8987E] font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-[#E8987E]/30 pb-2 w-fit">Navigation</h4>
                    <ul className="space-y-4 text-[#F7F4EF]/70 font-medium">
                        <li><a href="#about" className="hover:text-[#5A6B50] transition-colors flex items-center gap-2"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Our Story</a></li>
                        <li><a href="#experiences" className="hover:text-[#5A6B50] transition-colors flex items-center gap-2"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Experiences</a></li>
                        <li><a href="#booking" className="hover:text-[#5A6B50] transition-colors flex items-center gap-2"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Book a Journey</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#E8987E] font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-[#E8987E]/30 pb-2 w-fit">Socials</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-xl bg-[#F7F4EF]/10 border-2 border-[#F7F4EF]/20 flex items-center justify-center hover:bg-[#5A6B50] hover:text-[#F7F4EF] hover:border-[#5A6B50] hover:-translate-y-1 transition-all">
                            <iconify-icon icon="logos:instagram-icon" width="24" style={{ filter: 'grayscale(100%) brightness(200%)' }}></iconify-icon>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-xl bg-[#F7F4EF]/10 border-2 border-[#F7F4EF]/20 flex items-center justify-center hover:bg-[#5A6B50] hover:text-[#F7F4EF] hover:border-[#5A6B50] hover:-translate-y-1 transition-all">
                            <iconify-icon icon="logos:facebook" width="24" style={{ filter: 'grayscale(100%) brightness(200%)' }}></iconify-icon>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-[#F7F4EF]/10 text-center md:text-left flex flex-col md:flex-row justify-between text-[#C5B382] text-sm font-medium">
                <p>© 2026 Madam Chaffeur.</p>
                <p className="flex items-center gap-2 justify-center md:justify-end mt-4 md:mt-0">
                    Crafted with <iconify-icon icon="solar:heart-bold" className="text-[#E8987E]"></iconify-icon> for Families.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
