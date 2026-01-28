"use client";

import React, { useState } from "react";

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

    const plans = [
        {
            name: "Starter",
            price: billingCycle === "monthly" ? "10.99" : "109.90",
            originalPrice: billingCycle === "monthly" ? "16.00" : "192.00",
            discount: billingCycle === "monthly" ? "31% OFF" : "43% OFF",
            features: billingCycle === "monthly" ? [
                "400 try-ons / month",
                "$0.027 per try-on",
                "Ideal for low-volume trials"
            ] : [
                "4800 try-ons / Year",
                "$0.023 per try-on",
                "2 months FREE",
                "Lower cost than monthly"
            ],
            buttonText: "Get Started",
            highlighted: false,
        },
        {
            name: "Growth",
            price: billingCycle === "monthly" ? "19.99" : "199.90",
            originalPrice: billingCycle === "monthly" ? "40.00" : "480.00",
            discount: billingCycle === "monthly" ? "50% OFF" : "58% OFF",
            features: billingCycle === "monthly" ? [
                "1,000 try-ons / month",
                "$0.020 per try-on",
                "Higher try-ons, better conversion"
            ] : [
                "12,000 try-ons / year",
                "$0.016 per try-on",
                "2 months FREE",
                "Strong balance of scale + savings"
            ],
            buttonText: "Get Started",
            highlighted: false,
        },
        {
            name: "Scale",
            price: billingCycle === "monthly" ? "35.99" : "359.90",
            originalPrice: billingCycle === "monthly" ? "80.00" : "960.00",
            discount: billingCycle === "monthly" ? "55% OFF" : "63% OFF",
            features: billingCycle === "monthly" ? [
                "2000 try-ons / month",
                "$0.018 per try-on",
                "Optimised for peak hours"
            ] : [
                "24,000 try-ons / Year",
                "$0.015 per try-on",
                "Best value for money",
                "Designed for large format stores"
            ],
            buttonText: "Get Started",
            highlighted: true,
            bestValue: true,
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
                        const isScale = plan.name === "Scale";
                        return (
                            <div
                                key={index}
                                className={`relative border border-black p-6 flex flex-col ${isScale ? "bg-black text-white" : "bg-white text-black"}`}
                                style={{ width: '292px', height: '329px' }}
                            >
                                {/* Introductory Pricing Tag for specific plans */}
                                {(plan.name === "Starter" || plan.name === "Growth" || isScale) && (
                                    <div className="absolute -top-[32px] left-[-1px] bg-[#0033cc] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-wide">
                                        INTRODUCTORY PRICING
                                    </div>
                                )}

                                {plan.bestValue && (
                                    <div className="absolute top-0 right-0 bg-[#0033cc] text-white text-[12px] font-medium px-4 py-2">
                                        Best value
                                    </div>
                                )}

                                <div className="flex items-center gap-4 mb-2">
                                    <h3
                                        className={`font-heading text-[24px] font-medium leading-[120%] ${isScale ? "text-white" : "text-black"}`}
                                    >
                                        {plan.name}
                                    </h3>
                                    {(billingCycle !== "annual" && (plan.name === "Starter" || plan.name === "Growth" || plan.name === "Scale")) && (
                                        <span className={`text-white text-[10px] font-medium leading-[150%] px-2 py-0.5 font-body ${isScale ? "bg-[#0033cc]" : "bg-[#0033cc]"}`}>
                                            {plan.discount}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`font-inter text-[32px] font-medium leading-[120%] ${isScale ? "text-white" : "text-black"}`}>
                                        ${plan.price}
                                    </span>
                                    <span className={`relative font-body text-[20px] font-medium leading-[120%] ${isScale ? "text-gray-400" : "text-black"}`}>
                                        ${plan.originalPrice}
                                        <span className={`absolute left-0 top-1/2 w-full h-[1px] -translate-y-1/2 ${isScale ? "bg-white" : "bg-black"}`}></span>
                                    </span>
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
                                        className={`flex items-center justify-center gap-2 border text-[16px] font-medium leading-[150%] transition-colors font-inter ${isScale
                                            ? "bg-white text-black border-white hover:bg-gray-200"
                                            : "bg-transparent text-black border-black hover:bg-black hover:text-white"
                                            }`}
                                        style={{ width: '243px', height: '40px', padding: '8px 18px' }}
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
                        style={{ width: '292px', height: '329px' }}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <h3 className="font-heading text-[24px] font-medium leading-[120%] text-black">Enterprise</h3>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="font-inter text-[32px] font-medium leading-[120%] text-black">Custom</h2>
                        </div>

                        <ul className="space-y-1 mb-8 flex-1">
                            <li className="font-inter text-[14px] font-medium leading-[140%] text-black">Custom pricing</li>
                            <li className="font-inter text-[14px] font-medium leading-[140%] text-black">Volume discounts</li>
                            <li className="font-inter text-[14px] font-medium leading-[140%] text-black">Dedicated support & deployment</li>
                        </ul>

                        <div className="flex justify-center w-full">
                            <button
                                className="flex items-center justify-center gap-2 border text-[16px] font-medium leading-[150%] transition-colors font-inter bg-transparent text-black border-black hover:bg-black hover:text-white"
                                style={{ width: '243px', height: '40px', padding: '8px 18px' }}
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
