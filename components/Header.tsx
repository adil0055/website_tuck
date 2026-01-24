import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import tuckLogo from "../Tuck_Primary 4.png";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-gray-200/50">
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

                {/* Navigation - Matching Figma design: 14px, #161c2d, tracking -0.1px */}
                {/* Only 3 links: Product, About, Contact */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#product" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        Product
                    </a>
                    <a href="#about" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        About
                    </a>
                    <a href="#contact" className="font-body text-[14px] font-medium text-[#161c2d] hover:text-[#161c2d]/70 transition-colors leading-[26px] tracking-[-0.1px]">
                        Contact
                    </a>
                </nav>

                {/* CTA Buttons - Matching Figma dimensions */}
                <div className="flex items-center gap-4">
                    <button className="font-body font-medium bg-white border border-gray-300 text-graphite px-6 py-2.5 rounded-none hover:bg-gray-50 transition-all text-[15px]">
                        Log In
                    </button>
                    {/* Book demo button: 135px × 42px, 13px font, -0.5px tracking */}
                    <button className="font-body font-medium bg-[#4060FF] text-white rounded-none hover:bg-[#3050EE] transition-all text-[13px] tracking-[-0.5px] w-[135px] h-[42px] flex items-center justify-center">
                        Book demo
                    </button>
                </div>
            </div>
        </header>
    );
}
