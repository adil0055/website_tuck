"use client";

import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import tuckLogo from "../Tuck_Primary 4.png";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
            <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">
                {/* Logo - Tuck_Primary 4.png */}
                <div className="relative h-[45px] w-[105px]">
                    <Image
                        src={tuckLogo}
                        alt="tuck"
                        width={105}
                        height={45}
                        priority
                        className="object-contain"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#product" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        Product
                    </a>
                    <a href="#pricing" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        Pricing
                    </a>
                    <a href="#about" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        About
                    </a>
                    <a href="#contact" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-black"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        // X Icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        // Menu Icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>

                {/* CTA Buttons - Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="font-body font-medium bg-[#2057F3] text-white rounded-none hover:bg-[#1047E3] transition-all text-[13px] tracking-[-0.5px] w-[135px] h-[42px] flex items-center justify-center">
                        Book demo
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200/50 shadow-lg px-8 py-6 flex flex-col gap-6">
                    <nav className="flex flex-col gap-4">
                        <a href="#product" className="font-body text-[16px] font-medium text-[#161c2d]" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
                        <a href="#pricing" className="font-body text-[16px] font-medium text-[#161c2d]" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                        <a href="#about" className="font-body text-[16px] font-medium text-[#161c2d]" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                        <a href="#contact" className="font-body text-[16px] font-medium text-[#161c2d]" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                    </nav>
                    <div className="flex flex-col gap-3">
                        <button className="font-body font-medium bg-[#2057F3] text-white rounded-none hover:bg-[#1047E3] transition-all text-[15px] tracking-[-0.5px] py-3 flex items-center justify-center">
                            Book demo
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
