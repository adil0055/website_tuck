import React from "react";

const plans = [
    {
        name: "Starter",
        price: "$10.99",
        tryOns: "400 try‑ons",
        description: "For early‑stage brands",
        highlighted: false,
    },
    {
        name: "Growth",
        price: "$19.99",
        tryOns: "1000 try‑ons",
        description: "For early‑stage brands",
        highlighted: false,
    },
    {
        name: "Scale",
        price: "$35.99",
        tryOns: "2000 try‑ons",
        description: "For multi‑SKU catalogues and higher order volumes.",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        tryOns: "",
        description: "Custom try‑on volumes, SLAs, and security reviews.",
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-white py-32 md:py-40">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Section Label */}
                <p className="font-body text-[20px] font-semibold text-graphite mb-4 tracking-[-0.1px] text-center">
                    Pricing
                </p>

                <h2 className="font-heading text-5xl md:text-6xl lg:text-[68px] font-light text-graphite mb-20 text-center leading-tight">
                    Pricing that scales with you
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`border border-black rounded-none min-h-[329px] flex flex-col ${
                                plan.highlighted
                                    ? "bg-black text-white"
                                    : "bg-white text-graphite"
                            }`}
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className={`font-heading text-[24px] font-medium mb-3 leading-[1.2] ${
                                    plan.highlighted ? "text-white" : "text-graphite"
                                }`}>
                                    {plan.name}
                                </h3>

                                <div className="mb-6">
                                    <div className={`font-body text-[32px] font-medium leading-[1.2] ${
                                        plan.highlighted ? "text-white" : "text-graphite"
                                    }`}>
                                        {plan.price}
                                    </div>
                                </div>

                                {plan.tryOns && (
                                    <p className={`font-body text-[14px] font-medium mb-4 leading-[1.4] ${
                                        plan.highlighted ? "text-white" : "text-graphite"
                                    }`}>
                                        {plan.tryOns}
                                    </p>
                                )}

                                <p className={`font-body text-[14px] font-medium mb-8 leading-[1.5] flex-grow ${
                                    plan.highlighted ? "text-white/70" : "text-graphite"
                                }`}>
                                    {plan.description}
                                </p>

                                <button
                                    className={`w-full font-body font-medium px-6 py-3 text-[16px] rounded-none transition-all border border-black ${
                                        plan.highlighted
                                            ? "bg-white text-black hover:bg-white/90"
                                            : "bg-white text-black hover:bg-gray-50"
                                    }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
