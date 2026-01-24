import React from "react";

const metrics = [
    {
        value: "+15%",
        label: "PDP conversion rate",
        description: "Customers who visualize fit before purchase are more confident to buy. Tuck turns browsers into buyers by removing the final friction point at product decision.",
    },
    {
        value: "-22%",
        label: "Return rate",
        description: "Accurate fit visualization eliminates guesswork. When customers see how pieces look and fit on their body, returns from sizing issues drop dramatically protecting your margins.",
    },
    {
        value: "+9%",
        label: "PDP conversion rate",
        description: "Same store traffic, higher revenue. Tuck unlocks hidden purchasing power from visitors who would have otherwise left empty-handed, converting curiosity into sales.",
    },
];

export default function MetricsSection() {
    return (
        <section className="bg-white py-32 md:py-40">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Section Label */}
                <p className="font-body text-[14px] font-semibold text-graphite mb-4 tracking-[-0.1px]">
                    Business impact
                </p>

                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    {/* Left Column - Heading */}
                    <div>
                        <h2 className="font-heading text-[64px] font-bold text-graphite leading-[72px] tracking-[-0.1px]">
                            Designed to Move the<br />Metrics That Matter.
                        </h2>
                    </div>

                    {/* Right Column - Description */}
                    <div className="flex items-center">
                        <p className="font-body text-[18px] text-graphite leading-[28px]">
                            Tuck turns fit confidence into hard numbers: brands using virtual try-on typically see 10–20% higher PDP conversion and 15–30% fewer size‑related returns, unlocking 5–15% more revenue from the same traffic while recovering margin lost to returns.
                        </p>
                    </div>
                </div>

                {/* Three Metrics Grid with Dividers */}
                <div className="grid md:grid-cols-3 gap-0 relative">
                    {/* Vertical Dividers */}
                    <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gray-200" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-gray-200" />

                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className={`p-8 ${index < metrics.length - 1 ? "border-r border-gray-200" : ""}`}
                        >
                            {/* Numbers - much larger and bolder */}
                            <div className="font-heading text-[70px] font-bold text-graphite mb-4 leading-[47px] tracking-[-0.1px]">
                                {metric.value}
                            </div>

                            {/* Labels */}
                            <h3 className="font-body text-[16px] font-bold text-graphite mb-6 leading-[47px] tracking-[-0.1px]">
                                {metric.label}
                            </h3>

                            {/* Descriptions */}
                            <p className="font-body text-[16px] text-graphite leading-[28px] tracking-[-0.1px]">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
