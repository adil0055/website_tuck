"use client";

import React from "react";

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

            {/* Decorative Blur Ellipses - Group 228 (node 40:911) */}
            {/* Positioned behind grid and content */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                {/* Ellipse 25 - Blue blur top-center-right (40:912) */}
                <div
                    className="absolute rounded-full"
                    style={{
                        left: '71.5%',
                        top: '29%',
                        width: '14.5vw',
                        height: '10.5vw',
                        background: '#407BFF',
                        filter: 'blur(7vw)',
                        backdropFilter: 'blur(0.25px)',
                        animation: 'float-ellipse-25 4s ease-in-out infinite',
                    }}
                />

                {/* Ellipse 21 - Gray blur top-right (40:913) */}
                <div
                    className="absolute rounded-full"
                    style={{
                        left: '96.8%',
                        top: '43.3%',
                        width: '22.8vw',
                        height: '18vw',
                        background: '#838383',
                        filter: 'blur(7vw)',
                        backdropFilter: 'blur(0.25px)',
                        animation: 'float-ellipse-21 4s ease-in-out infinite',
                        animationDelay: '1s',
                    }}
                />

                {/* Ellipse 20 - Gray blur bottom-left (40:914) */}
                <div
                    className="absolute rounded-full"
                    style={{
                        left: '-14%',
                        top: '56%',
                        width: '22.8vw',
                        height: '18vw',
                        background: '#838383',
                        filter: 'blur(7vw)',
                        backdropFilter: 'blur(0.25px)',
                        animation: 'float-ellipse-20 4s ease-in-out infinite',
                        animationDelay: '2s',
                    }}
                />

                {/* Ellipse 24 - Blue blur bottom-left (40:915) */}
                <div
                    className="absolute rounded-full"
                    style={{
                        left: '-9.7%',
                        top: '92.3%',
                        width: '22.8vw',
                        height: '18vw',
                        background: '#407BFF',
                        filter: 'blur(7vw)',
                        backdropFilter: 'blur(0.25px)',
                        animation: 'float-ellipse-24 4s ease-in-out infinite',
                        animationDelay: '3s',
                    }}
                />
            </div>

            {/* Responsive Grid Background using CSS Grid */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(4.4vw, 63px), 1fr))',
                    gridAutoRows: 'minmax(min(3.6vw, 52px), auto)',
                    gap: '0',
                }}
            >
                {/* Generate grid cells dynamically based on viewport */}
                {Array.from({ length: 300 }).map((_, index) => (
                    <div
                        key={`cell-${index}`}
                        className="relative w-full h-full"
                    >
                        {/* Backdrop blur gradient effect from Figma Base component */}
                        <div
                            className="absolute inset-0 mix-blend-overlay"
                            style={{
                                backdropFilter: 'blur(3.5vw)',
                                background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(59,59,59,0.2) 16.667%, rgba(255,255,255,0) 100%)',
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center w-full py-20">
                {/* Headline - 2 lines, matching Figma design exactly */}
                {/* Node 32:948 - 72px, Host Grotesk Bold, center-aligned, -0.1px tracking */}
                <h1 className="font-heading text-[clamp(36px,5vw,72px)] font-bold text-[#323135] mb-5 md:mb-7 leading-[1.11] tracking-[-0.1px] text-center max-w-[825px] mx-auto">
                    The most realistic virtual<br />
                    fitting room ever built.
                </h1>

                {/* Subheading - Node 32:949 */}
                {/* 21.5px, Host Grotesk Bold, #323135, line-height 26px, tracking -0.1px, center-aligned */}
                <p className="font-heading text-[clamp(16px,1.5vw,21.5px)] font-bold text-[#323135] mb-8 md:mb-10 max-w-[825px] mx-auto leading-[1.21] tracking-[-0.1px] text-center px-4">
                    Cut Size-Related Returns by 30% With Try-On That Actually Fits.
                </p>

                {/* Buttons - Frame 50 at y=474 */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[18px]">
                    {/* Book demo button - Rectangle 4214 (32:951) + Text (32:954) */}
                    {/* 132px × 42px, blue bg, white text, 17px Figtree Bold, -0.5px tracking */}
                    <button
                        className="font-body font-bold bg-[#4060FF] text-white text-[17px] tracking-[-0.5px] rounded-[2px] hover:bg-[#3050EE] transition-all w-full sm:w-[132px] h-[42px] flex items-center justify-center leading-normal"
                        data-node-id="32:954"
                    >
                        Book demo
                    </button>
                    {/* Learn More button - Rectangle 4215 (32:952) + Text (32:953) */}
                    {/* 132px × 42px, white bg, gray border, 14px text, -0.5px tracking */}
                    <button
                        className="font-body font-bold border border-[#E5E7EB] text-[rgba(0,0,0,0.56)] text-[14px] tracking-[-0.5px] rounded-[2px] hover:bg-gray-50 transition-all bg-white w-full sm:w-[132px] h-[42px] flex items-center justify-center leading-normal"
                        data-node-id="32:953"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
