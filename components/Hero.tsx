"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center">
            {/* CSS Keyframes for ellipse animations */}
            <style jsx>{`
                @keyframes float-ellipse-25 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(8vw, -4vw);
                    }
                }
                
                @keyframes float-ellipse-21 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(-5.5vw, 5.5vw);
                    }
                }
                
                @keyframes float-ellipse-20 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(7vw, -5vw);
                    }
                }
                
                @keyframes float-ellipse-24 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(-6vw, 3.5vw);
                    }
                }
            `}</style>

            {/* Background Image - Desktop */}
            <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
                <Image
                    src="/hero-bg-desktop-17.png"
                    alt="Hero Background Desktop"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
            </div>

            {/* Background Image - Mobile */}
            <div className="block md:hidden absolute inset-0 w-full h-full pointer-events-none z-0">
                <Image
                    src="/hero-bg-mobile.png"
                    alt="Hero Background Mobile"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
            </div>

            {/* Decorative Blur Ellipses - Removed as per new design request using full background image */}
            {/* <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                ... (Ellipses removed/hidden)
            </div> */}

            {/* Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center w-full py-20">
                {/* Headline - 2 lines, matching Figma design exactly */}
                {/* Node 32:948 - 72px, Host Grotesk Bold, center-aligned, -0.1px tracking */}
                <h1 className="font-heading text-[clamp(40px,5.5vw,80px)] font-bold text-[#323135] mb-5 md:mb-7 leading-[1.11] tracking-[-0.1px] text-center max-w-[950px] mx-auto">
                    The most realistic virtual<br />
                    fitting room ever built.
                </h1>

                {/* Subheading - Node 32:949 */}
                {/* 21.5px, Host Grotesk Bold, #323135, line-height 26px, tracking -0.1px, center-aligned */}
                <p className="font-heading text-[clamp(16px,1.5vw,21.5px)] font-bold text-[#323135] mb-8 md:mb-10 max-w-[825px] mx-auto leading-[1.21] tracking-[-0.1px] text-center px-4">
                    Technology designed to standardize fit, confidence, and conversion
                </p>

                {/* Buttons - Frame 50 at y=474 */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[18px]">
                    {/* Book demo button - Rectangle 4214 (32:951) + Text (32:954) */}
                    {/* 132px × 42px, blue bg, white text, 17px Figtree Bold, -0.5px tracking */}
                    <Link
                        href="/contact"
                        className="font-body font-bold bg-[#2057F3] text-white text-[15px] sm:text-[17px] tracking-[-0.5px] rounded-none hover:bg-[#1047E3] transition-all w-full sm:w-[135px] min-h-[42px] h-auto py-2 flex items-center justify-center leading-normal"
                        data-node-id="32:954"
                    >
                        Book demo
                    </Link>
                    {/* Learn More button - Rectangle 4215 (32:952) + Text (32:953) */}
                    {/* 132px × 42px, white bg, gray border, 14px text, -0.5px tracking */}
                    <Link
                        href="/learn-more"
                        scroll={false}
                        className="font-body font-bold border border-[rgba(0,0,0,0.54)] text-[rgba(0,0,0,0.54)] text-[14px] tracking-[-0.5px] rounded-none hover:bg-gray-50 transition-all bg-white w-full sm:w-[132px] h-[42px] flex items-center justify-center leading-normal"
                        data-node-id="32:953"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
