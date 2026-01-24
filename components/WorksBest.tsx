import React from "react";

export default function WorksBest() {
    return (
        <section className="bg-[#0a0a0a] text-white py-32 md:py-40 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Section Label */}
                <p className="font-body text-[14px] font-semibold text-white mb-4 tracking-[-0.1px]">
                    Use Cases
                </p>

                {/* Main Heading */}
                <h2 className="font-heading text-5xl md:text-6xl lg:text-[68px] font-light text-white mb-20 leading-tight">
                    Where Tuck<br />Works Best
                </h2>
            </div>

            {/* Stacked Cards Effect - Exact dimensions from 1440px canvas */}
            {/* Full width container for cards to match Figma positioning */}
            <div className="relative max-w-[1440px] mx-auto" style={{ height: '546px' }}>
                {/* Background Cards - creating depth with exact offsets from Figma */}
                {/* Card 1 - Lightest gray (furthest back): left-[133px] w-[1169px] */}
                <div className="absolute top-0 left-[133px] w-[1169px] h-[546px] bg-[#dededf] rounded-[12px]" />
                {/* Card 2 - Medium gray: left-[113px] w-[1210px] */}
                <div className="absolute top-[19px] left-[113px] w-[1210px] h-[546px] bg-[#b6b5bc] rounded-[12px]" />
                {/* Card 3 - Darker gray: left-[94px] w-[1255px] */}
                <div className="absolute top-[39px] left-[94px] w-[1255px] h-[546px] bg-[#817f8c] rounded-[12px]" />

                {/* Main Card - Black: left-[69px] w-[1301px] h-[546px] */}
                <div className="absolute top-[59px] left-[69px] w-[1301px] h-[546px] bg-black text-white rounded-[12px] p-14 md:p-20 shadow-xl">
                        <div className="relative h-full flex flex-col">
                            {/* Number Badge - "O4" positioned at left-[107px] from canvas, but relative to card at left-[69px], so left-[38px] */}
                            <div className="font-heading text-[32px] font-normal text-white mb-8 leading-[66px]" style={{ marginLeft: '38px' }}>
                                O4
                            </div>

                            {/* Fashion Retail Stores - left-[442px] from canvas, relative to card: left-[373px] */}
                            <h3 className="font-heading text-[32px] font-medium text-white mb-4 leading-[66px]" style={{ marginLeft: '373px' }}>
                                Fashion Retail Stores
                            </h3>

                            {/* Solution - Tuck Magic Mirror - left-[442px] from canvas */}
                            <p className="font-heading text-[28px] font-normal text-white mb-6 leading-[66px]" style={{ marginLeft: '373px' }}>
                                Solution - Tuck Magic Mirror
                            </p>

                            {/* +18% fitting room conversion - left-[442px] from canvas */}
                            <p className="font-heading text-[16px] font-normal text-white mb-8 leading-[66px]" style={{ marginLeft: '373px' }}>
                                +18% fitting room conversion
                            </p>

                            {/* Description - left-[442px] w-[689px] from canvas */}
                            <p className="font-body text-[22px] text-white mb-10 leading-[28px] tracking-[-0.1px]" style={{ marginLeft: '373px', width: '689px' }}>
                                Large retail formats often suffer from stockouts and messy piles of clothes. The Tuck Kiosk allows customers to virtually try on sizes or color variants that are currently out of stock or kept in the warehouse.
                            </p>

                            {/* Buttons - left-[442px] from canvas */}
                            <div className="flex items-center gap-3" style={{ marginLeft: '373px' }}>
                                <button className="font-body font-semibold bg-white text-black px-6 py-2 text-[15px] rounded-none hover:bg-white/90 transition-all h-[34px] flex items-center">
                                    Book a Demo
                                </button>
                                <button className="font-body font-medium text-white px-6 py-2 text-[15px] rounded-none hover:bg-white/10 transition-all h-[34px] flex items-center">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
