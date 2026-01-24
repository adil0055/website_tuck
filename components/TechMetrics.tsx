import React from "react";

const metrics = [
    {
        value: "95%",
        label: "Realism score",
        description: "Real-time Processing Instant virtual try-on results",
    },
    {
        value: "15s",
        label: "Speed",
        description: "Precision Fit AI-powered body measurements",
    },
    {
        value: "49%",
        label: "Cost Savings",
        description: "Upto 49% savings at scale vs competitors",
    },
];

export default function TechMetrics() {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Three Metrics in Row */}
                <div className="grid md:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="bg-[#f5f5f5] rounded-[8px] p-8 md:p-10"
                        >
                            {/* Metric Value */}
                            <div className="font-heading text-[56px] md:text-[64px] font-bold text-graphite mb-2 leading-tight tracking-[-0.5px]">
                                {metric.value}
                            </div>

                            {/* Metric Label */}
                            <h3 className="font-heading text-[24px] font-medium text-graphite mb-4 leading-tight">
                                {metric.label}
                            </h3>

                            {/* Description */}
                            <p className="font-body text-[16px] text-graphite leading-[24px]">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

