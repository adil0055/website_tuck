import React from "react";

export default function VisualTryOns() {
    // Grid configuration for the left side pattern
    const squareSize = 52;
    const gridWidth = 479;
    const gridHeight = 766;
    const cols = Math.ceil(gridWidth / squareSize);
    const rows = Math.ceil(gridHeight / squareSize);

    const generateSquares = () => {
        const squares = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * squareSize;
                const y = row * squareSize;
                const xRatio = col / cols;
                const yRatio = row / rows;

                // Create subtle grid pattern
                if ((row * col) % 3 === 0) {
                    squares.push(
                        <rect
                            key={`${row}-${col}`}
                            x={x}
                            y={y}
                            width={squareSize}
                            height={squareSize}
                            fill="#F4F4F5"
                            opacity={0.1}
                        />
                    );
                }
            }
        }
        return squares;
    };

    return (
        <section className="bg-white py-32 md:py-40 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Section Label */}
                <p className="font-body text-[20px] font-semibold text-graphite mb-4 tracking-[-0.1px]">
                    Tuck solutions
                </p>

                {/* Main Heading */}
                <h2 className="font-heading text-[48px] font-extrabold text-graphite mb-20 leading-[61px] tracking-[-0.1px]">
                    Virtual Try‑Ons.<br />Obvious Fit.
                </h2>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-[479px_1fr] gap-0 relative">
                    {/* Left Side - Grid Pattern */}
                    <div className="relative h-[766px] bg-white">
                        <svg
                            className="absolute inset-0 w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ pointerEvents: 'none' }}
                        >
                            {generateSquares()}
                        </svg>
                        {/* Vertical divider line */}
                        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-200" />
                    </div>

                    {/* Right Side - Two Solutions */}
                    <div className="relative">
                        {/* Vertical Blue Bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-[248px] bg-[#0033cc]" />

                        {/* Solution 01 - Tuck API */}
                        <div className="relative pl-[288px] pr-8 pt-[197px] pb-8">
                            <div className="absolute left-[217px] top-[197px]">
                                <div className="font-heading text-[40px] font-medium text-white leading-[25.2px]">
                                    01
                                </div>
                            </div>

                            <h3 className="font-heading text-[32px] font-semibold text-graphite mb-4 leading-[61px] tracking-[-0.1px]">
                                Tuck API
                            </h3>

                            <p className="font-heading text-[15px] font-bold text-graphite mb-3 leading-[25.2px]">
                                For ecommerce brands losing carts to size doubt
                            </p>

                            <p className="font-body text-[17px] font-medium text-graphite mb-6 leading-[25.2px]">
                                Tuck's virtual try-on plugin lets shoppers see outfits on themselves right on the product page, turning size doubt into higher conversions and fewer returns.
                            </p>

                            <div className="flex items-center gap-3">
                                <button className="font-body font-semibold bg-black text-white px-6 py-2 text-[15px] rounded-none hover:bg-black/90 transition-all h-[34px] flex items-center">
                                    Book a Demo
                                </button>
                                <button className="font-body font-medium text-graphite px-6 py-2 text-[15px] rounded-none hover:bg-gray-50 transition-all h-[34px] flex items-center">
                                    Learn more
                                </button>
                            </div>
                        </div>

                        {/* Horizontal divider line */}
                        <div className="absolute left-0 right-0 top-[456px] h-[2px] bg-gray-200" />

                        {/* Solution 02 - Tuck Kiosk */}
                        <div className="relative pl-[288px] pr-8 pt-[197px] pb-8">
                            <div className="absolute left-[216px] top-[197px]">
                                <div className="font-heading text-[40px] font-medium text-white leading-[25.2px]">
                                    02
                                </div>
                            </div>

                            <h3 className="font-heading text-[32px] font-semibold text-graphite mb-4 leading-[61px] tracking-[-0.1px]">
                                Tuck Kiosk
                            </h3>

                            <p className="font-heading text-[15px] font-bold text-graphite mb-3 leading-[25.2px]">
                                For retailers losing inventory to wrong fits and style mismatches
                            </p>

                            <p className="font-body text-[17px] font-medium text-graphite mb-6 leading-[25.2px]">
                                Tuck's in-store kiosk helps customers find pieces that fit and suit them before purchase. Fewer returns, less dead stock, and higher confidence at checkout—turning inventory into revenue.
                            </p>

                            <div className="flex items-center gap-3">
                                <button className="font-body font-semibold bg-black text-white px-6 py-2 text-[15px] rounded-none hover:bg-black/90 transition-all h-[34px] flex items-center">
                                    Book a Demo
                                </button>
                                <button className="font-body font-medium text-graphite px-6 py-2 text-[15px] rounded-none hover:bg-gray-50 transition-all h-[34px] flex items-center">
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
