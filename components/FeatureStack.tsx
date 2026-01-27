"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- Constants (matching transform9 behavior) ---
const CARD_HEIGHT = 546; // Card height in pixels
const CARD_WIDTH = 1601; // Card max width in pixels
const INACTIVE_Y_OFFSET = -30;
const SCALE_WHEN_COVERED = 0.97;
const INACTIVE_BG = "rgb(180, 180, 180)";
const ACTIVE_BG = "rgb(0, 0, 0)";
const OVERLAP_THRESHOLD = 0.8;
// Removed fixed CONTENT_OFFSET_X, handled via Tailwind classes

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
}

// --- Data ---
const features: Feature[] = [
    {
        id: "01",
        index: "01",
        title: "Fashion Retail Stores",
        subtitle: "Solution – Tuck Magic Mirror",
        description:
            "Large retail formats often suffer from stockouts and messy piles of clothes. The Tuck Kiosk allows customers to virtually try on sizes or color variants that are currently out of stock or kept in the warehouse.",
        stat: "+18% fitting room conversion",
        buttonText: "Book a Demo",
        linkText: "Learn more",
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
            className="scheduling-card absolute left-1/2 -translate-x-1/2 w-full p-6 md:p-12 origin-top overflow-hidden will-change-transform rounded-xl md:rounded-none bg-black"
            style={{
                maxWidth: CARD_WIDTH,
                zIndex: index + 1,
            }}
        >
            {/* Force fixed height and styles on MD+ screens to match design */}
            <style jsx>{`
                .scheduling-card {
                    height: ${CARD_HEIGHT}px;
                    top: 0;
                }
                @media (max-width: 768px) {
                    .scheduling-card {
                        height: 580px; /* Slightly taller for mobile content if needed, or keep same */
                    }
                }
            `}</style>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between gap-6 md:gap-0">
                {/* Top Section: Index and Title/Subtitle */}
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-12">
                    {/* Index Number - Left Side */}
                    <p className="font-heading text-[24px] md:text-[32px] font-normal text-white leading-tight md:leading-[66px]">
                        {feature.index}
                    </p>

                    {/* Title and Subtitle - Center */}
                    <div className="flex-1 w-full md:ml-[370px]">
                        <h3 className="font-heading text-[24px] md:text-[32px] font-medium text-white leading-tight md:leading-[66px] mb-2">
                            {feature.title}
                        </h3>
                        <p className="font-heading text-[18px] md:text-[28px] font-normal text-white leading-tight md:leading-[66px]">
                            {feature.subtitle}
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Stat, Description, and Buttons */}
                <div className="flex-1 md:ml-[370px] md:pl-[100px] flex flex-col justify-end">
                    {/* Stat (if exists) */}
                    {feature.stat && (
                        <p className="font-heading text-[14px] md:text-[16px] font-normal text-white leading-normal md:leading-[66px] mb-2">
                            {feature.stat}
                        </p>
                    )}

                    {/* Description */}
                    <p className="font-body text-[16px] md:text-[22px] font-normal text-white leading-[1.5] md:leading-[28px] mb-6 md:mb-8 max-w-full md:max-w-[689px]">
                        {feature.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
                        <button className="font-body font-semibold bg-white text-black px-6 md:px-8 py-2 text-[14px] md:text-[15px] hover:bg-opacity-90 transition-all h-[40px] md:h-[34px] flex items-center justify-center border border-white w-full sm:w-auto rounded-none">
                            {feature.buttonText}
                        </button>
                        <button className="font-body font-medium text-white text-[14px] md:text-[15px] hover:underline leading-[25.2px]">
                            {feature.linkText} →
                        </button>
                    </div>
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
            const scrollPerCard = window.innerHeight;
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
                trigger: section,
                start: "top top",
                end: `+=${totalScrollDistance}`,
                pin: cardsContainer,
                scrub: 0.5, // Smooth scrubbing
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
                                const scale = 0.9 + (0.1 * entryProgress);
                                const opacity = entryProgress;

                                gsap.set(card, {
                                    y: yPos,
                                    scale: scale,
                                    zIndex: 100 + i,
                                    opacity: opacity,
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

                            const targetY = -1 * depth * Y_OFFSET_PER_LEVEL;
                            const targetScale = 1 - (depth * SCALE_OFFSET_PER_LEVEL);

                            const rawGrey = Math.min(depth, 5) * 40;
                            const greyVal = Math.round(rawGrey);
                            const colorString = `rgb(${greyVal}, ${greyVal}, ${greyVal})`;

                            gsap.set(card, {
                                y: targetY,
                                scale: targetScale,
                                zIndex: 100 - Math.round(depth),
                                backgroundColor: colorString,
                                opacity: 1,
                                pointerEvents: depth > 0.5 ? "none" : "auto",
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
            <div className="max-w-[1440px] px-6 lg:px-[93px] pt-6 pb-8">
                <p className="font-body text-[20px] font-semibold text-[#03c] mb-6 tracking-[-0.1px]">
                    Use Cases
                </p>
                <h2 className="font-heading text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-black leading-[1.1] tracking-[-0.1px]">
                    Where Tuck<br />Works Best
                </h2>
            </div>

            {/* Cards Container - This gets pinned */}
            {/* Height must be enough to show one full card */}
            <div
                ref={cardsContainerRef}
                className="scheduling-cards relative w-full flex items-center justify-center overflow-visible pt-8 h-[100vh] px-4 md:px-0"
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
            <div className="h-[5vh]" />
        </section>
    );
}
