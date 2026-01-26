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
const INACTIVE_Y_OFFSET = -30; // Cards move up when covered (in px, like -1.781vw)
const SCALE_WHEN_COVERED = 0.97; // Scale when card is behind (0.9703 from transform9)
const INACTIVE_BG = "rgb(180, 180, 180)"; // Grey color for inactive cards (adjusted for better contrast)
const ACTIVE_BG = "rgb(0, 0, 0)"; // Black color for active cards
const OVERLAP_THRESHOLD = 0.8; // 50% - card must be more than half covered to grey out
const CONTENT_OFFSET_X = 370; // adjust to match design

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
            className="scheduling-card absolute left-1/2 -translate-x-1/2 w-full p-12 origin-top overflow-hidden will-change-transform"
            style={{
                maxWidth: CARD_WIDTH,
                height: CARD_HEIGHT,
                backgroundColor: ACTIVE_BG,
                // All cards start at same position, stacked
                top: 0,
                // Later cards have higher z-index (appear on top)
                zIndex: index + 1,
            }}
        >
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Top Section: Index and Title/Subtitle */}
                <div className="flex items-start gap-12">
                    {/* Index Number - Left Side */}
                    <p className="font-heading text-[32px] font-normal text-white leading-[66px]">
                        {feature.index}
                    </p>

                    {/* Title and Subtitle - Center */}
                    <div className="flex-1" style={{ marginLeft: CONTENT_OFFSET_X }}>
                        <h3 className="font-heading text-[32px] font-medium text-white leading-[66px] mb-2">
                            {feature.title}
                        </h3>
                        <p className="font-heading text-[28px] font-normal text-white leading-[66px]">
                            {feature.subtitle}
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Stat, Description, and Buttons */}
                <div className="pl-[100px]" style={{ marginLeft: CONTENT_OFFSET_X }}>
                    {/* Stat (if exists) */}
                    {feature.stat && (
                        <p className="font-heading text-[16px] font-normal text-white leading-[66px] mb-2">
                            {feature.stat}
                        </p>
                    )}

                    {/* Description */}
                    <p className="font-body text-[22px] font-normal text-white leading-[28px] mb-8 max-w-[689px]">
                        {feature.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-8">
                        <button className="font-body font-semibold bg-white text-black px-8 py-2 text-[15px] hover:bg-opacity-90 transition-all h-[34px] flex items-center justify-center border border-white">
                            {feature.buttonText}
                        </button>
                        <button className="font-body font-medium text-white text-[15px] hover:underline leading-[25.2px]">
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
            // Total scroll distance needed to go through all cards
            const totalScrollDistance = scrollPerCard * (totalCards - 1);

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
                    const scrollPos = scrollProgress * totalScrollDistance;

                    cards.forEach((card, i) => {
                        // --- LOGIC FOR CARD i BECOMING COVERED (by card i+1) ---
                        if (i < totalCards - 1) {
                            const cardStartScroll = i * scrollPerCard;
                            // Progress of how much the NEXT card has covered THIS card
                            // 0 = just started being covered, 1 = fully covered
                            const coverProgress = gsap.utils.clamp(0, 1, (scrollPos - cardStartScroll) / scrollPerCard);

                            if (coverProgress > 0) {
                                // Card is being covered - move up slightly, scale down
                                const yOffset = INACTIVE_Y_OFFSET * coverProgress;
                                const scaleValue = 1 - ((1 - SCALE_WHEN_COVERED) * coverProgress);

                                // Background color: stays black until >50% covered
                                let bgColor = ACTIVE_BG;
                                if (coverProgress > OVERLAP_THRESHOLD) {
                                    // Interpolate from black to grey after 50% coverage
                                    const greyProgress = (coverProgress - OVERLAP_THRESHOLD) / (1 - OVERLAP_THRESHOLD);
                                    // Interpolate RGB: black (0,0,0) -> grey (180,180,180)
                                    const greyValue = Math.round(180 * greyProgress);
                                    bgColor = `rgb(${greyValue}, ${greyValue}, ${greyValue})`;
                                }

                                gsap.set(card, {
                                    y: yOffset,
                                    scale: scaleValue,
                                    backgroundColor: bgColor,
                                });
                            } else {
                                // Card is actively visible (not covered yet)
                                gsap.set(card, {
                                    y: 0,
                                    scale: 1,
                                    backgroundColor: ACTIVE_BG,
                                });
                            }
                        }

                        // --- LOGIC FOR CARD i SLIDING UP (covering card i-1) ---
                        if (i > 0) {
                            // This card slides up when scroll reaches position for card i-1
                            const slideStart = (i - 1) * scrollPerCard;
                            const slideEnd = i * scrollPerCard;

                            // Calculate slide progress (0 = below viewport, 1 = in position)
                            if (scrollPos < slideStart) {
                                // Before slide starts - keep below viewport
                                gsap.set(card, { y: window.innerHeight });
                            } else if (scrollPos >= slideStart && scrollPos <= slideEnd) {
                                // Sliding up
                                const slideProgress = (scrollPos - slideStart) / scrollPerCard;
                                // Map 0->1 progress to WindowHeight->0 y-position
                                const yPos = window.innerHeight * (1 - slideProgress);
                                gsap.set(card, {
                                    y: yPos,
                                    scale: 1,
                                    backgroundColor: ACTIVE_BG,
                                });
                            } else if (scrollPos > slideEnd) {
                                // Fully slid up - now it will be handled by the "being covered" logic above
                                // if it is not the last card.
                                // If it is the last card, it just stays there.
                                if (i === totalCards - 1) {
                                    gsap.set(card, { y: 0, scale: 1, backgroundColor: ACTIVE_BG });
                                }
                            }
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
                className="scheduling-cards relative w-full flex items-center justify-center overflow-hidden -mt-4"
                style={{ height: '100vh', maxHeight: '100vh' }}
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
