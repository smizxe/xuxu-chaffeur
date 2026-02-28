import React from 'react';

const Booking = () => {
    return (
        <section id="booking" className="py-32 px-6 relative overflow-hidden bg-[#F7F4EF] border-t-4 border-[#2C3329]">
            {/* Decorations */}
            <div className="absolute top-10 left-10 text-[#C5B382] opacity-40 animate-spin-slow">
                <iconify-icon icon="solar:sun-2-bold" width="100"></iconify-icon>
            </div>
            <div className="absolute bottom-10 right-10 text-[#5A6B50] opacity-20 animate-float">
                <iconify-icon icon="solar:leaf-bold" width="120"></iconify-icon>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 rounded-3xl border-4 border-[#2C3329] p-8 md:p-16 bg-[#FFFFFF] hard-shadow shadow-[12px_12px_0px_0px_#2C3329]">

                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#2C3329] mb-4">
                        Plan your <br />
                        <span className="text-[#5A6B50] font-serif italic">gentle journey.</span>
                    </h2>
                    <p className="text-lg text-[#2C3329]/70 font-medium">
                        Let us personally prepare a beautiful day for you and your loved ones.
                    </p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <input type="text" placeholder="Full Name" className="bg-[#F7F4EF] border-2 border-[#2C3329] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#C5B382]/50 text-[#2C3329] placeholder-[#2C3329]/50 font-bold transition-all" />
                    <input type="email" placeholder="Email Address" className="bg-[#F7F4EF] border-2 border-[#2C3329] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#C5B382]/50 text-[#2C3329] placeholder-[#2C3329]/50 font-bold transition-all" />

                    <input type="tel" placeholder="WhatsApp / Phone" className="bg-[#F7F4EF] border-2 border-[#2C3329] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#C5B382]/50 text-[#2C3329] placeholder-[#2C3329]/50 font-bold transition-all" />

                    <select className="bg-[#F7F4EF] border-2 border-[#2C3329] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#C5B382]/50 text-[#2C3329] placeholder-[#2C3329]/50 font-bold transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select Experience</option>
                        <option value="picnic">Family Picnic Escape</option>
                        <option value="bbq">Beach BBQ Sunset</option>
                        <option value="hoian">Hoi An Slow Discovery</option>
                        <option value="bana">Ba Na Hills Family Day</option>
                        <option value="custom">Custom Request</option>
                    </select>

                    <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Adults" min="1" className="bg-[#F7F4EF] border-2 border-[#2C3329] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#C5B382]/50 text-[#2C3329] font-bold transition-all" />
                        <input type="number" placeholder="Children" min="0" className="bg-[#F7F4EF] border-2 border-[#2C3329] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#C5B382]/50 text-[#2C3329] font-bold transition-all" />
                    </div>

                    <input type="date" className="bg-[#F7F4EF] border-2 border-[#2C3329] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#C5B382]/50 text-[#2C3329] font-bold transition-all" />

                    <textarea placeholder="Any special requests or details about the children?" rows="3" className="md:col-span-2 bg-[#F7F4EF] border-2 border-[#2C3329] rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-[#C5B382]/50 text-[#2C3329] placeholder-[#2C3329]/50 font-bold transition-all resize-none"></textarea>
                </form>

                <div className="flex flex-col items-center gap-4">
                    <button type="button" className="bg-[#2C3329] text-[#F7F4EF] px-10 py-4 w-full md:w-auto rounded-xl font-bold text-lg hover:bg-[#5A6B50] transition-colors shadow-[4px_4px_0px_0px_#C5B382] hover:shadow-[2px_2px_0px_0px_#C5B382] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center gap-2">
                        Send Request
                    </button>
                    <p className="text-sm font-bold text-[#2C3329]/40 mt-2 uppercase tracking-wider">OR BOOK DIRECTLY</p>
                    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-[#25D366] text-[#FFFFFF] px-10 py-4 rounded-xl font-bold text-lg border-2 border-[#2C3329] shadow-[4px_4px_0px_0px_#2C3329] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#2C3329] transition-all flex items-center justify-center gap-3">
                        <iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon>
                        WhatsApp Us
                    </a>
                    <p className="text-[#5A6B50] font-serif italic font-bold text-center mt-4">"Thank you. We will personally prepare your journey."</p>
                </div>

            </div>
        </section>
    );
};

export default Booking;
