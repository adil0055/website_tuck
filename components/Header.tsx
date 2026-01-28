"use client";

import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import tuckLogo from "../Tuck_Primary 4.png";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show if at the top or scrolling up
            if (currentScrollY === 0 || currentScrollY < lastScrollY.current) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Hide if scrolling down and past 100px
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">
                {/* Logo - Tuck_Primary 4.png */}
                <Link href="/" className="relative h-[45px] w-[105px]">
                    <Image
                        src={tuckLogo}
                        alt="tuck"
                        width={105}
                        height={45}
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#product" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        Product
                    </Link>
                    <Link href="/#pricing" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        Pricing
                    </Link>
                    <Link href="/about" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        About
                    </Link>
                    <Link href="/contact" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        Contact
                    </Link>
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
                    <Link href="/contact" className="font-body font-medium bg-[#2057F3] text-white rounded-none hover:bg-[#1047E3] transition-all text-[13px] tracking-[-0.5px] w-[135px] h-[42px] flex items-center justify-center">
                        Book demo
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200/50 shadow-lg px-8 py-6 flex flex-col gap-6">
                    <nav className="flex flex-col gap-4">
                        <Link href="/#product" className="font-body text-[16px] font-medium text-[#161c2d]" onClick={() => setIsMobileMenuOpen(false)}>Product</Link>
                        <Link href="/#pricing" className="font-body text-[16px] font-medium text-[#161c2d]" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                        <Link href="/about" className="font-body text-[16px] font-medium text-[#161c2d]" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        <Link href="/contact" className="font-body text-[16px] font-medium text-[#161c2d]" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </nav>
                    <div className="flex flex-col gap-3">
                        <Link href="/contact" className="font-body font-medium bg-[#2057F3] text-white rounded-none hover:bg-[#1047E3] transition-all text-[15px] tracking-[-0.5px] py-3 flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                            Book demo
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
