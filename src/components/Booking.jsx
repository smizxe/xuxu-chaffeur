import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const Booking = () => {
    const { lang } = useLanguage();
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError(false);

        const form = e.target;
        const formData = new FormData(form);

        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                setSubmitting(false);
                setSubmitSuccess(true);
                form.reset();
                // Automatically clear success message after a few seconds
                setTimeout(() => setSubmitSuccess(false), 5000);
            })
            .catch(error => {
                console.error('Error!', error.message);
                setSubmitting(false);
                setSubmitError(true);
                setTimeout(() => setSubmitError(false), 5000);
            });
    };

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

                <div className="text-center mb-10" data-aos="fade-down">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#3E2723] mb-4">
                        {lang === 'EN' ? "Plan your " : "Lên Kế Hoạch "}<br />
                        <span className="text-[#8B6D51] font-serif italic">{lang === 'EN' ? "gentle journey." : "Hành Trình Chữa Lành"}</span>
                    </h2>
                    <p className="text-lg text-[#3E2723]/70 font-medium">
                        {lang === 'EN' ? "Let us personally prepare a beautiful day for you and your loved ones." : "Hãy để chúng tôi chuẩn bị cho bạn và những người thân yêu một ngày tuyệt đẹp."}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <input name="Name" required type="text" placeholder={lang === 'EN' ? "Full Name" : "Họ và Tên"} className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all" data-aos="fade-up" data-aos-delay="200" />
                    <input name="Email" required type="email" placeholder={lang === 'EN' ? "Email Address" : "Địa Chỉ Email"} className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all" data-aos="fade-up" data-aos-delay="300" />

                    <input name="Phone" required type="tel" placeholder={lang === 'EN' ? "WhatsApp / Phone" : "WhatsApp / Số Điện Thoại"} className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all" data-aos="fade-up" data-aos-delay="400" />

                    <select name="Experience" required defaultValue="" className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] font-bold transition-all appearance-none cursor-pointer" data-aos="fade-up" data-aos-delay="500">
                        <option value="" disabled>{lang === 'EN' ? "Select Experience" : "Chọn Trải Nghiệm"}</option>
                        <option value="Family Picnic Escape">{lang === 'EN' ? "Family Picnic Escape" : "Picnic Gia Đình"}</option>
                        <option value="Beach BBQ Sunset">{lang === 'EN' ? "Beach BBQ Sunset" : "BBQ Hoàng Hôn Bãi Biển"}</option>
                        <option value="Hoi An Slow Discovery">{lang === 'EN' ? "Hoi An Slow Discovery" : "Phố Cổ Hội An"}</option>
                        <option value="Ba Na Hills Family Day">{lang === 'EN' ? "Ba Na Hills Family Day" : "Gia Đình Khám Phá Bà Nà"}</option>
                        <option value="Local Market Discovery">{lang === 'EN' ? "Local Market Discovery" : "Khám Phá Chợ Địa Phường"}</option>
                        <option value="Custom Request">{lang === 'EN' ? "Custom Request" : "Yêu Cầu Riêng"}</option>
                    </select>

                    <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="600">
                        <input name="Adults" required type="number" placeholder={lang === 'EN' ? "Adults" : "Người Lớn"} min="1" className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] font-bold transition-all" />
                        <input name="Children" required type="number" placeholder={lang === 'EN' ? "Children" : "Trẻ Em"} min="0" className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] font-bold transition-all" />
                    </div>

                    <input name="JourneyDate" required type="date" className="bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] font-bold transition-all" data-aos="fade-up" data-aos-delay="700" />

                    <textarea name="Details" placeholder={lang === 'EN' ? "Any special requests or details about the children?" : "Bất kỳ yêu cầu đặc biệt nào hoặc chi tiết về em bé?"} rows="3" className="md:col-span-2 bg-[#FBF7F0] border-2 border-[#3E2723] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#A67C52]/50 text-[#3E2723] placeholder-[#3E2723]/50 font-bold transition-all resize-none" data-aos="fade-up" data-aos-delay="800"></textarea>

                    <div className="md:col-span-2 flex flex-col items-center gap-4 mt-4" data-aos="fade-up" data-aos-delay="900">
                        <button disabled={submitting} type="submit" className="bg-[#3E2723] text-[#FBF7F0] px-10 py-4 w-full md:w-auto rounded-xl font-bold text-lg hover:bg-[#8B6D51] transition-colors shadow-[4px_4px_0px_0px_#A67C52] hover:shadow-[2px_2px_0px_0px_#A67C52] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                            {submitting ? (lang === 'EN' ? "Sending..." : "Đang gửi...") : (lang === 'EN' ? "Send Request" : "Gửi Yêu Cầu")}
                        </button>

                        {submitSuccess && (
                            <p className="text-sm font-bold text-[#25D366] bg-[#25D366]/10 px-4 py-2 rounded-lg">
                                {lang === 'EN' ? "Your request has been sent successfully!" : "Yêu cầu của bạn đã được gửi thành công!"}
                            </p>
                        )}
                        {submitError && (
                            <p className="text-sm font-bold text-red-500 bg-red-500/10 px-4 py-2 rounded-lg">
                                {lang === 'EN' ? "There was an error sending your request. Please try again." : "Có lỗi xảy ra. Vui lòng thử lại sau."}
                            </p>
                        )}
                    </div>
                </form>

                <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="1000">
                    <p className="text-sm font-bold text-[#3E2723]/40 mt-2 uppercase tracking-wider">{lang === 'EN' ? "OR BOOK DIRECTLY" : "HOẶC ĐẶT TRỰC TIẾP"}</p>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <a href="https://wa.me/84905590562" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-[#25D366] text-[#FFFFFF] px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#3E2723] transition-all flex items-center justify-center gap-3">
                            <iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon>
                            WhatsApp
                        </a>

                        {/* Facebook Button (Desktop) */}
                        <a href="https://www.facebook.com/Xu.Vietnam.Hair" target="_blank" rel="noreferrer" className="hidden md:flex w-full md:w-auto bg-[#1877F2] text-[#FFFFFF] px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#3E2723] transition-all items-center justify-center gap-3">
                            <iconify-icon icon="logos:facebook" width="24"></iconify-icon>
                            Facebook
                        </a>

                        {/* Facebook Button (Mobile) */}
                        <a href="https://m.facebook.com/Xu.Vietnam.Hair" target="_blank" rel="noreferrer" className="flex md:hidden w-full bg-[#1877F2] text-[#FFFFFF] px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#3E2723] shadow-[4px_4px_0px_0px_#3E2723] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#3E2723] transition-all items-center justify-center gap-3">
                            <iconify-icon icon="logos:facebook" width="24"></iconify-icon>
                            Facebook
                        </a>
                    </div>
                    <p className="text-[#8B6D51] font-serif italic font-bold text-center mt-4">
                        {lang === 'EN' ? `"Thank you. We will personally prepare your journey."` : `"Xin cảm ơn. Chúng tôi sẽ tự tay chuẩn bị cho trải nghiệm của bạn."`}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Booking;
