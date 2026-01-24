import React from "react";

interface GradientBlurProps {
    color1?: string;
    color2?: string;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
    size?: "small" | "medium" | "large";
    opacity?: number;
    className?: string;
}

export default function GradientBlur({
    color1 = "#6993CD",
    color2 = "#86D0CC",
    position = "center",
    size = "large",
    opacity = 0.3,
    className = "",
}: GradientBlurProps) {
    const positions = {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0",
        "bottom-left": "bottom-0 left-0",
        "bottom-right": "bottom-0 right-0",
        "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    };

    const sizes = {
        small: "w-64 h-64",
        medium: "w-96 h-96",
        large: "w-[600px] h-[600px]",
    };

    return (
        <div
            className={`absolute ${positions[position]} ${sizes[size]} ${className}`}
            style={{
                background: `radial-gradient(circle, ${color1}, ${color2})`,
                filter: "blur(120px)",
                opacity: opacity,
                pointerEvents: "none",
            }}
        />
    );
}
