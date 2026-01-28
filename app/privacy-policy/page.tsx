"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Spacer for fixed header */}
            <div className="h-[85px]"></div>

            <section className="max-w-[1000px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
                <h1 className="font-heading text-[42px] lg:text-[52px] font-bold text-[#161c2d] mb-8 tracking-[-1px]">
                    Privacy Policy
                </h1>

                <div className="font-body text-[16px] text-[#161c2d] leading-relaxed space-y-8">
                    {/* Metadata */}
                    <div className="mb-8">
                        <p><strong>Effective Date:</strong> January 26, 2026</p>
                        <p><strong>Last Updated:</strong> January 26, 2026</p>
                    </div>

                    <p>
                        Xapien Innovatus Private Limited ("Company," "we," "us," or "our"), operating under the brand name Tuck, is committed to protecting your privacy. We act as a Data Fiduciary under the Digital Personal Data Protection Act, 2023 (DPDP Act) regarding the processing of your personal data.
                    </p>

                    {/* 1. Corporate Information */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">1. Corporate Information</h2>
                        <ul className="list-none pl-4 space-y-2">
                            <li><strong>Legal Entity:</strong> Xapien Innovatus Private Limited</li>
                            <li><strong>Corporate Identity Number (CIN):</strong> U62090KL2025PTC092495</li>
                            <li><strong>Jurisdiction:</strong> India (Kerala)</li>
                        </ul>
                    </div>

                    {/* 2. Scope & Consent */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">2. Scope & Consent</h2>
                        <p className="mb-4">
                            By using the Tuck Kiosk, Website (tucknow.com), or API services, you act as the Data Principal and explicitly consent to the collection and processing of your personal and sensitive data for the specific purposes outlined below.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Consent Manager:</strong> For users under 18, consent must be provided by a lawful guardian.</li>
                            <li><strong>Withdrawal of Consent:</strong> You may withdraw consent at any time by contacting our Grievance Officer, subject to the deletion protocols in Section 5.</li>
                        </ul>
                    </div>

                    {/* 3. Collection of Data */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">3. Collection of Data</h2>
                        <p className="mb-4">We collect specific data points to facilitate the Virtual Try-On (VTON) and Fit Intelligence experience across our channels:</p>

                        <h3 className="font-bold mt-4 mb-2">A. Types of Data Processed (including SPDI)</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Biometric Data:</strong> Raw full-body photographs, facial geometry points, body mesh vectors, and skin tone analysis.</li>
                            <li><strong>Health & Physical Data:</strong> Self-declared height, gender, and AI-derived body measurements (e.g., chest, waist, hip, inseam).</li>
                            <li><strong>Usage Data:</strong> Garment preferences, try-on history, and size selection.</li>
                        </ul>

                        <h3 className="font-bold mt-4 mb-2">B. Collection Channels</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>In-Store Kiosk:</strong> We capture your full-body image and inputs (Height/Gender) to generate the VTON session.</li>
                            <li><strong>Online Widget:</strong> We process images you voluntarily upload or capture via your device camera.</li>
                            <li><strong>Tuck Vault (Optional):</strong> If you opt-in, we associate your biometric profile with a unique Tuck ID or mobile number to facilitate one-click logins in the future.</li>
                        </ul>
                    </div>

                    {/* 4. Purpose of Processing */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">4. Purpose of Processing</h2>
                        <p className="mb-4">We process this data strictly for:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Virtual Try-On (VTON):</strong> Generating the visual simulation of garments on your body.</li>
                            <li><strong>Fit Intelligence:</strong> Analyzing your body metrics to provide size recommendations ("See Your Fit" heatmaps).</li>
                            <li><strong>Authentication:</strong> Verifying your identity for "Tuck Vault" access (if opted-in).</li>
                            <li><strong>No AI Training:</strong> We do NOT currently use your personally identifiable biometric data or raw photos to re-train or fine-tune our proprietary AI models. Your data is isolated to your specific session. We reserve the right to update this policy in the future with prior notice.</li>
                        </ul>
                    </div>

                    {/* 5. Data Retention & Deletion */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">5. Data Retention & Deletion</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Guest Users:</strong> Biometric data is stored in temporary cache memory and is automatically purged within 24 hours of session completion.</li>
                            <li><strong>Tuck Vault Users:</strong> Data is retained to facilitate seamless future logins.</li>
                            <li><strong>The "Sunset" Clause:</strong> If a Tuck Vault account remains inactive for a continuous period of two (2) years, all associated biometric and personal data is permanently deleted from our servers.</li>
                            <li><strong>Deletion Request:</strong> You may request the immediate deletion of your data at any time by contacting us.</li>
                        </ul>
                    </div>

                    {/* 6. Sharing of Information */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">6. Sharing of Information</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Processors:</strong> We share data with trusted cloud infrastructure providers (e.g., AWS, GCP) who act as Data Processors. They are contractually bound to process data only on our instructions and maintain security standards equivalent to ours.</li>
                            <li><strong>Law Enforcement:</strong> We may disclose data if required by an order under Indian law or by a competent court.</li>
                            <li><strong>No Sale of Data:</strong> We do not sell your personal or biometric information to third parties.</li>
                        </ul>
                    </div>

                    {/* 7. International Data Transfers */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">7. International Data Transfers (Global Users)</h2>
                        <p className="mb-4">
                            Xapien Innovatus Private Limited is based in India. By using the Platform, you acknowledge that your data will be transferred to, stored, and processed in India or on global cloud servers.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>For European (EEA/UK) Users:</strong> We transfer data based on Standard Contractual Clauses (SCCs) or specific consent derogations under Article 49(1)(a) of the GDPR. By using the service, you explicitly consent to this transfer necessary for the performance of the VTON service.</li>
                            <li><strong>Security:</strong> We apply industry-standard encryption (TLS 1.3 in transit, AES-256 at rest) regardless of processing location.</li>
                        </ul>
                    </div>

                    {/* 8. Rights of the Data Principal */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">8. Rights of the Data Principal (Regional Rights)</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>India (DPDP Act):</strong> Right to Access, Correction, Erasure, and Grievance Redressal.</li>
                            <li><strong>Europe (GDPR):</strong> Right to Withdraw Consent, Right to Data Portability, Right to lodge a complaint with a DPA.</li>
                            <li><strong>USA (California - CCPA):</strong> Right to Know, Right to Delete, Right to Non-Discrimination.</li>
                        </ul>
                    </div>

                    {/* 9. Grievance Officer */}
                    <div>
                        <h2 className="font-heading text-[20px] font-bold mb-4">9. Grievance Officer</h2>
                        <p className="mb-4">In compliance with the IT Rules, 2011 and DPDP Act, 2023, please address privacy grievances to:</p>
                        <ul className="list-none pl-4 space-y-2">
                            <li><strong>Designation:</strong> The Grievance Officer</li>
                            <li><strong>Company:</strong> Xapien Innovatus Private Limited</li>
                            <li><strong>Email:</strong> <a href="mailto:info@xapien.in" className="text-blue-600 underline">info@xapien.in</a></li>
                            <li><strong>Phone:</strong> +91 8136926111</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer showCta={false} />
        </main>
    );
}
