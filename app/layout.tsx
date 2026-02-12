import type { Metadata } from "next";
import "./globals.css";
import { hostGrotesk, figtree, jetbrainsMono, inter } from "./fonts";

export const metadata: Metadata = {
    title: "Tuck - AI Virtual Try-On",
    description: "Experience the next generation of virtual try-on technology with Tuck.",
    icons: {
        icon: '/icon.webp',
    },
};

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${hostGrotesk.variable} ${figtree.variable} ${jetbrainsMono.variable} ${inter.variable} antialiased`}
            >
                <SmoothScrolling />
                {children}
            </body>
        </html>
    );
}
