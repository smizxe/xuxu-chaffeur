import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = () => {
    const { lang } = useLanguage();

    return (
        <section className="py-24 bg-[#FBF7F0] relative overflow-hidden text-[#3E2723] border-t-4 border-[#3E2723]">

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: Soft Photo */}
                <div className="relative group perspective-1000" data-aos="fade-right">
                    <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl border-4 border-[#3E2723] overflow-hidden hard-shadow transform group-hover:-rotate-2 transition-all duration-500">
                        <img src="/images/female_chauffeur_1772269241667.png" className="w-full h-full object-cover" alt="Friendly female driver" />
                        {/* Gradient overlay at bottom for text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/60 to-transparent flex items-end p-8">
                            <p className="font-serif italic text-2xl text-[#FBF7F0]">{lang === 'EN' ? "Confidence with warmth." : "An tâm đi kèm sự chân thành."}</p>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 bg-[#A67C52] text-[#3E2723] p-4 rounded-full border-2 border-[#3E2723] rotate-12 animate-float">
                        <iconify-icon icon="solar:star-fall-bold" width="32"></iconify-icon>
                    </div>
                </div>

                {/* Right: Bullet Points */}
                <div data-aos="fade-left" data-aos-delay="200">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#3E2723] bg-[#FBF7F0] text-[#3E2723] text-sm font-bold mb-8 shadow-[4px_4px_0px_0px_#3E2723]">
                        <iconify-icon icon="solar:shield-star-bold" width="16" className="text-[#8B6D51]"></iconify-icon>
                        {lang === 'EN' ? "WHY A FEMALE CHAUFFEUR?" : "TẠI SAO LẠI CHỌN NỮ TÀI XẾ?"}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10">
                        {lang === 'EN' ? "The gentle" : "Sự khác biệt"} <br /><span className="text-stroke italic font-serif text-[#DAB66E]">{lang === 'EN' ? "Difference" : "Dịu dàng"}</span>
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white px-6 py-5 rounded-xl border-2 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#3E2723] transition-all flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="bg-[#8B6D51] p-2 rounded-lg text-[#FBF7F0] mt-1">
                                <iconify-icon icon="solar:heart-angle-bold" width="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{lang === 'EN' ? "Safe & Patient with Children" : "An Toàn & Kiên Nhẫn Với Trẻ Nhỏ"}</h4>
                                <p className="text-sm font-medium text-[#3E2723]/70 mt-1">{lang === 'EN' ? "We know that traveling with kids requires flexibility, extra time, and a calm environment." : "Chúng tôi hiểu rằng việc đi lại với trẻ em đòi hỏi sự linh hoạt, dư dả thời gian và một không gian tĩnh lặng."}</p>
                            </div>
                        </div>

                        <div className="bg-white px-6 py-5 rounded-xl border-2 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#3E2723] transition-all flex items-start gap-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="bg-[#DAB66E] p-2 rounded-lg text-[#FBF7F0] mt-1">
                                <iconify-icon icon="mdi:car" width="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{lang === 'EN' ? "Calm Driving Style" : "Phong Cách Lái Xe Êm Ái"}</h4>
                                <p className="text-sm font-medium text-[#3E2723]/70 mt-1">{lang === 'EN' ? "No rushing, no aggressive maneuvers. Just a smooth, relaxing journey from start to finish." : "Không vội vã, không những pha xử lý gấp gáp. Chỉ đơn giản là một cuộc hành trình mượt mà, thư giãn từ lúc bắt đầu cho đến khi kết thúc."}</p>
                            </div>
                        </div>

                        <div className="bg-white px-6 py-5 rounded-xl border-2 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#3E2723] transition-all flex items-start gap-4" data-aos="fade-up" data-aos-delay="600">
                            <div className="bg-[#A67C52] p-2 rounded-lg text-[#3E2723] mt-1">
                                <iconify-icon icon="solar:chat-round-line-bold" width="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{lang === 'EN' ? "English Communication" : "Giao Tiếp Tiếng Anh"}</h4>
                                <p className="text-sm font-medium text-[#3E2723]/70 mt-1">{lang === 'EN' ? "Clear coordination and friendly conversations for our international guests." : "Giao tiếp rõ ràng và thân thiện hỗ trợ trọn vẹn từng vị khách quốc tế."}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
