import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Booking = () => {
    const { lang } = useLanguage();

    return (
        <section id="booking" className="py-32 px-6 relative overflow-hidden bg-[#FBF7F0] border-t-4 border-[#3E2723]">
            {/* Decorations */}
            <div className="absolute top-10 left-10 text-[#A67C52] opacity-40 animate-spin-slow">
                <iconify-icon icon="solar:sun-2-bold" width="100"></iconify-icon>
            </div>
            <div className="absolute bottom-10 right-10 text-[#8B6D51] opacity-20 animate-float">
                <iconify-icon icon="solar:leaf-bold" width="120"></iconify-icon>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 rounded-3xl border-4 border-[#3E2723] p-8 md:p-16 bg-[#FFFFFF] hard-shadow shadow-[12px_12px_0px_0px_#3E2723]">

                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#3E2723] mb-4">
                        {lang === 'EN' ? "Plan your " : "Lên Kế Hoạch "}<br />
                        <span className="text-[#8B6D51] font-serif italic">{lang === 'EN' ? "gentle journey." : "Hành Trình Chữa Lành"}</span>
                    </h2>
                    <p className="text-lg text-[#3E2723]/70 font-medium">
                        {lang === 'EN' ? "Let us personally prepare a beautiful day for you and your loved ones." : "Hãy để chúng tôi chuẩn bị cho bạn và những người thân yêu một ngày tuyệt đẹp."}
                    </p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <input type="text" placeholder={lang === 'EN' ? "Full Name" : "Họ và Tên"} className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all" />
                    <input type="email" placeholder={lang === 'EN' ? "Email Address" : "Địa Chỉ Email"} className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all" />

                    <input type="tel" placeholder={lang === 'EN' ? "WhatsApp / Phone" : "WhatsApp / Số Điện Thoại"} className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all" />

                    <select className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>{lang === 'EN' ? "Select Experience" : "Chọn Trải Nghiệm"}</option>
                        <option value="picnic">{lang === 'EN' ? "Family Picnic Escape" : "Picnic Gia Đình"}</option>
                        <option value="bbq">{lang === 'EN' ? "Beach BBQ Sunset" : "BBQ Hoàng Hôn Bãi Biển"}</option>
                        <option value="hoian">{lang === 'EN' ? "Hoi An Slow Discovery" : "Phố Cổ Hội An"}</option>
                        <option value="bana">{lang === 'EN' ? "Ba Na Hills Family Day" : "Gia Đình Khám Phá Bà Nà"}</option>
                        <option value="custom">{lang === 'EN' ? "Custom Request" : "Yêu Cầu Riêng"}</option>
                    </select>

                    <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder={lang === 'EN' ? "Adults" : "Người Lớn"} min="1" className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] font-bold transition-all" />
                        <input type="number" placeholder={lang === 'EN' ? "Children" : "Trẻ Em"} min="0" className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] font-bold transition-all" />
                    </div>

                    <input type="date" className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] font-bold transition-all" />

                    <textarea placeholder={lang === 'EN' ? "Any special requests or details about the children?" : "Bất kỳ yêu cầu đặc biệt nào hoặc chi tiết về em bé?"} rows="3" className="md:col-span-2 bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all resize-none"></textarea>
                </form>

                <div className="flex flex-col items-center gap-4">
                    <button type="button" className="bg-[#3E2723] text-[#FBF7F0] px-10 py-4 w-full md:w-auto rounded-xl font-bold text-lg hover:bg-[#8B6D51] transition-colors shadow-[4px_4px_0px_0px_#A67C52] hover:shadow-[2px_2px_0px_0px_#A67C52] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center gap-2">
                        {lang === 'EN' ? "Send Request" : "Gửi Yêu Cầu"}
                    </button>
                    <p className="text-sm font-bold text-[#3E2723]/40 mt-2 uppercase tracking-wider">{lang === 'EN' ? "OR BOOK DIRECTLY" : "HOẶC ĐẶT TRỰC TIẾP"}</p>
                    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-[#25D366] text-[#FFFFFF] px-10 py-4 rounded-xl font-bold text-lg border-2 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#3E2723] transition-all flex items-center justify-center gap-3">
                        <iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon>
                        {lang === 'EN' ? "WhatsApp Us" : "Nhắn Tin Qua WhatsApp"}
                    </a>
                    <p className="text-[#8B6D51] font-serif italic font-bold text-center mt-4">
                        {lang === 'EN' ? `"Thank you. We will personally prepare your journey."` : `"Xin cảm ơn. Chúng tôi sẽ tự tay chuẩn bị cho trải nghiệm của bạn."`}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Booking;
