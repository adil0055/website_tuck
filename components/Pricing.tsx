"use client";

import React, { useState } from "react";

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

    const plans = [
        {
            name: "Starter",
            audience: "Emerging Brands",
            volume: "Up to 1,000",
            unitPrice: billingCycle === "monthly" ? "$0.030 / gen" : "$0.025 / gen",
            price: billingCycle === "monthly" ? "30" : "25",
            period: "/ mo",
            billed: billingCycle === "annual" ? "Billed $300 upfront" : null,
            benchmark: billingCycle === "monthly" ? "$40" : "$400",
            features: [
                "Ideal for Emerging Brands",
                "1,000 try-ons / month",
                billingCycle === "monthly" ? "$0.030 per try-on" : "$0.025 per try-on",
            ],
            buttonText: "Start Building",
            highlighted: false,
            badge: billingCycle === "annual" ? "Save $60" : null,
        },
        {
            name: "Growth",
            audience: "Growth Retailers",
            volume: "Up to 10,000",
            unitPrice: billingCycle === "monthly" ? "$0.028 / gen" : "$0.022 / gen",
            price: billingCycle === "monthly" ? "280" : "220",
            period: "/ mo",
            billed: billingCycle === "annual" ? "Billed $2,640 upfront" : null,
            benchmark: billingCycle === "monthly" ? "$400" : "$4,000",
            features: [
                "Ideal for Growth Retailers",
                "10,000 try-ons / month",
                billingCycle === "monthly" ? "$0.028 per try-on" : "$0.022 per try-on",
            ],
            buttonText: "Upgrade Now",
            highlighted: false,
            badge: billingCycle === "annual" ? "Save $720" : null,
        },
        {
            name: "Scale",
            audience: "Established Chains",
            volume: "Up to 30,000",
            unitPrice: billingCycle === "monthly" ? "$0.026 / gen" : "$0.021 / gen",
            price: billingCycle === "monthly" ? "780" : "630",
            period: "/ mo",
            billed: billingCycle === "annual" ? "Billed $7,560 upfront" : null,
            benchmark: billingCycle === "monthly" ? "$1,200" : "$12,000",
            features: [
                "Ideal for Established Chains",
                "30,000 try-ons / month",
                billingCycle === "monthly" ? "$0.026 per try-on" : "$0.021 per try-on",
            ],
            buttonText: "Go High Volume",
            highlighted: true,
            bestValue: true,
            badge: billingCycle === "annual" ? "Save $1,800" : (billingCycle === "monthly" ? "Best value" : null),
        },
    ];

    return (
        <section id="pricing" className="bg-white py-24 px-6 lg:px-[93px]">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-heading text-[#0033cc] font-medium text-[16px] mb-4 block">
                        Pricing
                    </span>
                    <h2 className="font-heading text-[48px] lg:text-[56px] font-bold text-black mb-8 leading-[1.1]">
                        Pricing that scales with you
                    </h2>

                    {/* Toggle */}
                    <div className="flex justify-center">
                        <div className="bg-[#0033cc] p-2 rounded-full flex relative isolate">
                            {/* Sliding Pill Background */}
                            <div
                                className={`absolute left-2 top-2 bottom-2 w-32 bg-white rounded-full shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${billingCycle === "annual" ? "translate-x-full" : "translate-x-0"
                                    }`}
                            ></div>

                            <button
                                onClick={() => setBillingCycle("monthly")}
                                className={`w-32 py-2.5 rounded-full font-body text-[12px] font-bold z-10 transition-colors duration-300 ${billingCycle === "monthly"
                                    ? "text-black"
                                    : "text-white"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle("annual")}
                                className={`w-32 py-2.5 rounded-full font-body text-[12px] font-bold z-10 transition-colors duration-300 ${billingCycle === "annual"
                                    ? "text-black"
                                    : "text-white"
                                    }`}
                            >
                                Annual
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="flex flex-wrap justify-center gap-12 items-start mt-12">
                    {plans.map((plan, index) => {
                        const isScale = plan.highlighted;
                        return (
                            <div
                                key={index}
                                className={`relative border border-black p-6 flex flex-col ${isScale ? "bg-black text-white" : "bg-white text-black"}`}
                                style={{ width: '292px', height: '380px' }}
                            >
                                {plan.badge && (
                                    <div className="absolute top-0 right-0 bg-[#0033cc] text-white text-[12px] font-medium px-4 py-2">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="flex items-center gap-4 mb-2">
                                    <h3
                                        className={`font-heading text-[24px] font-medium leading-[120%] ${isScale ? "text-white" : "text-black"}`}
                                    >
                                        {plan.name}
                                    </h3>
                                </div>

                                <div className="flex flex-col mb-4">
                                    <div className="flex items-end gap-1">
                                        <span className={`font-inter text-[32px] font-medium leading-[100%] ${isScale ? "text-white" : "text-black"}`}>
                                            ${plan.price}
                                        </span>
                                        <span className={`text-[20px] font-normal mb-1 ${isScale ? "text-white" : "text-black"}`}>{plan.period}</span>
                                    </div>
                                    {plan.billed && (
                                        <div className={`text-[12px] mt-1 ${isScale ? "text-gray-300" : "text-gray-500"}`}>
                                            {plan.billed}
                                        </div>
                                    )}
                                </div>

                                {/* Market Benchmark Display */}
                                <div className={`flex items-center gap-2 mb-4 text-[14px] ${isScale ? "text-gray-300" : "text-gray-500"}`}>
                                    <span>Market Benchmark:</span>
                                    <span className="line-through decoration-red-500 decoration-2">{plan.benchmark}</span>
                                </div>

                                <ul className="space-y-1 mb-8 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className={`font-inter text-[14px] font-medium leading-[140%] ${isScale ? "text-white" : "text-black"}`}
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex justify-center w-full">
                                    <button
                                        className={`flex items-center justify-center gap-2 border text-[16px] font-medium leading-[150%] transition-colors font-inter w-full lg:w-[243px] h-[40px] px-[18px] ${isScale
                                            ? "bg-white text-black border-white hover:bg-gray-200"
                                            : "bg-transparent text-black border-black hover:bg-black hover:text-white"
                                            }`}
                                        style={{}}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    {/* Enterprise Card */}
                    <div
                        className="relative border border-black p-6 flex flex-col bg-white text-black"
                        style={{ width: '292px', height: '380px' }}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <h3 className="font-heading text-[24px] font-medium leading-[120%] text-black">Enterprise</h3>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="font-inter text-[32px] font-medium leading-[120%] text-black">Custom</h2>
                        </div>

                        {/* Placeholder for alignment sake */}
                        <div className="flex items-center gap-2 mb-4 text-[14px] text-gray-500 invisible">
                            <span>Market Benchmark: --</span>
                        </div>

                        <ul className="space-y-1 mb-8 flex-1">
                            <li className="font-inter text-[14px] font-medium leading-[140%] text-black">Ideal for Large Enterprises</li>
                            <li className="font-inter text-[14px] font-medium leading-[140%] text-black">30,000+ try-ons</li>
                            <li className="font-inter text-[14px] font-medium leading-[140%] text-black">Custom pricing</li>
                            <li className="font-inter text-[14px] font-medium leading-[140%] text-black">Volume discounts</li>
                            <li className="font-inter text-[14px] font-medium leading-[140%] text-black">Dedicated support & deployment</li>
                        </ul>

                        <div className="flex justify-center w-full">
                            <button
                                className="flex items-center justify-center gap-2 border text-[16px] font-medium leading-[150%] transition-colors font-inter bg-transparent text-black border-black hover:bg-black hover:text-white w-full lg:w-[243px] h-[40px] px-[18px]"
                                style={{}}
                            >
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
