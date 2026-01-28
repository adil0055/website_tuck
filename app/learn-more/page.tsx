"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter, usePathname } from "next/navigation";

const content = [
    {
        id: "fashion-retail-stores",
        number: "01",
        title: "Fashion Retail Stores",
        description: [
            "Tuck Magic Mirror turns your large-format store into an endless aisle without adding racks or staff. Shoppers can browse, size, and virtually try on items that are in the back room, another location, or only available online.",
            "The mirror lets customers switch sizes, colors, and styles in seconds, then head straight to checkout or request the exact pieces from staff. You reduce stockout frustration, keep the floor tidy, and move more inventory without expanding your footprint."
        ]
    },
    {
        id: "e-commerce-marketplaces",
        number: "02",
        title: "E-commerce Marketplaces",
        description: [
            "Tuck API standardizes the fit experience across thousands of sellers, even when their photography and size charts are all over the place. Every item, from any vendor, can be tried on using the shopper’s own body profile or image.",
            "This creates a single, trusted “virtual fitting room” layer on top of a messy catalog. Shoppers gain confidence to buy from new or long‑tail vendors, while you cut sizing-related returns and support growth without compromising customer experience."
        ]
    },
    {
        id: "single-brand-retail-stores",
        number: "03",
        title: "Single Brand Retail Stores",
        description: [
            "Tuck Magic Mirror lets smaller brand stores behave like flagship locations. With limited floor space, you no longer have to choose between depth of sizes and breadth of styles. The mirror makes your entire assortment—current season, upcoming drops, and online exclusives—instantly browsable.",
            "Customers can explore outfits you don’t physically stock in that store, try them virtually, and place orders for home delivery or in‑store pickup. You maximize revenue per square foot and keep the store visually clean while still feeling “fully stocked.”"
        ]
    },
    {
        id: "d2c-brands",
        number: "04",
        title: "D2C Brands (Online & Offline)",
        description: [
            "For D2C brands expanding into physical retail, Tuck connects your channels around a single fit experience. The API powers try‑on and size recommendations on your website, while Magic Mirror brings the same profile into pop‑ups, showrooms, and permanent stores.",
            "Customers build their try‑on profile once and reuse it everywhere—seeing consistent size guidance and visuals whether they’re on mobile or in front of a mirror. You get unified data on fit behavior across online and offline, and a seamless brand story at every touchpoint."
        ]
    },
    {
        id: "fast-fashion-retailers",
        number: "05",
        title: "Fast Fashion Retailers",
        description: [
            "Tuck API helps fast fashion retailers protect margin in a category notorious for high return rates. By moving the fitting room into the product page, shoppers can check how a style will look and fit on their body before they hit “buy now.”",
            "The experience is lightweight and mobile‑first, built for Gen‑Z browsing habits. Fewer size gambles mean fewer return parcels, less reverse logistics, and a bigger share of each season’s volume turning into kept, loved items rather than costly churn."
        ]
    },
    {
        id: "malls-airports-ad-networks",
        number: "06",
        title: "Malls, Airports & Ad-Networks",
        description: [
            "Tuck Magic Mirror upgrades digital signage from passive screens into interactive media that people actually stop to use. Visitors can step up to the mirror, try on looks from participating brands, and scan a code to continue the experience or purchase on their phone.",
            "Property owners and ad‑networks gain a new format: performance‑driven, shoppable media with measurable engagement and attribution. Tenants get qualified traffic and outfit discovery; you get longer dwell times and premium sponsorship inventory."
        ]
    },
    {
        id: "luxury-bespoke-fashion",
        number: "07",
        title: "Luxury & Bespoke Fashion",
        description: [
            "Tuck API gives luxury ateliers and bespoke tailors a way to show high‑ticket garments before they exist. Using detailed body data, the system visualizes how a specific cut, fabric, and length will drape on the client’s actual form.",
            "Designers can co‑create with customers in real time—adjusting lapels, lengths, or silhouettes while the client watches the changes on screen. This builds confidence in multi‑thousand‑dollar decisions, reduces alterations, and elevates the fitting process into a memorable, tech‑enabled experience."
        ]
    }
];

export default function LearnMorePage() {
    React.useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <main className="min-h-screen bg-white text-black">
            <Header />

            <div className="pt-32 pb-20">
                {/* Top horizontal line - Full width as per design */}
                <div className="w-full border-t border-black" />

                <div className="max-w-[1400px] mx-auto border-x border-black min-h-screen">
                    <div className="flex flex-col">
                        {content.map((item, index) => (
                            <section
                                key={item.id}
                                id={item.id}
                                className={`group px-8 md:px-[60px] py-[60px] scroll-mt-24 last:pb-0`}
                            >
                                <span className="font-heading text-[32px] font-extrabold text-[#000] mb-2 block leading-[61px] tracking-[-0.1px]">
                                    {item.number}
                                </span>

                                <h2 className="font-heading text-[36px] font-extrabold text-[#000] mb-6 leading-[61px] tracking-[-0.1px]">
                                    {item.title}
                                </h2>

                                <div className="space-y-6">
                                    {item.description.map((paragraph, pIndex) => (
                                        <p
                                            key={pIndex}
                                            className="font-body text-[18px] font-normal text-[#000] leading-[35px] tracking-[-0.1px] max-w-[800px]"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
