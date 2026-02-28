import React from 'react';

const Experiences = () => {
    return (
        <section id="experiences" className="py-20 bg-[#2C3329] overflow-hidden relative border-t-4 border-[#F7F4EF]">

            <div className="flex justify-between items-end px-6 md:px-12 max-w-7xl mx-auto mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#F7F4EF]">The Experiences</h2>
                    <p className="text-[#C5B382] mt-2 font-serif italic text-xl">Private. Unhurried. Breathtaking.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <button className="w-12 h-12 rounded-full border-2 border-[#F7F4EF] text-[#F7F4EF] flex items-center justify-center hover:bg-[#5A6B50] hover:text-[#FFFFFF] transition-colors">
                        <iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
                    </button>
                    <button className="w-12 h-12 rounded-full border-2 border-[#F7F4EF] text-[#F7F4EF] flex items-center justify-center hover:bg-[#5A6B50] hover:text-[#FFFFFF] transition-colors">
                        <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x no-scrollbar">

                {/* Card 1 */}
                <div className="flex-shrink-0 snap-center relative group">
                    <div className="w-[300px] md:w-[400px] bg-[#F7F4EF] p-3 pb-8 rounded-lg rotate-2 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#2C3329] flex items-center justify-center relative overflow-hidden mb-4">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Family Picnic Escape" />
                            <div className="absolute top-3 left-3 bg-[#F7F4EF] text-[#2C3329] px-2 py-1 rounded text-xs font-bold border border-[#2C3329]">Private Only</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#2C3329]">Family Picnic Escape</h3>
                        <p className="text-sm font-medium mt-2 text-[#2C3329]/80 mb-4">A gentle afternoon surrounded by nature, with a pre-prepared aesthetic picnic for the family.</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#5A6B50]"></iconify-icon> 4 Hours</span>
                            <button className="bg-[#2C3329] text-[#F7F4EF] px-4 py-1.5 rounded-full hover:bg-[#E8987E] transition-colors">View Details</button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex-shrink-0 snap-center relative group mt-8">
                    <div className="w-[300px] md:w-[400px] bg-[#F7F4EF] p-3 pb-8 rounded-lg -rotate-3 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#2C3329] flex items-center justify-center relative overflow-hidden mb-4">
                            <img src="https://images.unsplash.com/photo-1533227260828-531c6b658d3d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Beach BBQ Sunset" />
                            <div className="absolute top-3 left-3 bg-[#F7F4EF] text-[#2C3329] px-2 py-1 rounded text-xs font-bold border border-[#2C3329]">Private Only</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#2C3329]">Beach BBQ Sunset</h3>
                        <p className="text-sm font-medium mt-2 text-[#2C3329]/80 mb-4">End your day with a warm fire, delicious BBQ, and the peaceful sound of ocean waves.</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#E8987E]"></iconify-icon> 5 Hours</span>
                            <button className="bg-[#2C3329] text-[#F7F4EF] px-4 py-1.5 rounded-full hover:bg-[#E8987E] transition-colors">View Details</button>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex-shrink-0 snap-center relative group">
                    <div className="w-[300px] md:w-[400px] bg-[#F7F4EF] p-3 pb-8 rounded-lg rotate-1 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#2C3329] flex items-center justify-center relative overflow-hidden mb-4">
                            <img src="https://images.unsplash.com/photo-1555529902-52611456346b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Hoi An Slow Discovery" />
                            <div className="absolute top-3 left-3 bg-[#F7F4EF] text-[#2C3329] px-2 py-1 rounded text-xs font-bold border border-[#2C3329]">Private Only</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#2C3329]">Hoi An Slow Discovery</h3>
                        <p className="text-sm font-medium mt-2 text-[#2C3329]/80 mb-4">Stroll through the lantern-lit streets at your own pace, perfectly suited for young families.</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#C5B382]"></iconify-icon> 6 Hours</span>
                            <button className="bg-[#2C3329] text-[#F7F4EF] px-4 py-1.5 rounded-full hover:bg-[#E8987E] transition-colors">View Details</button>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flex-shrink-0 snap-center relative group mt-6">
                    <div className="w-[300px] md:w-[400px] bg-[#F7F4EF] p-3 pb-8 rounded-lg -rotate-2 hard-shadow group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-black w-full h-[250px] rounded border border-[#2C3329] flex items-center justify-center relative overflow-hidden mb-4">
                            <img src="https://images.unsplash.com/photo-1596395819057-7e61884cdef3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ba Na Hills Family Day" />
                            <div className="absolute top-3 left-3 bg-[#F7F4EF] text-[#2C3329] px-2 py-1 rounded text-xs font-bold border border-[#2C3329]">Private Only</div>
                        </div>
                        <h3 className="font-serif italic font-bold text-2xl text-[#2C3329]">Ba Na Hills Family Day</h3>
                        <p className="text-sm font-medium mt-2 text-[#2C3329]/80 mb-4">A comfortable, stress-free journey to the clouds. Your chauffeur handles all the details.</p>
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-bold flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold" className="text-[#5A6B50]"></iconify-icon> 8 Hours</span>
                            <button className="bg-[#2C3329] text-[#F7F4EF] px-4 py-1.5 rounded-full hover:bg-[#E8987E] transition-colors">View Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experiences;
