import React from "react";

const issues = [
    {
        title: "Slow Fitting Rooms",
        titleNodeId: "32:956",
        description: "Shoppers hate waiting. Long lines and slow changing times force them to quit after just three items. You lose revenue because customers physically can't try more.",
        descriptionNodeId: "32:960",
    },
    {
        title: "The Return Crisis",
        titleNodeId: "32:957",
        description: "Blind buying drives return rates up to 30%. When shoppers can’t visualize the look & fit, the gap between expectation and reality destroys margins and fuels costly logistics.",
        descriptionNodeId: "32:961",
    },
    {
        title: "Limited In-Store Discovery",
        titleNodeId: "32:958",
        description: "Physical browsing is inefficient. Shoppers struggle to find relevant styles in crowded aisles, and limited try-on time caps their basket size, leaving your best inventory unseen.",
        descriptionNodeId: "32:963",
    },
];

export default function DarkFeature() {
    return (
        <section
            className="bg-black text-white relative flex items-center"
            style={{
                minHeight: '768px',
                paddingTop: '80px',
                paddingBottom: '80px',
            }}
            data-node-id="32:955"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Label - Node 32:965 */}
                <p
                    className="font-body text-[18px] font-normal text-white mb-4 leading-[21px] tracking-[-0.1px]"
                    data-node-id="32:965"
                >
                    Problem
                </p>

                {/* Main Heading and Description */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                    <div>
                        {/* Headline - Node 32:964 */}
                        <h2
                            className="font-heading text-[clamp(40px,4.4vw,64px)] font-semibold text-white leading-[1.09] tracking-[-0.1px]"
                            data-node-id="32:964"
                        >
                            The fitting room<br />
                            is <span className="text-[#0040ff]">broken.</span>
                        </h2>
                    </div>
                    <div className="flex items-center">
                        {/* Description - Node 32:962 */}
                        <p
                            className="font-body text-[18px] font-normal text-white leading-[29px] tracking-[-0.1px]"
                            data-node-id="32:962"
                        >
                            In-store trials average 5 minutes, causing customer drop-offs after just three items. Online, static displays force guesswork, driving returns to 30% as shoppers struggle to match expectation with reality.
                        </p>
                    </div>
                </div>

                {/* Horizontal Divider Line - Node 32:966 */}
                <div
                    className="w-full h-[1px] bg-white/20 mb-12 md:mb-16"
                    data-node-id="32:966"
                />

                {/* Three Issues Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Vertical divider - Node 32:967 (between columns 1 and 2) */}
                    <div
                        className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/20"
                        data-node-id="32:967"
                    />
                    {/* Vertical divider between columns 2 and 3 */}
                    <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-white/20" />

                    {issues.map((issue, index) => (
                        <div key={index} className="relative">
                            {/* Small accent line above title */}
                            <div className="w-[67px] h-[1px] bg-[#03c] mb-4 md:mb-6" />

                            {/* Issue Title */}
                            <h3
                                className="font-heading text-[clamp(24px,2.2vw,32px)] font-medium text-white mb-4 md:mb-6 leading-[1.2] tracking-[-0.1px]"
                                data-node-id={issue.titleNodeId}
                            >
                                {issue.title}
                            </h3>

                            {/* Issue Description */}
                            <p
                                className="font-body text-[18px] font-normal text-white leading-[29px] tracking-[-0.1px]"
                                data-node-id={issue.descriptionNodeId}
                            >
                                {issue.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
