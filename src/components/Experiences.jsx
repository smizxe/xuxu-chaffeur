import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experiences = () => {
    const { lang } = useLanguage();
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast factor
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="experiences" className="py-20 bg-[#3E2723] overflow-hidden relative border-t-4 border-[#FBF7F0]">

            <div className="flex justify-between items-end px-6 md:px-12 max-w-7xl mx-auto mb-12">
                <div data-aos="fade-right">
                    <h2 className="text-4xl md:text-5xl font-black text-[#FBF7F0]">{lang === 'EN' ? "The Experiences" : "Góc Trải Nghiệm"}</h2>
                    <p className="text-[#A67C52] mt-2 font-serif italic text-xl">{lang === 'EN' ? "Private. Unhurried. Breathtaking." : "Tuyệt Mật. An Nhiên. Dành Cho Bạn."}</p>
                </div>
                <div className="hidden md:flex gap-2" data-aos="fade-left" data-aos-delay="200">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border-2 border-[#FBF7F0] text-[#FBF7F0] flex items-center justify-center hover:bg-[#8B6D51] hover:text-[#FFFFFF] transition-colors"
                    >
                        <iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border-2 border-[#FBF7F0] text-[#FBF7F0] flex items-center justify-center hover:bg-[#8B6D51] hover:text-[#FFFFFF] transition-colors"
                    >
                        <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
            >

                {/* Card 1 */}
                <div className="flex-shrink-0 snap-center relative group" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-[300px] md:w-[400px] bg-[#FBF7F0] p-3 pb-8 rounded-lg rotate-2 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#3E2723] flex items-center justify-center relative overflow-hidden mb-4">
                            <img draggable="false" src="/images/hero_picnic_1772269228827.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Family Picnic Escape" />
                            <div className="absolute top-3 left-3 bg-[#FBF7F0] text-[#3E2723] px-2 py-1 rounded text-xs font-bold border border-[#3E2723]">{lang === 'EN' ? "Private Only" : "Riêng Tư"}</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#3E2723]">{lang === 'EN' ? "Family Picnic Escape" : "Picnic Gia Đình"}</h3>
                        <p className="text-sm font-medium mt-2 text-[#3E2723]/80 mb-4">{lang === 'EN' ? "A gentle afternoon surrounded by nature, with a pre-prepared aesthetic picnic for the family." : "Một buổi chiều đắm mình trong thiên nhiên, thưởng thức một buổi dã ngoại đầy mộng mơ chuẩn bị sẵn."}</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#8B6D51]"></iconify-icon> {lang === 'EN' ? "4 Hours" : "4 Tiếng"}</span>
                            <button className="bg-[#3E2723] text-[#FBF7F0] px-4 py-1.5 rounded-full hover:bg-[#DAB66E] transition-colors">{lang === 'EN' ? "View Details" : "Chi Tiết"}</button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex-shrink-0 snap-center relative group mt-8" data-aos="fade-up" data-aos-delay="400">
                    <div className="w-[300px] md:w-[400px] bg-[#FBF7F0] p-3 pb-8 rounded-lg -rotate-3 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#3E2723] flex items-center justify-center relative overflow-hidden mb-4">
                            <img draggable="false" src="/images/beach_bbq_1772269260293.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Beach BBQ Sunset" />
                            <div className="absolute top-3 left-3 bg-[#FBF7F0] text-[#3E2723] px-2 py-1 rounded text-xs font-bold border border-[#3E2723]">{lang === 'EN' ? "Private Only" : "Riêng Tư"}</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#3E2723]">{lang === 'EN' ? "Beach BBQ Sunset" : "BBQ Hoàng Hôn Bãi Biển"}</h3>
                        <p className="text-sm font-medium mt-2 text-[#3E2723]/80 mb-4">{lang === 'EN' ? "End your day with a warm fire, delicious BBQ, and the peaceful sound of ocean waves." : "Kết thúc một ngày trong ngọn lửa ấm, tiệc nướng ngon và tiếng sóng vỗ rì rào bên tai."}</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#DAB66E]"></iconify-icon> {lang === 'EN' ? "5 Hours" : "5 Tiếng"}</span>
                            <button className="bg-[#3E2723] text-[#FBF7F0] px-4 py-1.5 rounded-full hover:bg-[#DAB66E] transition-colors">{lang === 'EN' ? "View Details" : "Chi Tiết"}</button>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex-shrink-0 snap-center relative group" data-aos="fade-up" data-aos-delay="500">
                    <div className="w-[300px] md:w-[400px] bg-[#FBF7F0] p-3 pb-8 rounded-lg rotate-1 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#3E2723] flex items-center justify-center relative overflow-hidden mb-4">
                            <img draggable="false" src="/images/hoi_an_stroll_1772269277669.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Hoi An Slow Discovery" />
                            <div className="absolute top-3 left-3 bg-[#FBF7F0] text-[#3E2723] px-2 py-1 rounded text-xs font-bold border border-[#3E2723]">{lang === 'EN' ? "Private Only" : "Riêng Tư"}</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#3E2723]">{lang === 'EN' ? "Hoi An Slow Discovery" : "Phố Cổ Hội An"}</h3>
                        <p className="text-sm font-medium mt-2 text-[#3E2723]/80 mb-4">{lang === 'EN' ? "Stroll through the lantern-lit streets at your own pace, perfectly suited for young families." : "Chậm rãi dạo quanh những con phố ngập tràn ánh đèn lồng, thiết kế chuẩn cho những gia đình nhỏ."}</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#A67C52]"></iconify-icon> {lang === 'EN' ? "6 Hours" : "6 Tiếng"}</span>
                            <button className="bg-[#3E2723] text-[#FBF7F0] px-4 py-1.5 rounded-full hover:bg-[#DAB66E] transition-colors">{lang === 'EN' ? "View Details" : "Chi Tiết"}</button>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flex-shrink-0 snap-center relative group mt-6" data-aos="fade-up" data-aos-delay="600">
                    <div className="w-[300px] md:w-[400px] bg-[#FBF7F0] p-3 pb-8 rounded-lg -rotate-2 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#3E2723] flex items-center justify-center relative overflow-hidden mb-4">
                            <img draggable="false" src="/images/bana_hills_1772269361633.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ba Na Hills Family Day" />
                            <div className="absolute top-3 left-3 bg-[#FBF7F0] text-[#3E2723] px-2 py-1 rounded text-xs font-bold border border-[#3E2723]">{lang === 'EN' ? "Private Only" : "Riêng Tư"}</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#3E2723]">{lang === 'EN' ? "Ba Na Hills Family Day" : "Gia Đình Khám Phá Bà Nà"}</h3>
                        <p className="text-sm font-medium mt-2 text-[#3E2723]/80 mb-4">{lang === 'EN' ? "A comfortable, stress-free journey to the clouds. Your chauffeur handles all the details." : "Một chuyến đi thư giãn, không chút xô bồ trên những tầng mây. Nữ tài xế sẽ thay bạn xử lý mọi điều."}</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#8B6D51]"></iconify-icon> {lang === 'EN' ? "8 Hours" : "8 Tiếng"}</span>
                            <button className="bg-[#3E2723] text-[#FBF7F0] px-4 py-1.5 rounded-full hover:bg-[#DAB66E] transition-colors">{lang === 'EN' ? "View Details" : "Chi Tiết"}</button>
                        </div>
                    </div>
                </div>

                {/* Card 5 - Local Market */}
                <div className="flex-shrink-0 snap-center relative group" data-aos="fade-up" data-aos-delay="700">
                    <div className="w-[300px] md:w-[400px] bg-[#FBF7F0] p-3 pb-8 rounded-lg rotate-1 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#3E2723] flex items-center justify-center relative overflow-hidden mb-4">
                            <img draggable="false" src="/images/local_market_experience_1772271476932.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Local Market Discovery" />
                            <div className="absolute top-3 left-3 bg-[#FBF7F0] text-[#3E2723] px-2 py-1 rounded text-xs font-bold border border-[#3E2723]">{lang === 'EN' ? "Private Only" : "Riêng Tư"}</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#3E2723]">{lang === 'EN' ? "Local Market Discovery" : "Khám Phá Chợ Địa Phương"}</h3>
                        <p className="text-sm font-medium mt-2 text-[#3E2723]/80 mb-4">{lang === 'EN' ? "Dive into the vibrant local culture with a guided tour of an authentic Vietnamese market. Handpick fresh ingredients and learn about regional specialties." : "Hòa mình vào văn hóa bản địa nhộn nhịp cùng một vòng quanh khu chợ truyền thống. Tận tay chọn lựa nguyên liệu tươi ngon và tìm hiểu đặc sản vùng miền."}</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#8B6D51]"></iconify-icon> {lang === 'EN' ? "3 Hours" : "3 Tiếng"}</span>
                            <button className="bg-[#3E2723] text-[#FBF7F0] px-4 py-1.5 rounded-full hover:bg-[#DAB66E] transition-colors">{lang === 'EN' ? "View Details" : "Chi Tiết"}</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experiences;
