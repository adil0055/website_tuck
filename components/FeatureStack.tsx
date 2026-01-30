"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- Constants (matching transform9 behavior) ---
const CARD_HEIGHT = 60; // Card height in pixels
const CARD_WIDTH = "90%"; // Card max width in percentage
const INACTIVE_Y_OFFSET = -30;
const SCALE_WHEN_COVERED = 0.97;
const INACTIVE_BG = "rgb(180, 180, 180)";
const ACTIVE_BG = "rgb(0, 0, 0)";
const OVERLAP_THRESHOLD = 0.8;
// Removed fixed CONTENT_OFFSET_X, handled via Tailwind classes
const TOP_GAP_PERCENT = "15%"; // CONTROLS THE SPACE BETWEEN "Where Tuck Works Best" AND THE FIRST CARD
const BOTTOM_GAP_PERCENT = "0%"; // CONTROLS THE SPACE AFTER THE LAST CARD STRIP
const MAX_STACKED_CARDS = 4; // Number of cards visible in the stack behind the active card

// --- Types ---
interface Feature {
    id: string;
    index: string;
    title: string;
    subtitle: string;
    description: string;
    stat?: string;
    buttonText: string;
    linkText: string;
    anchorId: string;
}

// --- Data ---
const features: Feature[] = [
    {
        id: "01",
        index: "01",
        title: "Fashion Retail Stores",
        subtitle: "Solution – Tuck Magic Mirror",
        description:
            "Large retail formats often suffer from stockouts and messy piles of clothes. The Tuck Magic Mirror allows customers to virtually try on sizes or color variants that are currently out of stock or kept in the warehouse.",
        stat: "+18% fitting room conversion",
        buttonText: "Book a Demo",
        linkText: "Learn more",
        anchorId: "fashion-retail-stores",
    },
    {
        id: "02",
        index: "02",
        title: "E-commerce Marketplaces",
        subtitle: "Solution – Tuck API",
        description:
            "Online marketplaces struggle with inconsistent photography from thousands of sellers. Tuck unifies the experience by allowing users to try on any item from any vendor on their own photo.",
        stat: "",
        buttonText: "Book a Demo",
        linkText: "Learn more",
        anchorId: "e-commerce-marketplaces",
    },
    {
        id: "03",
        index: "03",
        title: "Single Brand Retail Stores",
        subtitle: "Solution – Tuck Magic Mirror",
        description:
            "Standalone brand outlets often have limited floor space (~500-1000 sq ft) and cannot display every SKU from the season. The Tuck Mirror acts as a digital extension of the physical store.",
        stat: "",
        buttonText: "Book a Demo",
        linkText: "Learn more",
        anchorId: "single-brand-retail-stores",
    },
    {
        id: "04",
        index: "04",
        title: "D2C Brands (Online & Offline)",
        subtitle: "Solution – Tuck API + Magic Mirror",
        description:
            "For brands that started online and are now opening pop-ups or stores, consistency is key. Use the API to boost web conversions and the Magic Mirror to capture footfall in offline activations.",
        stat: "",
        buttonText: "Book a Demo",
        linkText: "Learn more",
        anchorId: "d2c-brands",
    },
    {
        id: "05",
        index: "05",
        title: "Fast Fashion Retailers",
        subtitle: "Solution – Tuck API",
        description:
            "Fast fashion relies on volume but suffers from massive returns (30%+) due to sizing guesswork. Tuck allows Gen-Z shoppers to instantly verify the look on their own body before buying.",
        stat: "",
        buttonText: "Book a Demo",
        linkText: "Learn more",
        anchorId: "fast-fashion-retailers",
    },
    {
        id: "06",
        index: "06",
        title: "Malls, Airports & Ad-Networks",
        subtitle: "Solution – Tuck Magic Mirror",
        description:
            "Transform passive digital signage into a high-engagement \"Digital Stylist.\" Instead of ignoring static ads, passersby stop to interact with the mirror, trying on trending outfits from the mall's tenants.",
        stat: "",
        buttonText: "Book a Demo",
        linkText: "Learn more",
        anchorId: "malls-airports-ad-networks",
    },
    {
        id: "07",
        index: "07",
        title: "Luxury & Bespoke Fashion",
        subtitle: "Solution – Tuck API",
        description:
            "For made-to-measure suits or designer wear, customers hesitate to pay premium prices without seeing the final look. Tuck provides a high-fidelity visualization of the drape and cut on the customer's actual body before a single thread is sewn.",
        stat: "",
        buttonText: "Book a Demo",
        linkText: "Learn more",
        anchorId: "luxury-bespoke-fashion",
    },
];

// --- Card Component ---
const FeatureCard = ({
    feature,
    index,
    cardRef,
}: {
    feature: Feature;
    index: number;
    cardRef: (el: HTMLDivElement | null) => void;
}) => {
    return (
        <div
            ref={cardRef}
            className="scheduling-card absolute left-1/2 -translate-x-1/2 w-full p-8 md:p-12 origin-top overflow-hidden will-change-transform rounded-none bg-black"
            style={{
                maxWidth: CARD_WIDTH,
                zIndex: index + 1,
            }}
        >
            {/* Force fixed height and styles on MD+ screens to match design */}
            <style jsx>{`
                .scheduling-card {
                    height: calc(90% - ${TOP_GAP_PERCENT});
                    top: ${TOP_GAP_PERCENT};
                }
            `}</style>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full items-start text-left">

                {/* 1. Index Number */}
                <p className="font-heading text-[20px] md:text-[24px] font-normal text-white mb-6 md:mb-8">
                    {feature.index}
                </p>

                {/* 2. Title */}
                <h3 className="font-heading text-[28px] md:text-[36px] font-medium text-white leading-tight mb-6 md:mb-8">
                    {feature.title}
                </h3>

                {/* 3. Description */}
                <p className="font-body text-[16px] md:text-[18px] font-normal text-white leading-relaxed mb-8 md:mb-10 max-w-[600px]">
                    {feature.description}
                </p>

                {/* 4. Subtitle (Solution) */}
                <p className="font-heading text-[20px] md:text-[24px] font-medium text-white leading-tight mb-2">
                    {feature.subtitle}
                </p>

                {/* 5. Stat (if exists) */}
                {feature.stat && (
                    <p className="font-heading text-[16px] md:text-[18px] font-normal text-white mb-8 md:mb-10">
                        {feature.stat}
                    </p>
                )}

                {/* Spacer to push buttons to bottom or just margin? Design shows buttons after content. 
                    If we want buttons at the very bottom, we can use flex-grow or spacer. 
                    For now, following flow. */}
                <div className="flex-grow" />

                {/* 6. Buttons */}
                <div className="flex flex-row items-center gap-6 md:gap-8 mt-auto md:mt-0 pb-4 md:pb-0">
                    <Link
                        href="/contact"
                        className="font-body font-semibold bg-white text-black px-6 py-2 text-[14px] md:text-[15px] hover:bg-opacity-90 transition-all min-w-[140px] h-[45px] flex items-center justify-center rounded-none"
                    >
                        {feature.buttonText}
                    </Link>
                    <Link
                        href={`/learn-more#${feature.anchorId}`}
                        scroll={false}
                        className="font-body font-medium text-white text-[14px] md:text-[15px] hover:underline flex items-center gap-1"
                    >
                        {feature.linkText}
                        <span className="text-[12px] md:text-[14px] ml-1">↗</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---
export default function FeatureStack() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const cardsContainer = cardsContainerRef.current;
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

        if (!section || !cardsContainer || cards.length === 0) return;

        const ctx = gsap.context(() => {
            const totalCards = cards.length;

            // Each card transition takes one viewport height of scroll
            const scrollPerCard = window.innerHeight; // Reverted back to 1x
            // Add extra scroll distance to force a pause/buffer at the end
            const extraScroll = scrollPerCard;
            const totalScrollDistance = (scrollPerCard * (totalCards - 1)) + extraScroll;

            // Set initial state: all cards start at the same position
            // Card 1 is visible, others are hidden below (via translateY)
            cards.forEach((card, i) => {
                gsap.set(card, {
                    y: i === 0 ? 0 : window.innerHeight, // First card visible, others below viewport initially
                    scale: 1,
                    backgroundColor: ACTIVE_BG,
                    zIndex: i + 1,
                });
            });

            // Create the main ScrollTrigger for the entire section
            ScrollTrigger.create({
                trigger: cardsContainer,
                start: "top top",
                end: `+=${totalScrollDistance}`,
                pin: cardsContainer,
                anticipatePin: 1, // Helps avoid the small jerk when pinning starts
                scrub: 0.5, // Smooth scrubbing
                snap: {
                    snapTo: 1 / totalCards, // Snap to each card index correctly (based on total scroll distance calculation)
                    directional: true,
                    duration: { min: 0.4, max: 0.8 },
                    delay: 0,
                    ease: "power1.inOut",
                },
                onUpdate: (self) => {
                    const scrollProgress = self.progress;
                    const maxIndex = totalCards - 1;
                    const rawScrollPos = scrollProgress * (maxIndex + (extraScroll / scrollPerCard));
                    const scrollPos = Math.min(rawScrollPos, maxIndex);

                    const activeIndex = Math.floor(scrollPos);

                    cards.forEach((card, i) => {
                        const relativePos = i - scrollPos;

                        // --- UPCOMING CARDS (i > scrollPos) ---
                        if (relativePos > 0) {
                            if (relativePos <= 1) {
                                const entryProgress = 1 - relativePos;
                                const yPos = (1 - entryProgress) * window.innerHeight;

                                gsap.set(card, {
                                    y: yPos,
                                    scale: 1,
                                    zIndex: 100 + i,
                                    opacity: 1,
                                    backgroundColor: ACTIVE_BG,
                                    pointerEvents: "auto",
                                });
                            } else {
                                gsap.set(card, {
                                    y: window.innerHeight,
                                    opacity: 0,
                                    pointerEvents: "none"
                                });
                            }
                        }

                        // --- STACKED/ACTIVE CARDS (i <= scrollPos) ---
                        else {
                            const depth = -relativePos;
                            const Y_OFFSET_PER_LEVEL = 12;
                            const SCALE_OFFSET_PER_LEVEL = 0.05;

                            // Limit how many cards are visible in the stack physically (y-offset)
                            const visibleDepth = Math.min(depth, MAX_STACKED_CARDS);

                            // Fade out cards as they approach the max stack limit
                            // Cards start fading out 1 level before the limit
                            const fadeStart = Math.max(0, MAX_STACKED_CARDS - 1);
                            const opacity = Math.max(0, 1 - (Math.max(0, depth - fadeStart)));

                            const targetY = -1 * visibleDepth * Y_OFFSET_PER_LEVEL;
                            const targetScale = 1 - (visibleDepth * SCALE_OFFSET_PER_LEVEL);

                            const rawGrey = Math.min(visibleDepth, 5) * 40;
                            const greyVal = Math.round(rawGrey);
                            const colorString = `rgb(${greyVal}, ${greyVal}, ${greyVal})`;

                            gsap.set(card, {
                                y: targetY,
                                scale: targetScale,
                                zIndex: 100 - Math.round(depth),
                                backgroundColor: colorString,
                                opacity: opacity,
                                pointerEvents: depth > 0.5 ? "none" : "auto",
                                display: opacity <= 0.01 ? "none" : "block" // Hide only when fully transparent
                            });
                        }
                    });
                },
            });
        }, section);

        // Cleanup on unmount
        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-[#F5F7F9]">
            {/* Header Section (scrolls normally before pin) */}
            <div className="max-w-[1440px] px-6 lg:px-[93px] pt-6">
                <p className="font-body text-[20px] font-semibold text-[#03c] mb-6 tracking-[-0.1px]">
                    Use Cases
                </p>
                <h2 className="font-heading text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-black leading-[1.1] tracking-[-0.1px]">
                    Where Tuck<br />Works Best
                </h2>
            </div>

            {/* Cards Container - This gets pinned */}
            <div
                ref={cardsContainerRef}
                className="scheduling-cards relative w-full flex items-center justify-center overflow-visible h-[100vh] px-4 md:px-0"
            >
                {features.map((feature, i) => (
                    <FeatureCard
                        key={feature.id}
                        feature={feature}
                        index={i}
                        cardRef={(el) => {
                            cardRefs.current[i] = el;
                        }}
                    />
                ))}
            </div>

            {/* Spacer after pin */}
            {/* Spacer after pin */}
            <div style={{ height: BOTTOM_GAP_PERCENT }} />
        </section>
    );
}
