import React from "react";
import Image from "next/image";
import Link from "next/link";
import tuckLogo from "../Tuck_Primary 4.png";

interface FooterProps {
    showCta?: boolean;
}

export default function Footer({ showCta = true }: FooterProps) {
    return (
        <footer className="w-full">
            {/* Blue CTA Section */}
            {showCta && (
                <div className="bg-[#0033cc] text-white py-20 px-6 lg:px-[93px]">
                    <div className="max-w-[1440px] mx-auto">
                        <h2 className="font-heading text-[48px] lg:text-[56px] font-bold leading-[1.1] mb-6 tracking-[-1px]">
                            Sell more by letting customers try more.
                        </h2>
                        <p className="font-body text-[18px] lg:text-[20px] leading-[1.6] mb-10 max-w-[800px] text-blue-100">
                            Trial experiences often limit how much customers can explore. Tuck helps retailers remove that friction and improve conversion.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="/contact" className="font-body font-medium bg-black text-white px-8 py-3 hover:bg-neutral-800 transition-colors text-[15px]">
                                Book Demo
                            </Link>
                            <button className="font-body font-medium bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors text-[15px]">
                                Talk to sales
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Content Spacer area (White space in screenshot) */}
            {showCta && <div className="bg-white h-4 w-full"></div>}

            {/* Black Footer Island */}
            <div className="bg-white px-2 lg:px-2 pb-2">
                <div className="w-full bg-black text-white">
                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:flex-row border-b border-white min-h-[354px]">
                        {/* Left Column: Logo & Tagline */}
                        <div className="flex-1 lg:max-w-[40%] pr-12 pl-12 py-12 flex flex-col justify-end">
                            <div className="mb-6 relative w-[140px] h-[60px]">
                                {/* Using invert filter to make the black logo white */}
                                <Image
                                    src={tuckLogo}
                                    alt="tuck"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <p className="font-body text-[14px] text-gray-400 mb-2">Powered by XPL</p>
                            <p className="font-heading text-[14px] font-normal text-white leading-[26px] tracking-[-0.1px]">AI-Powered Fashion Tech</p>
                        </div>

                        {/* Vertical Divider (Desktop only) */}
                        <div className="hidden lg:block w-[1px] bg-white self-stretch"></div>

                        {/* Right Area: Navigation Links */}
                        <div className="flex-1 flex flex-col">
                            {/* Top: Links */}
                            <div className="flex-1 p-8 lg:p-12 pl-8 lg:pl-16 grid grid-cols-2 gap-12">
                                {/* Product Column */}
                                <div>
                                    <h3 className="font-heading font-bold text-[16px] mb-6 text-white">Product</h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="font-body text-[15px] font-normal text-white leading-[26px] tracking-[-0.1px] hover:opacity-80 transition-opacity">
                                                Virtual Try On
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="font-body text-[15px] font-normal text-white leading-[26px] tracking-[-0.1px] hover:opacity-80 transition-opacity">
                                                Kiosk
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="font-body text-[15px] font-normal text-white leading-[26px] tracking-[-0.1px] hover:opacity-80 transition-opacity">
                                                API
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Company Column */}
                                <div>
                                    <h3 className="font-heading font-bold text-[16px] mb-6 text-white">Company</h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="font-body text-[15px] font-normal text-white leading-[26px] tracking-[-0.1px] hover:opacity-80 transition-opacity">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="font-body text-[15px] font-normal text-white leading-[26px] tracking-[-0.1px] hover:opacity-80 transition-opacity">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Horizontal Divider */}
                            <div className="border-t border-white"></div>

                            {/* Bottom: Legal */}
                            <div className="p-8 lg:p-12 pl-8 lg:pl-16 grid grid-cols-2 gap-12">
                                <div>
                                    <Link href="/terms-of-use" className="font-heading text-[14px] font-normal text-white leading-[26px] tracking-[-0.1px] hover:opacity-80 transition-opacity">
                                        Terms of service
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/privacy-policy" className="font-heading text-[14px] font-normal text-white leading-[26px] tracking-[-0.1px] hover:opacity-80 transition-opacity">
                                        Privacy policy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Bar */}
                    <div className="px-12 pb-8 pt-4">
                        <div className="pt-4">
                            <p className="font-heading text-[14px] font-bold text-white leading-[26px] tracking-[-0.1px]">
                                © 2024 Xapien Innovatus. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

