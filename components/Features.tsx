import React from "react";

const featuresData = [
    {
        id: "01",
        title: "Photorealistic Virtual Try-On",
        description:
            "See exactly how clothes will look on your body. Tuck renders high-fidelity visuals that match real-world appearance, so customers get what they see.",
    },
    {
        id: "02",
        title: "Body Adaptive Geometry",
        description:
            "Every body is unique. Tuck maps individual body shapes and proportions, ensuring fit predictions are personalized and accurate for each customer.",
    },
    {
        id: "03",
        title: "Realistic Fabric Behavior",
        description:
            "Fabrics drape, stretch, and move differently. Our simulation captures how materials actually behave on the body—no more surprises at checkout.",
    },
    {
        id: "04",
        title: "Texture & Lighting Accuracy",
        description:
            "Details matter. Precise texture rendering and dynamic lighting show how colors, patterns, and finishes truly appear in-store and at home.",
    },
];

export default function Features() {
    return (
        <section className="bg-white text-black w-full">
            <div className="py-20 px-6 lg:px-[93px] max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <span className="font-body text-[20px] font-semibold text-[#03c] mb-4 block tracking-[-0.1px]">
                        Features
                    </span>
                    <h2 className="font-heading text-[56px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-1.5px]">
                        Tuck Try-Ons. <br />
                        Obvious Fit.
                    </h2>
                </div>

                {/* Grid Container */}
                <div className="border border-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black">
                        {featuresData.map((feature) => (
                            <div key={feature.id} className="flex flex-col h-full bg-white relative group">
                                {/* Image Placeholder Area */}
                                <div className="w-full h-[240px] bg-white border-b border-black relative">
                                    <div className="absolute bottom-0 left-0 bg-[#03c] text-white font-heading font-medium text-[28px] w-[90px] h-[72px] flex items-center justify-center border-t border-r border-black">
                                        {feature.id}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="font-heading text-[24px] font-bold leading-[1.2] mb-4 min-h-[58px]">
                                        {feature.title}
                                    </h3>
                                    <p className="font-body text-[16px] font-medium text-black leading-[25.2px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Full-Width Line */}
            <div className="w-full border-t border-black"></div>
        </section>
    );
}
