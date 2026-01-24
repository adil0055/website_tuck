import React from "react";

export default function FinalCTA() {
    return (
        <section className="bg-[#0033cc] text-white py-36 md:py-44">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Headline */}
                <h2 className="font-heading text-[40px] font-semibold mb-6 leading-[43px] tracking-[-0.1px] max-w-4xl">
                    Size returns. Dead stock. Lost sales.
                </h2>

                <p className="font-body text-[20px] font-medium text-white mb-12 max-w-3xl leading-[31px] tracking-[-0.1px]">
                    Tuck's kiosk solves all three. Reduce returns by 22%, convert more browsers, and maximize your inventory ROI.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-5">
                    <button className="font-body font-semibold bg-white text-[#0033cc] px-8 py-3 text-[15px] rounded-none hover:bg-white/95 transition-all tracking-[-0.5px]">
                        Book Demo
                    </button>
                    <button className="font-body font-medium border border-white text-white px-8 py-3 text-[15px] rounded-none hover:bg-white hover:text-[#0033cc] transition-all tracking-[-0.5px]">
                        Talk to sales
                    </button>
                </div>
            </div>
        </section>
    );
}
