import React from "react";

const features = [
    {
        number: "01",
        title: "Photorealistic Virtual Try-On",
        description: "See exactly how clothes will look on your body. Tuck renders high-fidelity visuals that match real-world appearance, so customers get what they see.",
    },
    {
        number: "02",
        title: "Body Adaptive Geometry",
        description: "Every body is unique. Tuck maps individual body shapes and proportions, ensuring fit predictions are personalized and accurate for each customer.",
    },
    {
        number: "03",
        title: "Realistic Fabric Behavior",
        description: "Fabrics drape, stretch, and move differently. Our simulation captures how materials actually behave on the body—no more surprises at checkout.",
    },
    {
        number: "04",
        title: "Texture & Lighting Accuracy",
        description: "Details matter. Precise texture rendering and dynamic lighting show how colors, patterns, and finishes truly appear in-store and at home.",
    },
];

export default function NumberedFeatures() {
    return (
        <section className="bg-white py-32 md:py-40">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Section Label */}
                <p className="font-body text-[20px] font-semibold text-graphite mb-4 tracking-[-0.1px]">
                    Features
                </p>

                {/* Main Heading */}
                <h2 className="font-heading text-5xl md:text-6xl lg:text-[68px] font-light text-graphite mb-20 leading-tight">
                    Virtual Try‑Ons.<br />Obvious Fit.
                </h2>

                {/* Four Column Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="border border-black rounded-none p-6 min-h-[478px] flex flex-col">
                            {/* Number Badge */}
                            <div className="bg-deep-breeze-blue w-[63px] h-[54px] rounded-[8px] flex items-center justify-center mb-6">
                                <span className="font-heading text-[26px] font-medium text-white">
                                    {feature.number}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-heading text-[24px] font-semibold text-graphite mb-6 leading-[32px] tracking-[-0.1px]">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="font-body text-[15px] text-graphite leading-[25px] flex-grow">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
