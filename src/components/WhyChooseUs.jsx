import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-[#F7F4EF] relative overflow-hidden text-[#2C3329] border-t-4 border-[#2C3329]">

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: Soft Photo */}
                <div className="relative group perspective-1000">
                    <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl border-4 border-[#2C3329] overflow-hidden hard-shadow transform group-hover:-rotate-2 transition-all duration-500">
                        <img src="/images/female_chauffeur_1772269241667.png" className="w-full h-full object-cover" alt="Friendly female driver" />
                        {/* Gradient overlay at bottom for text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3329]/60 to-transparent flex items-end p-8">
                            <p className="font-serif italic text-2xl text-[#F7F4EF]">Confidence with warmth.</p>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 bg-[#C5B382] text-[#2C3329] p-4 rounded-full border-2 border-[#2C3329] rotate-12 animate-float">
                        <iconify-icon icon="solar:star-fall-bold" width="32"></iconify-icon>
                    </div>
                </div>

                {/* Right: Bullet Points */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#2C3329] bg-[#F7F4EF] text-[#2C3329] text-sm font-bold mb-8 shadow-[4px_4px_0px_0px_#2C3329]">
                        <iconify-icon icon="solar:shield-star-bold" width="16" className="text-[#5A6B50]"></iconify-icon>
                        WHY A FEMALE CHAUFFEUR?
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10">
                        The gentle <br /><span className="text-stroke italic font-serif text-[#E8987E]">Difference</span>
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white px-6 py-5 rounded-xl border-2 border-[#2C3329] shadow-[4px_4px_0px_0px_#2C3329] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#2C3329] transition-all flex items-start gap-4">
                            <div className="bg-[#5A6B50] p-2 rounded-lg text-[#F7F4EF] mt-1">
                                <iconify-icon icon="solar:heart-angle-bold" width="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Safe & Patient with Children</h4>
                                <p className="text-sm font-medium text-[#2C3329]/70 mt-1">We know that traveling with kids requires flexibility, extra time, and a calm environment.</p>
                            </div>
                        </div>

                        <div className="bg-white px-6 py-5 rounded-xl border-2 border-[#2C3329] shadow-[4px_4px_0px_0px_#2C3329] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#2C3329] transition-all flex items-start gap-4">
                            <div className="bg-[#E8987E] p-2 rounded-lg text-[#F7F4EF] mt-1">
                                <iconify-icon icon="solar:steering-wheel-bold" width="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Calm Driving Style</h4>
                                <p className="text-sm font-medium text-[#2C3329]/70 mt-1">No rushing, no aggressive maneuvers. Just a smooth, relaxing journey from start to finish.</p>
                            </div>
                        </div>

                        <div className="bg-white px-6 py-5 rounded-xl border-2 border-[#2C3329] shadow-[4px_4px_0px_0px_#2C3329] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#2C3329] transition-all flex items-start gap-4">
                            <div className="bg-[#C5B382] p-2 rounded-lg text-[#2C3329] mt-1">
                                <iconify-icon icon="solar:chat-round-line-bold" width="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">English Communication</h4>
                                <p className="text-sm font-medium text-[#2C3329]/70 mt-1">Clear coordination and friendly conversations for our international guests.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
