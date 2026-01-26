import React from "react";

const BusinessImpact = () => {
    return (
        <section className="bg-white text-black py-20 px-6 lg:px-[93px] max-w-[1440px] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
                <div className="max-w-[800px]">
                    <span className="font-body text-[20px] font-medium mb-4 block">Business impact</span>
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

            {/* Divider */}
            <hr className="border-t-2 border-black mb-12" />

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Metric 1 */}
                <div className="md:pr-12 md:border-r-2 md:border-black py-4">
                    <h3 className="font-heading text-[80px] font-bold mb-4 tracking-[-2px]">+15%</h3>
                    <p className="font-heading text-[16px] font-bold mb-6 uppercase tracking-wide">
                        PDP conversion rate
                    </p>
                    <p className="font-body text-[16px] font-medium text-black leading-[25.2px]">
                        Customers who visualize fit before purchase are more confident to
                        buy. Tuck turns browsers into buyers by removing the final friction
                        point at product decision.
                    </p>
                </div>

                {/* Metric 2 */}
                <div className="md:px-12 md:border-r-2 md:border-black py-4">
                    <h3 className="font-heading text-[80px] font-bold mb-4 tracking-[-2px]">-22%</h3>
                    <p className="font-heading text-[16px] font-bold mb-6 uppercase tracking-wide">
                        Return rate
                    </p>
                    <p className="font-body text-[16px] font-medium text-black leading-[25.2px]">
                        Accurate fit visualization eliminates guesswork. When customers see
                        how pieces look and fit on their body, returns from sizing issues
                        drop dramatically protecting your margins.
                    </p>
                </div>

                {/* Metric 3 */}
                <div className="md:pl-12 py-4">
                    <h3 className="font-heading text-[80px] font-bold mb-4 tracking-[-2px]">+9%</h3>
                    <p className="font-heading text-[16px] font-bold mb-6 uppercase tracking-wide">
                        PDP conversion rate
                    </p>
                    <p className="font-body text-[16px] font-medium text-black leading-[25.2px]">
                        Same store traffic, higher revenue. Tuck unlocks hidden purchasing
                        power from visitors who would have otherwise left empty-handed,
                        converting curiosity into sales.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BusinessImpact;
