import React from "react";

const BusinessImpact = () => {
    return (
        <section className="bg-white text-black w-full overflow-hidden">
            {/* Top Full-Width Line */}
            <div className="w-full border-t border-black"></div>

            <div className="py-20 px-6 lg:px-[93px] max-w-[1600px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
                    <div className="max-w-[800px]">
                        <span className="font-body text-[20px] font-medium mb-4 block text-[#2057F3]">Business impact</span>
                        <h2 className="font-heading text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-[-1px]">
                            Designed to Move the <br className="hidden lg:block" />
                            Metrics That Matter.
                        </h2>
                    </div>
                    <div className="max-w-[480px] pb-2">
                        <p className="font-body text-[16px] font-medium text-black leading-[25.2px]">
                            Tuck turns fit confidence into hard numbers: brands using virtual
                            try-on typically see 10–20% higher PDP conversion and 15–30% fewer
                            size-related returns, unlocking 5–15% more revenue from the same
                            traffic while recovering margin lost to returns.
                        </p>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 relative divide-y divide-black lg:divide-y-0">
                        {/* Three Separate Horizontal Line Segments with gaps at intersections */}
                        <div className="hidden lg:block absolute left-0 top-0 h-[5px] bg-black" style={{ width: 'calc(33.333% - 2.5px)' }}></div>
                        <div className="hidden lg:block absolute top-0 h-[5px] bg-black" style={{ left: 'calc(33.333% + 7.5px)', width: 'calc(33.333% - 10px)' }}></div>
                        <div className="hidden lg:block absolute top-0 h-[5px] bg-black" style={{ left: 'calc(66.666% + 7.5px)', width: 'calc(33.334% - 7.5px)' }}></div>

                        {/* Two Vertical Lines */}
                        <div className="hidden lg:block absolute top-[5px] w-[5px] bg-black" style={{ left: '33.333%', height: 'calc(100% - 5px)' }}></div>
                        <div className="hidden lg:block absolute top-[5px] w-[5px] bg-black" style={{ left: '66.666%', height: 'calc(100% - 5px)' }}></div>

                        {/* Metric 1 */}
                        <div className="pt-12 pb-4 lg:pr-12">
                            <h3 className="font-heading text-[80px] font-bold mb-2 tracking-[-2px] text-[#2057F3] leading-none">+15%</h3>
                            <p className="font-heading text-[20px] font-bold mb-6 tracking-wide text-black">
                                PDP conversion rate
                            </p>
                            <p className="font-body text-[16px] font-medium text-black leading-[25.2px] max-w-[300px]">
                                Customers who visualize fit before purchase are more confident to
                                buy. Tuck turns browsers into buyers by removing the final friction
                                point at product decision.
                            </p>
                        </div>

                        {/* Metric 2 */}
                        <div className="pt-12 pb-4 lg:px-12">
                            <h3 className="font-heading text-[80px] font-bold mb-2 tracking-[-2px] text-[#2057F3] leading-none">5-10%</h3>
                            <p className="font-heading text-[20px] font-bold mb-6 tracking-wide text-black">
                                Return rate
                            </p>
                            <p className="font-body text-[16px] font-medium text-black leading-[25.2px] max-w-[300px]">
                                Accurate fit visualization eliminates guesswork. When customers see
                                how pieces look and fit on their body, returns from sizing issues
                                drop dramatically protecting your margins.
                            </p>
                        </div>

                        {/* Metric 3 */}
                        <div className="pt-12 pb-4 lg:pl-12">
                            <h3 className="font-heading text-[80px] font-bold mb-2 tracking-[-2px] text-[#2057F3] leading-none">+20%</h3>
                            <p className="font-heading text-[20px] font-bold mb-6 tracking-wide text-black">
                                Upsell capability
                            </p>
                            <p className="font-body text-[16px] font-medium text-black leading-[25.2px] max-w-[300px]">
                                Same store traffic, higher revenue. Tuck unlocks hidden purchasing
                                power from visitors who would have otherwise left empty-handed,
                                converting curiosity into sales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Full-Width Line */}
            <div className="w-full border-t border-black"></div>
        </section>
    );
};

export default BusinessImpact;
