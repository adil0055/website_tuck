import React from "react";

const metrics = [
    {
        value: "95%",
        label: "Realism score",
        description: "Real-time Processing Instant virtual try-on results",
        nodeId: "40:1346",
        descriptionNodeId: "40:1349",
    },
    {
        value: "15s",
        label: "Speed",
        description: "Precision Fit AI-powered body measurements",
        nodeId: "40:1347",
        descriptionNodeId: "40:1350",
    },
    {
        value: "49%",
        label: "Cost Savings",
        description: "Upto 49% savings at scale vs competitors",
        nodeId: "40:1348",
        descriptionNodeId: "40:1351",
    },
];

export default function MetricsSection() {
    return (
        <section className="bg-white border-t border-b border-black" data-node-id="40:1342">
            <div className="max-w-[1440px] mx-auto" data-node-id="40:1343">
                {/* Three Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className={`
                                    bg-white px-6 lg:px-[63px] py-8 lg:py-10
                                    ${index === 0 ? 'md:border-r md:border-black' : ''}
                                    ${index === 1 ? 'md:border-r md:border-black' : ''}
                                    ${index < 2 ? 'border-b md:border-b-0 border-black' : ''}
                                `}
                                data-node-id={index === 0 ? "40:1344" : index === 1 ? "40:1345" : "40:1352"}
                            >
                                {/* Metric Value and Label */}
                                <div 
                                    className="mb-6"
                                    data-node-id={metric.nodeId}
                                >
                                    {/* Metric Value */}
                                    <div className="font-heading text-[48px] font-bold text-graphite leading-[31px] tracking-[-0.1px] mb-2">
                                        {metric.value}
                                    </div>

                                    {/* Metric Label */}
                                    <h3 className="font-heading text-[24px] font-bold text-graphite leading-[31px] tracking-[-0.1px]">
                                        {metric.label}
                                    </h3>
                                </div>

                                {/* Description - Split lines */}
                                <div 
                                    className="font-body text-[16px] text-graphite leading-[24px] tracking-[-0.1px]"
                                    data-node-id={metric.descriptionNodeId}
                                >
                                    {metric.description.split(' ').map((word, i, arr) => {
                                        const isFirstHalf = i < arr.length / 2;
                                        return (
                                            <span key={i}>
                                                {word}
                                                {isFirstHalf && i === Math.floor(arr.length / 2) - 1 ? <br /> : ' '}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

