"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* SPACER for fixed header */}
            <div className="h-[85px]"></div>

            <section className="max-w-[1440px] mx-auto px-6 lg:px-[93px] py-16 lg:py-24">
                <div className="max-w-[900px]">
                    <p className="font-body text-[16px] font-medium text-[#161c2d] mb-4">About us</p>
                    <h1 className="font-heading text-[48px] lg:text-[64px] font-bold leading-[1.1] text-[#161c2d] mb-16 tracking-[-1.5px]">
                        We Are Decoding<br />
                        the DNA of Fit.
                    </h1>

                    <div className="space-y-16">
                        {/* The Mission */}
                        <div>
                            <h2 className="font-heading text-[20px] font-bold text-[#161c2d] mb-4">The Mission</h2>
                            <p className="font-body text-[18px] lg:text-[20px] leading-[1.6] text-[#161c2d] max-w-[800px]">
                                At Xapien Innovatus, we believe the future of retail isn’t just digital—it is intelligent. Our vision is to build the world’s first Fit Intelligence engine: a system where data, physics, and fashion merge to eliminate uncertainty in fashion shopping.
                            </p>
                        </div>

                        {/* The Product */}
                        <div>
                            <h2 className="font-heading text-[20px] font-bold text-[#161c2d] mb-4">The Product</h2>
                            <p className="font-body text-[18px] lg:text-[20px] leading-[1.6] text-[#161c2d] max-w-[800px]">
                                We are starting this revolution with Tuck. Tuck is our immediate answer to retail’s oldest problem. By leveraging advanced Diffusion Models for hyper-realistic Virtual Try-On, combined with precision Size Suggestion Algorithms, we turn the subjective question of “Does this fit?” into an instant, visual “Yes.”
                            </p>
                        </div>

                        {/* The Legacy */}
                        <div>
                            <h2 className="font-heading text-[20px] font-bold text-[#161c2d] mb-4">The Legacy</h2>
                            <p className="font-body text-[18px] lg:text-[20px] leading-[1.6] text-[#161c2d] max-w-[800px]">
                                This isn’t our first retail revolution. Our DNA is rooted in proven innovation. Our founder previously built Watasale, a pioneering autonomous retail startup that was acquired by Amazon. We bring that same world-class engineering rigor and deep retail insight to Tuck.
                            </p>
                        </div>
                    </div>

                    {/* Data Grid */}
                    <div className="mt-24 w-full max-w-[800px]">
                        <div className="grid grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr] gap-y-6 text-[15px] font-body text-[#161c2d]">

                            <div className="font-medium text-gray-500">Entity</div>
                            <div>Xapien Innovatus Pvt. Ltd.</div>

                            <div className="font-medium text-gray-500">Focus</div>
                            <div>Deep Tech, Generative AI, Retail Infrastructure</div>

                            <div className="font-medium text-gray-500">Product</div>
                            <div>Tuck (Virtual Try-On Kiosk & API)</div>

                            <div className="font-medium text-gray-500">Leadership</div>
                            <div>Ex-Watasale (Acq. by Amazon)</div>

                            <div className="font-medium text-gray-500">Core Tech</div>
                            <div>Latent Diffusion Models, Real-Time Body Mapping, AI Fit Physics</div>

                            <div className="font-medium text-gray-500">HQ</div>
                            <div>Kochi, India</div>

                            <div className="font-medium text-gray-500">Status</div>
                            <div>Incorporated Private Limited Company</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer showCta={false} />
        </main>
    );
}
