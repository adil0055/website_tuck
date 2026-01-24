import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "default" | "large";
    className?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    size = "default",
    className = "",
    onClick,
}: ButtonProps) {
    const baseStyles = "font-body font-medium transition-all duration-200 rounded-none inline-flex items-center justify-center";

    const variants = {
        primary: "bg-graphite text-white hover:bg-graphite/90",
        secondary: "bg-white text-graphite hover:bg-polar-mist",
        outline: "border-2 border-graphite text-graphite hover:bg-graphite hover:text-white",
    };

    const sizes = {
        default: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
}
