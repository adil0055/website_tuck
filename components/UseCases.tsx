import React from "react";
import Link from "next/link";

export default function UseCases() {
    return (
        <section className="bg-white py-16 md:py-20 lg:py-24" data-node-id="40:1356">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-[93px]">
                {/* Section Label */}
                <p
                    className="font-body text-[20px] font-semibold text-[#03c] mb-6 tracking-[-0.1px] leading-[61px]"
                    data-node-id="40:1354"
                >
                    Use Cases
                </p>

                {/* Main Heading */}
                <h2
                    className="font-heading text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-graphite mb-12 lg:mb-16 leading-[66px] tracking-[-0.1px]"
                    data-node-id="40:1355"
                >
                    Where Tuck<br />Works Best
                </h2>

                {/* Stacked Cards Container */}
                <div className="relative w-full max-w-[1301px]">
                    {/* Background Cards - Stacked Effect */}
                    <div
                        className="absolute top-0 left-[64px] w-[calc(100%-64px)] h-[546px] bg-[#dededf] rounded-[8px]"
                        data-node-id="40:1357"
                    ></div>
                    <div
                        className="absolute top-[19px] left-[44px] w-[calc(100%-44px)] h-[546px] bg-[#b6b5bc] rounded-[8px]"
                        data-node-id="40:1358"
                    ></div>
                    <div
                        className="absolute top-[39px] left-[25px] w-[calc(100%-25px)] h-[546px] bg-[#817f8c] rounded-[8px]"
                        data-node-id="40:1359"
                    ></div>

                    {/* Front Card - Black with Content */}
                    <div
                        className="relative bg-black text-white p-8 lg:p-12 rounded-[8px] h-[546px] flex flex-col justify-between"
                        style={{ marginTop: '59px' }}
                        data-node-id="40:1360"
                    >
                        {/* Card Number */}
                        <div
                            className="font-heading text-[32px] font-normal leading-[66px] mb-4"
                            data-node-id="40:1361"
                        >
                            04
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col justify-start lg:pl-[373px]">
                            {/* Title */}
                            <h3
                                className="font-heading text-[28px] lg:text-[32px] font-medium leading-[66px] mb-2"
                                data-node-id="40:1362"
                            >
                                Fashion Retail Stores
                            </h3>

                            {/* Solution Tag */}
                            <p
                                className="font-heading text-[24px] lg:text-[28px] font-normal leading-[66px] mb-8"
                                data-node-id="40:1364"
                            >
                                Solution - Tuck Magic Mirror
                            </p>

                            {/* Metric */}
                            <p
                                className="font-heading text-[16px] font-normal leading-[66px] mb-6"
                                data-node-id="40:1363"
                            >
                                +18% fitting room conversion
                            </p>

                            {/* Description */}
                            <p
                                className="font-body text-[20px] lg:text-[22px] font-normal leading-[28px] mb-8 max-w-[689px]"
                                data-node-id="40:1365"
                            >
                                Large retail formats often suffer from stockouts and messy piles of clothes. The Tuck Magic Mirror allows customers to virtually try on sizes or color variants that are currently out of stock or kept in the warehouse.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                                <Link
                                    href="/contact"
                                    className="font-body font-semibold bg-white text-black px-8 py-2 text-[15px] hover:bg-opacity-90 transition-all h-[34px] flex items-center justify-center border border-white"
                                    data-node-id="40:1368"
                                >
                                    <span data-node-id="40:1369">Book a Demo</span>
                                </Link>
                                <button
                                    className="font-body font-medium text-white text-[15px] hover:underline leading-[25.2px]"
                                    data-node-id="40:1366"
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

