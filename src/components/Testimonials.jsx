import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { lang } = useLanguage();

    return (
        <section className="py-24 bg-[#DAB66E] relative overflow-hidden border-t-4 border-[#3E2723]">
            {/* Background Noise for texture */}
            <div className="absolute inset-0 bg-[#000000] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#3E2723] mb-4">
                    {lang === 'EN' ? "Words of " : "Lời Tựa "}<span className="font-serif italic text-[#FBF7F0]">{lang === 'EN' ? "Love" : "Yêu Thương"}</span>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Review 1 */}
                <div className="bg-[#FBF7F0] p-8 rounded-2xl border-4 border-[#3E2723] hard-shadow transform rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex gap-1 text-[#DAB66E] mb-4">
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                    </div>
                    <p className="font-medium text-[#3E2723]/90 mb-6 font-serif italic text-lg leading-relaxed">
                        "Having a female chauffeur for our girls' trip to Hoi An was the best decision. She was so gentle, patient, and the picnic setup was stunning."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#8B6D51] text-[#FBF7F0] flex items-center justify-center font-bold border-2 border-[#3E2723]">S</div>
                        <div>
                            <h5 className="font-bold text-[#3E2723]">Sarah M.</h5>
                            <p className="text-xs font-bold text-[#3E2723]/60 uppercase">Australia</p>
                        </div>
                    </div>
                </div>

                {/* Review 2 */}
                <div className="bg-[#FBF7F0] p-8 rounded-2xl border-4 border-[#3E2723] hard-shadow-sm transform -rotate-2 hover:rotate-0 transition-transform">
                    <div className="flex gap-1 text-[#DAB66E] mb-4">
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                    </div>
                    <p className="font-medium text-[#3E2723]/90 mb-6 font-serif italic text-lg leading-relaxed">
                        "Tài xế rất chu đáo với bé nhà mình. Đi xe êm ái, đồ ăn chuẩn bị hoàn hảo. Một trải nghiệm vượt ngoài mong đợi cho gia đình nhỏ."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#A67C52] text-[#3E2723] flex items-center justify-center font-bold border-2 border-[#3E2723]">M</div>
                        <div>
                            <h5 className="font-bold text-[#3E2723]">Mai Linh</h5>
                            <p className="text-xs font-bold text-[#3E2723]/60 uppercase">Vietnam</p>
                        </div>
                    </div>
                </div>

                {/* Review 3 */}
                <div className="bg-[#FBF7F0] p-8 rounded-2xl border-4 border-[#3E2723] hard-shadow transform rotate-2 hover:rotate-0 transition-transform">
                    <div className="flex gap-1 text-[#DAB66E] mb-4">
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                    </div>
                    <p className="font-medium text-[#3E2723]/90 mb-6 font-serif italic text-lg leading-relaxed">
                        "The Ba Na Hills trip was completely stress-free. As a mother traveling alone with two kids, the safe and caring approach was everything."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#8B6D51] text-[#FBF7F0] flex items-center justify-center font-bold border-2 border-[#3E2723]">J</div>
                        <div>
                            <h5 className="font-bold text-[#3E2723]">Jessica T.</h5>
                            <p className="text-xs font-bold text-[#3E2723]/60 uppercase">Singapore</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
