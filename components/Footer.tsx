import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-[1440px] mx-auto px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Company */}
                    <div>
                        <h4 className="font-heading text-lg font-medium mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-heading text-lg font-medium mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Integration</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-heading text-lg font-medium mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">API</a></li>
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-heading text-lg font-medium mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Terms</a></li>
                            <li><a href="#" className="font-body text-white/70 hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="font-heading text-2xl font-medium mb-4 md:mb-0">
                        tuck
                    </div>
                    <div className="font-body text-white/70 text-sm">
                        © 2026 Tuck. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
