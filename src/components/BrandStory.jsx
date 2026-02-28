import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const BrandStory = () => {
    const { lang } = useLanguage();

    return (
        <section id="about" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative z-10 order-2 lg:order-1">
                    <div className="inline-block bg-[#A67C52] text-[#3E2723] font-bold px-3 py-1 rounded border-2 border-[#3E2723] mb-6 shadow-[2px_2px_0px_0px_#3E2723]">
                        {lang === 'EN' ? "OUR STORY" : "CÂU CHUYỆN CỦA CHÚNG TÔI"}
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#3E2723] mb-8 leading-[0.9]">
                        {lang === 'EN' ? "More Than a Ride." : "Hơn Cả Một Cuốc Xe."} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAB66E] to-[#8B6D51] italic font-serif">{lang === 'EN' ? "A Gentle Journey." : "Một Hành Trình Chăm Sóc."}</span>
                    </h2>
                    <div className="space-y-6 text-xl text-[#3E2723]/80 font-medium">
                        <p>
                            <span className="font-bold text-[#3E2723]">{lang === 'EN' ? "Safety & Comfort First." : "An Toàn & Khéo Léo Đầu Tiên."}</span> {lang === 'EN' ? "We specialize in private nature experiences driven by women. We understand the delicate needs of mothers, children, and families seeking a peaceful escape." : "Chúng tôi thiết kế các chuyến đi đặc quyền với các nữ tài xế tinh tế. Rất thấu hiểu những nhu cầu khắt khe của mẹ, trẻ nhỏ, và những gia đình đang tìm kiếm chuyến đi chữa lành."}
                        </p>
                        <p>
                            {lang === 'EN' ? "Every detail is beautifully prepared—from the soft driving style to the aesthetic picnic setups in Da Nang, Hoi An, and Ba Na Hills." : "Mọi chi tiết đều được trọn gói chuẩn bị—từ phong cách lái xe êm ái cho đến các set picnic đầy chất thơ tại Đà Nẵng, Hội An và Bà Nà Hills."}
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <div className="bg-[#FBF7F0] border-2 border-[#3E2723] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#8B6D51] rounded-full"></div> {lang === 'EN' ? "Safe" : "An Toàn"}
                        </div>
                        <div className="bg-[#FBF7F0] border-2 border-[#3E2723] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#DAB66E] rounded-full"></div> {lang === 'EN' ? "Gentle" : "Chu Đáo"}
                        </div>
                        <div className="bg-[#FBF7F0] border-2 border-[#3E2723] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#A67C52] rounded-full"></div> {lang === 'EN' ? "Private" : "Riêng Tư"}
                        </div>
                    </div>
                </div>

                <div className="relative h-[500px] w-full order-1 lg:order-2">
                    {/* Abstract Graphic */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Left Shape */}
                        <div className="w-64 h-80 bg-[#8B6D51] rounded-t-full rounded-b-full absolute left-4 md:left-10 top-0 opacity-90 animate-float z-10 border-4 border-[#FBF7F0] overflow-hidden">
                            <img src="/images/picnic_setup_1772269324881.png" className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Picnic setup" />
                        </div>
                        {/* Right Shape */}
                        <div className="w-64 h-80 bg-[#DAB66E] rounded-t-full rounded-b-full absolute right-4 md:right-10 bottom-0 opacity-90 animate-float-delayed z-10 border-4 border-[#FBF7F0] overflow-hidden">
                            <img src="/images/mother_child_1772269346232.png" className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Mother and child" />
                        </div>

                        {/* Center overlap badge */}
                        <div className="z-20 text-center bg-[#FBF7F0]/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-[#3E2723] shadow-xl rotate-3">
                            <iconify-icon icon="solar:heart-bold" className="text-[#DAB66E] text-5xl mb-2"></iconify-icon>
                            <p className="font-serif italic font-bold text-xl text-[#3E2723]">{lang === 'EN' ? "Warm hospitality" : "Sự mến khách ấm áp"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
