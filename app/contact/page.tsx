"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Top Spacer for fixed header */}
            <div className="h-[85px]"></div>

            {/* Main Contact Section */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column - Heading */}
                    <div className="lg:w-1/3">
                        <h1 className="font-heading text-[42px] lg:text-[52px] font-bold leading-[1.1] text-[#161c2d] tracking-[-1px]">
                            Let’s discuss how Tuck can fit into your retail experience
                        </h1>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:w-2/3 max-w-[800px]">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Name */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-body text-[14px] font-medium text-[#161c2d]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-[#f9f9f9] border-none rounded-none p-4 font-body text-[16px] focus:ring-1 focus:ring-gray-300 outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-body text-[14px] font-medium text-[#161c2d]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-[#f9f9f9] border-none rounded-none p-4 font-body text-[16px] focus:ring-1 focus:ring-gray-300 outline-none"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="font-body text-[14px] font-medium text-[#161c2d]">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-[#f9f9f9] border-none rounded-none p-4 font-body text-[16px] focus:ring-1 focus:ring-gray-300 outline-none"
                                />
                            </div>

                            {/* Company Name */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="company" className="font-body text-[14px] font-medium text-[#161c2d]">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full bg-[#f9f9f9] border-none rounded-none p-4 font-body text-[16px] focus:ring-1 focus:ring-gray-300 outline-none"
                                />
                            </div>

                            {/* Country/Region */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="country" className="font-body text-[14px] font-medium text-[#161c2d]">
                                    Country/Region
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    className="w-full bg-[#f9f9f9] border-none rounded-none p-4 font-body text-[16px] focus:ring-1 focus:ring-gray-300 outline-none"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="font-body text-[14px] font-medium text-[#161c2d]">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full bg-[#f9f9f9] border-none rounded-none p-4 font-body text-[16px] focus:ring-1 focus:ring-gray-300 outline-none resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-4">
                                <button type="submit" className="w-full bg-[#0033cc] hover:bg-[#002bb0] text-white font-body font-bold text-[16px] py-4 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Blue Info Banner */}
            <section className="bg-[#0033cc] text-white py-16 lg:py-24 px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Heading Column */}
                    <div className="lg:w-1/3">
                        <p className="font-body text-[16px] font-medium mb-4">Contact us</p>
                        <h2 className="font-heading text-[32px] lg:text-[40px] font-bold leading-[1.2]">
                            Speak with our team about demos, pilots, or integrations.
                        </h2>
                    </div>

                    {/* Email Column */}
                    <div className="lg:w-1/3">
                        <h3 className="font-heading text-[20px] font-bold mb-4">Email Address</h3>
                        <div className="w-8 h-[2px] bg-white/50 mb-6"></div>
                        <a href="mailto:info@xapien.in" className="font-body text-[18px] underline underline-offset-4 hover:text-white/80 transition-colors block mb-4">
                            info@xapien.in
                        </a>
                        <p className="font-body text-[16px] text-blue-100 leading-relaxed">
                            Assistance hours:<br />
                            Monday - Friday<br />
                            9 AM - 6 PM IST
                        </p>
                    </div>

                    {/* Location Column */}
                    <div className="lg:w-1/3">
                        <h3 className="font-heading text-[20px] font-bold mb-4">Location</h3>
                        <div className="w-8 h-[2px] bg-white/50 mb-6"></div>
                        <p className="font-body text-[18px] font-bold text-white">
                            Kochi, Kerala, India
                        </p>
                    </div>
                </div>
            </section>

            <Footer showCta={false} />
        </main>
    );
}
